'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  onFilterChange: (filter: 'all' | 'private' | 'government') => void;
  currentFilter: 'all' | 'private' | 'government';
  filteredCount: number;
  totalCount: number;
}

const filters: { value: 'all' | 'private' | 'government'; labelTh: string; labelEn: string }[] = [
  { value: 'all', labelTh: 'ทั้งหมด', labelEn: 'All' },
  { value: 'private', labelTh: 'เอกชน', labelEn: 'Private' },
  { value: 'government', labelTh: 'ราชการ', labelEn: 'Government' },
];

export function ProjectFilter({
  onFilterChange,
  currentFilter,
  filteredCount,
  totalCount,
}: ProjectFilterProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="flex gap-1 bg-stone-200/50 rounded-xl p-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              currentFilter === f.value
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-500 hover:text-stone-700'
            )}
          >
            {locale === 'th' ? f.labelTh : f.labelEn}
          </button>
        ))}
      </div>

      <p className="text-sm text-stone-500">
        {locale === 'th' ? (
          <>{filteredCount} จาก {totalCount} โครงการ</>
        ) : (
          <>{filteredCount} of {totalCount} projects</>
        )}
      </p>
    </div>
  );
}
