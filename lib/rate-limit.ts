interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimit = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

/**
 * Simple in-memory rate limiter (per-IP, per-minute).
 * Returns true if the request is allowed, false if rate-limited.
 *
 * NOTE: This is a single-instance in-memory store. For multi-instance
 * deployments, replace with Redis-backed rate limiting (e.g. Upstash).
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}
