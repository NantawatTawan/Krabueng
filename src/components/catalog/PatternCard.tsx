'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star } from 'lucide-react';
import type { Pattern } from '@/data/patterns';

interface PatternCardProps {
  pattern: Pattern;
  viewMode?: 'grid' | 'list';
}

export function PatternCard({ pattern, viewMode = 'grid' }: PatternCardProps) {
  const { locale } = useLanguage();

  if (viewMode === 'list') {
    return (
      <div className="flex gap-4 bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-brand-200 transition-all duration-300">
        <div className="relative w-36 h-36 flex-shrink-0 bg-stone-100">
          <Image src={pattern.image} alt={pattern.nameEn} fill className="object-cover" />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-stone-900">{pattern.nameEn}</h3>
                <p className="text-sm text-stone-500">{pattern.nameTh}</p>
              </div>
              {pattern.isPopular && (
                <span className="flex items-center gap-1 bg-brand-50 text-brand-700 text-xs px-3 py-1 rounded-full font-medium">
                  <Star className="w-3 h-3" />
                  {locale === 'th' ? 'ยอดนิยม' : 'Popular'}
                </span>
              )}
            </div>
            <p className="text-sm text-stone-600 mb-3 line-clamp-2">
              {locale === 'th' ? pattern.descriptionTh : pattern.descriptionEn}
            </p>
            <div className="flex items-center justify-between">
              <span className="badge-premium bg-stone-100 text-stone-600 text-[10px]">
                {pattern.category}
              </span>
              <span className="text-base font-bold text-brand-700">{pattern.priceRange}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-52 bg-stone-100 overflow-hidden">
        <Image
          src={pattern.image}
          alt={pattern.nameEn}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {pattern.isPopular && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">
            <Star className="w-3 h-3" />
            {locale === 'th' ? 'ยอดนิยม' : 'Popular'}
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="badge-premium bg-white/90 backdrop-blur-sm text-stone-700 text-[10px]">
            {pattern.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-stone-900">{pattern.nameEn}</h3>
          <p className="text-sm text-stone-500">{pattern.nameTh}</p>
        </div>
        <p className="text-sm text-stone-600 mb-4 flex-grow line-clamp-2">
          {locale === 'th' ? pattern.descriptionTh : pattern.descriptionEn}
        </p>
        <div className="pt-4 border-t border-stone-100">
          <p className="text-xs text-stone-400 mb-1">
            {locale === 'th' ? 'ราคา' : 'Price Range'}
          </p>
          <p className="text-lg font-bold text-brand-700">{pattern.priceRange}</p>
        </div>
      </div>
    </div>
  );
}
