'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

type Category = 'all' | 'Classic' | 'Natural' | 'European' | 'Modern';

interface CatalogFilterProps {
  onFilterChange: (category: Category) => void;
  currentFilter: Category;
}

const categories: { value: Category; labelTh: string; labelEn: string }[] = [
  { value: 'all', labelTh: 'ทั้งหมด', labelEn: 'All' },
  { value: 'Classic', labelTh: 'คลาสสิก', labelEn: 'Classic' },
  { value: 'Natural', labelTh: 'ธรรมชาติ', labelEn: 'Natural' },
  { value: 'European', labelTh: 'ยุโรป', labelEn: 'European' },
  { value: 'Modern', labelTh: 'สมัยใหม่', labelEn: 'Modern' },
];

export function CatalogFilter({ onFilterChange, currentFilter }: CatalogFilterProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex gap-1 bg-stone-100 rounded-xl p-1">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onFilterChange(cat.value)}
          className={cn(
            'px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap',
            currentFilter === cat.value
              ? 'bg-white text-stone-900 shadow-sm'
              : 'text-stone-500 hover:text-stone-700'
          )}
        >
          {locale === 'th' ? cat.labelTh : cat.labelEn}
        </button>
      ))}
    </div>
  );
}
