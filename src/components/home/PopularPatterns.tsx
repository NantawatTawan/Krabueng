'use client';

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { patterns } from '@/data/patterns';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PopularPatterns() {
  const { locale } = useLanguage();

  const popularPatterns = patterns.filter((p) => p.isPopular).slice(0, 6);

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="badge-premium bg-brand-50 text-brand-700 mb-4">
              {locale === 'th' ? 'แคตตาล็อก' : 'Catalog'}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              {locale === 'th' ? (
                <>ลาย<span className="text-gradient">ยอดนิยม</span></>
              ) : (
                <>Popular <span className="text-gradient">Patterns</span></>
              )}
            </h2>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-semibold transition-colors group"
          >
            {locale === 'th' ? 'ดูแคตตาล็อกทั้งหมด' : 'View Full Catalog'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Patterns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {popularPatterns.map((pattern) => {
            const name = locale === 'th' ? pattern.nameTh : pattern.nameEn;

            return (
              <Link
                key={pattern.id}
                href="/catalog"
                className="group relative rounded-2xl overflow-hidden bg-stone-200 aspect-square hover-lift"
              >
                {/* Image */}
                <img
                  src={pattern.image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge-premium bg-white/20 backdrop-blur-sm text-white text-[10px]">
                    {pattern.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {pattern.nameEn}
                  </h3>
                  <p className="text-white/70 text-sm mb-2">
                    {pattern.nameTh}
                  </p>
                  <p className="text-brand-300 font-semibold text-sm">
                    {pattern.priceRange}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
