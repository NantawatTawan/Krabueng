'use client';

/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';

const heroSlides = [
  {
    titleTh: 'ยกระดับทุกพื้นที่\nด้วยคอนกรีตพิมพ์ลาย',
    titleEn: 'Elevate Every Space\nWith Stamped Concrete',
    subtitleTh: 'เปลี่ยนพื้นที่ธรรมดาให้กลายเป็นผลงานศิลปะ ด้วยเทคโนโลยีคอนกรีตพิมพ์ลายระดับพรีเมียม',
    subtitleEn: 'Transform ordinary spaces into artisan masterpieces with premium stamped concrete technology',
  },
  {
    titleTh: 'ลวดลายกว่า 30 แบบ\nสีสันกว่า 20 เฉดสี',
    titleEn: 'Over 30 Patterns\nMore Than 20 Colors',
    subtitleTh: 'ความหลากหลายของลวดลายและสีสันที่ให้คุณสร้างสรรค์พื้นที่ในแบบที่คุณต้องการ',
    subtitleEn: 'A diverse range of patterns and colors to create the space exactly as you envision',
  },
  {
    titleTh: 'ประสบการณ์กว่า 10 ปี\nผลงานกว่า 500 โครงการ',
    titleEn: '10+ Years Experience\n500+ Completed Projects',
    subtitleTh: 'ทีมช่างผู้เชี่ยวชาญที่พร้อมส่งมอบผลงานคุณภาพในทุกโครงการ ทั้งงานบ้าน รีสอร์ต และงานราชการ',
    subtitleEn: 'Expert craftsmen ready to deliver quality results on every project — residential, resort, and government',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { locale } = useLanguage();

  const displayProjects = projects.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [displayProjects.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % displayProjects.length);
  };

  const slide = heroSlides[currentSlide];
  const title = locale === 'th' ? slide.titleTh : slide.titleEn;
  const subtitle = locale === 'th' ? slide.subtitleTh : slide.subtitleEn;

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-stone-900">
      {/* Background Images */}
      {displayProjects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={project.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {locale === 'th' ? 'ผู้เชี่ยวชาญคอนกรีตพิมพ์ลายอันดับ 1 ของไทย' : "Thailand's #1 Stamped Concrete Specialist"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] whitespace-pre-line">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-200 text-base"
              >
                {locale === 'th' ? 'ดูผลงานของเรา' : 'View Our Portfolio'}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
              >
                {locale === 'th' ? 'ดูแคตตาล็อกลาย' : 'Browse Patterns'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 border-t border-white/10">
            {/* Stats */}
            <div className="hidden sm:flex items-center gap-12">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-white/60">{locale === 'th' ? 'โครงการสำเร็จ' : 'Projects Done'}</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-white/60">{locale === 'th' ? 'ปีประสบการณ์' : 'Years Experience'}</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-bold text-white">30+</p>
                <p className="text-sm text-white/60">{locale === 'th' ? 'ลวดลาย' : 'Patterns'}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex gap-2">
                {displayProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/30 w-4 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
