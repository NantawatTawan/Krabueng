'use client';

/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { locale } = useLanguage();

  const displayProjects = projects.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="badge-premium bg-brand-50 text-brand-700 mb-4">
              {locale === 'th' ? 'ผลงานเด่น' : 'Featured Works'}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900">
              {locale === 'th' ? (
                <>โครงการ<span className="text-gradient">ล่าสุด</span></>
              ) : (
                <>Latest <span className="text-gradient">Projects</span></>
              )}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-semibold transition-colors group"
          >
            {locale === 'th' ? 'ดูผลงานทั้งหมด' : 'View All Projects'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid — Bento-style */}
        <div className="grid md:grid-cols-2 gap-4">
          {displayProjects.map((project, index) => {
            const title = locale === 'th' ? project.titleTh : project.titleEn;
            const location = locale === 'th' ? project.locationTh : project.locationEn;
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className={`group relative rounded-2xl overflow-hidden ${isLarge ? 'md:row-span-2 min-h-[400px] md:min-h-[500px]' : 'min-h-[240px]'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <img
                  src={project.images[0]}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-premium bg-white/20 text-white backdrop-blur-sm text-[10px]">
                      {project.patternType}
                    </span>
                    <span className="badge-premium bg-white/20 text-white backdrop-blur-sm text-[10px]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                    {title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 size={14} />
                      {project.area} {locale === 'th' ? 'ตร.ม.' : 'sq.m.'}
                    </span>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
