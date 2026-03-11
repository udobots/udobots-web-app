'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/content/testimonials';

const AUTO_ADVANCE_MS = 6000;

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="relative min-h-[200px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-500 ${
              i === active
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <svg
              className="w-10 h-10 text-primary-500/30 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="text-primary-400 font-semibold">{t.name}</p>
              <p className="text-gray-500 text-sm">
                {t.role}, {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonials">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonial ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? 'bg-primary-500 w-8' : 'bg-gray-600 hover:bg-gray-500 w-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
