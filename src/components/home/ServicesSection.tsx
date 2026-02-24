'use client';

import React from 'react';
import { Stamp, HardHat, Palette, Wrench, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  Stamp: <Stamp size={28} />,
  HardHat: <HardHat size={28} />,
  Palette: <Palette size={28} />,
  Wrench: <Wrench size={28} />,
};

const cardStyles = [
  'from-stone-900 to-stone-800',
  'from-brand-700 to-brand-600',
  'from-stone-700 to-stone-600',
  'from-brand-900 to-brand-800',
];

export default function ServicesSection() {
  const { locale } = useLanguage();

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-premium bg-brand-50 text-brand-700 mx-auto mb-4">
            {locale === 'th' ? 'บริการของเรา' : 'Our Services'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {locale === 'th' ? (
              <>บริการ<span className="text-gradient">ครบวงจร</span></>
            ) : (
              <>Complete <span className="text-gradient">Solutions</span></>
            )}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {locale === 'th'
              ? 'ตั้งแต่การออกแบบจนถึงการติดตั้ง เราดูแลทุกขั้นตอนอย่างมืออาชีพ'
              : 'From design to installation, we handle every step with professional care'}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const title = locale === 'th' ? service.titleTh : service.titleEn;
            const description = locale === 'th' ? service.descriptionTh : service.descriptionEn;

            return (
              <div
                key={service.id}
                className={`group bg-gradient-to-br ${cardStyles[index % cardStyles.length]} rounded-2xl p-8 text-white hover-lift cursor-default`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  {iconMap[service.icon] || <Stamp size={28} />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{title}</h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {locale === 'th' ? feature.th : feature.en}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                    {locale === 'th' ? 'เรียนรู้เพิ่มเติม' : 'Learn More'}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
