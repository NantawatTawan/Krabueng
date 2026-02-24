'use client';

import React from 'react';
import { clients } from '@/data/clients';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ClientLogos() {
  const { locale } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-stone-100">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-center text-sm font-medium text-stone-400 uppercase tracking-widest mb-10">
          {locale === 'th' ? 'ได้รับความไว้วางใจจากองค์กรชั้นนำ' : 'Trusted by Leading Organizations'}
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-stone-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300 group"
            >
              <span className="text-2xl font-black text-stone-300 group-hover:text-brand-600 transition-colors tracking-wider">
                {client.logo}
              </span>
              <span className="text-[10px] text-stone-400 mt-2 font-medium">
                {locale === 'th' ? client.typeTh : client.typeEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
