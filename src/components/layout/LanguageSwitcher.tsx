'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setLocale('th')}
        className={cn(
          'px-3 py-2 font-semibold text-sm transition-colors',
          locale === 'th'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        )}
      >
        TH
      </button>
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'px-3 py-2 font-semibold text-sm transition-colors border-l border-gray-300',
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        )}
      >
        EN
      </button>
    </div>
  );
}
