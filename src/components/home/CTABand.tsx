'use client';

import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CTABand() {
  const { locale } = useLanguage();

  const handlePhoneClick = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  const handleLineClick = () => {
    window.open(`https://line.me/ti/p/${companyInfo.line}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 py-20 md:py-28">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="badge-premium bg-white/10 text-brand-300 mx-auto mb-6">
            {locale === 'th' ? 'ปรึกษาฟรี' : 'Free Consultation'}
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {locale === 'th' ? (
              <>พร้อมเริ่มต้น<br /><span className="text-brand-400">โครงการของคุณ</span>แล้วหรือยัง?</>
            ) : (
              <>Ready to Start<br /><span className="text-brand-400">Your Project</span>?</>
            )}
          </h2>

          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
            {locale === 'th'
              ? 'ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและใบเสนอราคา ทีมผู้เชี่ยวชาญพร้อมช่วยคุณสร้างสรรค์พื้นที่ในฝัน'
              : 'Contact us today for a free consultation and quote. Our team of experts is ready to help you create your dream space.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-stone-50 text-stone-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 group"
            >
              <Phone size={20} />
              <span>{locale === 'th' ? 'โทร' : 'Call'}: {companyInfo.phone}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleLineClick}
              className="inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34d] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200"
            >
              <MessageCircle size={20} />
              <span>{locale === 'th' ? 'แชท Line ของเรา' : 'Chat on Line'}</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-10 text-stone-500 text-sm">
            <span>{locale === 'th' ? '✓ ประเมินราคาฟรี' : '✓ Free Estimate'}</span>
            <span>{locale === 'th' ? '✓ ตอบภายใน 24 ชม.' : '✓ Reply in 24hrs'}</span>
            <span className="hidden sm:inline">{locale === 'th' ? '✓ รับประกันผลงาน' : '✓ Work Guaranteed'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
