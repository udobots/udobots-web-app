import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { siteConfig } from '@/lib/site-config';
import { validateContactForm } from '@/lib/validation';
import type { ContactApiPayload } from '@/types';

// ─── Email HTML builders ──────────────────────────────────────────────────────

function buildInternalEmail(data: ContactApiPayload): string {
  const { name, company, email, phone, message, recipientAlias, interest } = data;
  const isHiring = recipientAlias === 'hiring';
  const tag = isHiring ? 'Application' : 'Enquiry';
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"/></head>
    <body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#121212;">
      <div style="background:#FE6403;padding:16px 24px;border-radius:8px 8px 0 0;">
        <h1 style="color:white;margin:0;font-size:20px;">
          ${isHiring ? 'New Form Submission' : `New ${tag}`} — ${siteConfig.nameDisplay}
        </h1>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5;">
        ${isHiring ? '<p style="margin:0 0 16px;color:#444;">A new user has submitted the form.</p>' : ''}
        <p style="margin:0 0 8px;font-weight:600;color:#666;">Details</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:600;width:120px;color:#666;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#FE6403;">${email}</a></td></tr>
          ${!isHiring ? `<tr><td style="padding:8px 0;font-weight:600;color:#666;">Company</td><td style="padding:8px 0;">${company || '—'}</td></tr>` : ''}
          ${!isHiring ? `<tr><td style="padding:8px 0;font-weight:600;color:#666;">Phone</td><td style="padding:8px 0;">${phone || '—'}</td></tr>` : ''}
          ${interest ? `<tr><td style="padding:8px 0;font-weight:600;color:#666;">Interest</td><td style="padding:8px 0;">${interest}</td></tr>` : ''}
          <tr><td style="padding:8px 0;font-weight:600;color:#666;">Timestamp</td><td style="padding:8px 0;font-size:13px;color:#555;">${timestamp}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border:1px solid #e5e5e5;">
          <p style="margin:0 0 8px;font-weight:600;color:#666;">Message / Details</p>
          <p style="margin:0;white-space:pre-wrap;">${message.replace(/</g, '&lt;')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildAutoReplyEmail(name: string, recipientAlias: string): string {
  const isHiring = recipientAlias === 'hiring';
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"/></head>
    <body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#121212;">
      <div style="background:#FE6403;padding:16px 24px;border-radius:8px 8px 0 0;">
        <h1 style="color:white;margin:0;font-size:20px;">${siteConfig.nameDisplay}</h1>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e5e5;">
        <p>Hi ${name},</p>
        ${
          isHiring
            ? `<p>Thank you for your response. Your submission has been received successfully.</p>
               <p>Our team will review your details and get back to you shortly.</p>`
            : `<p>Thank you for reaching out to ${siteConfig.nameDisplay}. We've received your message and will get back to you within one working day.</p>`
        }
        <p>Best regards,<br/>UDoBots Team</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;"/>
        <p style="font-size:12px;color:#999;">
          ${siteConfig.contact.location} •
          <a href="mailto:${siteConfig.contact.email}" style="color:#FE6403;">${siteConfig.contact.email}</a>
        </p>
      </div>
    </body>
    </html>
  `;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Rate limiting (per IP, 3 requests/minute)
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    );
  }

  // Parse body
  let body: Partial<ContactApiPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, company, phone, message, recipientAlias, interest } = body;

  // Server-side validation
  const { valid, errors } = validateContactForm({ name, email, company, phone, message });
  if (!valid) {
    const firstError = Object.values(errors)[0];
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  // Send directly to the team inbox
  const toAddress = 'udobots@uds.in';

  const payload: ContactApiPayload = {
    name: name!,
    email: email!,
    company: company || '',
    phone: phone || '',
    message: message!,
    recipientAlias: (recipientAlias as ContactApiPayload['recipientAlias']) || 'contact',
    interest,
  };

  // Try to send with Resend
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);

      const isHiring = recipientAlias === 'hiring';
      const adminSubject = isHiring
        ? `New Form Submission - ${siteConfig.nameDisplay}`
        : `New Enquiry from ${name}${company ? ` (${company})` : ''}`;
      const userSubject = isHiring
        ? `Thank You for Your Submission - ${siteConfig.nameDisplay}`
        : `We received your message — ${siteConfig.nameDisplay}`;

      // Notify the team
      await resend.emails.send({
        from: `${siteConfig.nameDisplay} Website <contact@udobots.com>`,
        to: toAddress,
        replyTo: email!,
        subject: adminSubject,
        html: buildInternalEmail(payload),
      });

      // Confirmation to sender
      await resend.emails.send({
        from: `${siteConfig.nameDisplay} <contact@udobots.com>`,
        to: email!,
        subject: userSubject,
        html: buildAutoReplyEmail(name!, recipientAlias || 'contact'),
      });
    } catch (err) {
      console.error('[contact] Resend error:', err);
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again or email us directly.' },
        { status: 500 }
      );
    }
  } else {
    // Dev fallback: log to console when RESEND_API_KEY is not set
    console.log('[contact] No RESEND_API_KEY — logging submission:');
    console.log({ to: toAddress, ...payload });
  }

  return NextResponse.json({ success: true });
}
