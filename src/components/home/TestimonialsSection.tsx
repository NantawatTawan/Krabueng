'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TestimonialsSection() {
  const { locale } = useLanguage();

  return (
    <section className="section-padding bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-premium bg-white/10 text-brand-300 mx-auto mb-4">
            {locale === 'th' ? 'เสียงจากลูกค้า' : 'Client Testimonials'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {locale === 'th' ? (
              <>ลูกค้า<span className="text-brand-400">เชื่อมั่น</span>ในเรา</>
            ) : (
              <>Clients <span className="text-brand-400">Trust</span> Us</>
            )}
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            {locale === 'th'
              ? 'ความพึงพอใจของลูกค้าคือเป้าหมายสูงสุดของเรา'
              : 'Customer satisfaction is our highest priority'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const content = locale === 'th' ? testimonial.contentTh : testimonial.contentEn;
            const role = locale === 'th' ? testimonial.roleTh : testimonial.roleEn;
            const company = locale === 'th' ? testimonial.companyTh : testimonial.companyEn;

            return (
              <div
                key={testimonial.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote size={32} className="text-brand-500/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-400 text-brand-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-300 mb-8 leading-relaxed text-sm">
                  &ldquo;{content}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-stone-500">
                      {role} · {company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
