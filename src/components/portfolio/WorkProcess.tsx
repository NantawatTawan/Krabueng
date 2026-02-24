'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const steps = [
  {
    key: 'step1',
    emoji: '📐',
    titleTh: 'สำรวจและออกแบบ',
    titleEn: 'Survey & Design',
    descriptionTh: 'สำรวจพื้นที่จริง ให้คำปรึกษา และออกแบบลายพิมพ์ตามความต้องการ',
    descriptionEn: 'On-site survey, consultation, and custom pattern design to match your vision',
  },
  {
    key: 'step2',
    emoji: '🏗️',
    titleTh: 'เตรียมพื้นที่',
    titleEn: 'Site Preparation',
    descriptionTh: 'เตรียมฐานรากและพื้นที่ให้พร้อมสำหรับการเทคอนกรีต',
    descriptionEn: 'Prepare foundation and site for concrete pouring',
  },
  {
    key: 'step3',
    emoji: '🔨',
    titleTh: 'เทและพิมพ์ลาย',
    titleEn: 'Pour & Stamp',
    descriptionTh: 'เทคอนกรีตสด โรยสีผิวหน้า และพิมพ์ลายด้วยแม่พิมพ์คุณภาพสูง',
    descriptionEn: 'Pour fresh concrete, apply color hardener, and stamp with premium molds',
  },
  {
    key: 'step4',
    emoji: '🎨',
    titleTh: 'ตกแต่งและเคลือบ',
    titleEn: 'Finish & Seal',
    descriptionTh: 'ตกแต่งรายละเอียด ทำความสะอาด และเคลือบน้ำยาอะครีลิคป้องกัน',
    descriptionEn: 'Detail finishing, cleaning, and protective acrylic sealant coating',
  },
];

export function WorkProcess() {
  const { locale } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="badge-premium bg-brand-50 text-brand-700 mx-auto mb-4">
            {locale === 'th' ? 'ขั้นตอน' : 'Process'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {locale === 'th' ? (
              <>ขั้นตอนการ<span className="text-gradient">ทำงาน</span></>
            ) : (
              <>Our <span className="text-gradient">Work Process</span></>
            )}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {locale === 'th'
              ? '4 ขั้นตอนง่ายๆ สู่พื้นคอนกรีตพิมพ์ลายที่สวยงามและทนทาน'
              : '4 simple steps to beautiful and durable stamped concrete flooring'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const title = locale === 'th' ? step.titleTh : step.titleEn;
            const description = locale === 'th' ? step.descriptionTh : step.descriptionEn;

            return (
              <div key={step.key} className="relative text-center group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-stone-200" />
                )}

                {/* Step number */}
                <div className="w-20 h-20 rounded-2xl bg-stone-900 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                  <span className="text-2xl">{step.emoji}</span>
                </div>

                {/* Step badge */}
                <div className="badge-premium bg-stone-100 text-stone-500 mx-auto mb-3 text-[10px]">
                  {locale === 'th' ? `ขั้นตอน ${index + 1}` : `Step ${index + 1}`}
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
