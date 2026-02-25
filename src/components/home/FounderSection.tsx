'use client';

import React from 'react';
import { Phone, MessageCircle, Award, Clock, Users } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FounderSection() {
  const { locale } = useLanguage();

  const handlePhoneClick = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  const handleLineClick = () => {
    window.open(`https://line.me/ti/p/${companyInfo.line}`, '_blank');
  };

  const stats = [
    {
      icon: <Clock size={20} />,
      valueTh: '10+ ปี',
      valueEn: '10+ Years',
      labelTh: 'ประสบการณ์',
      labelEn: 'Experience',
    },
    {
      icon: <Award size={20} />,
      valueTh: '500+',
      valueEn: '500+',
      labelTh: 'โครงการสำเร็จ',
      labelEn: 'Projects',
    },
    {
      icon: <Users size={20} />,
      valueTh: '300+',
      valueEn: '300+',
      labelTh: 'ลูกค้าพึงพอใจ',
      labelEn: 'Happy Clients',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image / Avatar */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
              {/* Avatar placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-2xl mb-6">
                    <span className="text-5xl font-bold text-white">ตะวัน</span>
                  </div>
                  <p className="text-stone-500 text-sm font-medium">
                    {locale === 'th' ? 'ผู้ก่อตั้ง SunnyConcrete' : 'Founder of SunnyConcrete'}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl border border-stone-100 p-6">
              <div className="flex gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-brand-600 mb-1 flex justify-center">{stat.icon}</div>
                    <p className="text-xl font-bold text-stone-900">
                      {locale === 'th' ? stat.valueTh : stat.valueEn}
                    </p>
                    <p className="text-xs text-stone-500">
                      {locale === 'th' ? stat.labelTh : stat.labelEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="badge-premium bg-brand-50 text-brand-700 mb-4">
              {locale === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              {locale === 'th' ? (
                <>ผู้เชี่ยวชาญ<br /><span className="text-gradient">คอนกรีตพิมพ์ลาย</span><br />มากกว่า 10 ปี</>
              ) : (
                <>Stamped Concrete<br /><span className="text-gradient">Expert</span><br />For Over 10 Years</>
              )}
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-stone-600 text-lg leading-relaxed">
                {locale === 'th'
                  ? 'คุณตะวัน ผู้ก่อตั้งและผู้บริหาร SunnyConcrete ด้วยประสบการณ์กว่า 10 ปีในอุตสาหกรรมคอนกรีตพิมพ์ลาย ได้นำความเชี่ยวชาญมาสร้างสรรค์ผลงานคุณภาพสูงให้แก่ลูกค้าทั่วประเทศไทย'
                  : 'Khun Tawan, founder and director of SunnyConcrete, brings over 10 years of expertise in the stamped concrete industry to deliver premium quality work for clients throughout Thailand.'}
              </p>
              <p className="text-stone-600 leading-relaxed">
                {locale === 'th'
                  ? 'เราให้บริการครบวงจร ตั้งแต่การออกแบบ ให้คำปรึกษา จนถึงการติดตั้งและดูแลหลังการขาย ด้วยทีมช่างที่มีฝีมือและวัสดุคุณภาพสูงในทุกโครงการ'
                  : 'We provide end-to-end services from design, consultation, installation, to after-sales care with skilled craftsmen and premium materials on every project.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white py-3.5 px-6 rounded-xl transition-colors font-semibold"
              >
                <Phone size={18} />
                {locale === 'th' ? 'โทรปรึกษาฟรี' : 'Free Consultation'}
              </button>
              <button
                onClick={handleLineClick}
                className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34d] text-white py-3.5 px-6 rounded-xl transition-colors font-semibold"
              >
                <MessageCircle size={18} />
                {locale === 'th' ? 'แชท Line' : 'Chat on Line'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
