'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface CatalogSearchProps {
  onSearch: (value: string) => void;
  value: string;
}

export function CatalogSearch({ onSearch, value }: CatalogSearchProps) {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={locale === 'th' ? 'ค้นหาลาย...' : 'Search patterns...'}
        className="w-full px-4 py-2.5 pl-10 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
    </div>
  );
}
