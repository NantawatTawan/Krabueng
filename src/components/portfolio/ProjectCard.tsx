'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLanguage();

  const title = locale === 'th' ? project.titleTh : project.titleEn;
  const location = locale === 'th' ? project.locationTh : project.locationEn;
  const typeLabel = project.type === 'private'
    ? (locale === 'th' ? 'เอกชน' : 'Private')
    : (locale === 'th' ? 'ราชการ' : 'Government');

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <Image
          src={project.images[0]}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`badge-premium backdrop-blur-sm text-[10px] ${
            project.type === 'private'
              ? 'bg-brand-500/90 text-white'
              : 'bg-emerald-500/90 text-white'
          }`}>
            {typeLabel}
          </span>
          <span className="badge-premium bg-white/90 backdrop-blur-sm text-stone-700 text-[10px]">
            {project.year}
          </span>
        </div>
        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
          <ArrowRight size={14} className="text-stone-700" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-brand-500" />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-brand-500" />
            {project.area} {locale === 'th' ? 'ตร.ม.' : 'sq.m.'}
          </span>
        </div>

        <div className="mt-auto pt-4 border-t border-stone-100">
          <span className="badge-premium bg-stone-100 text-stone-600 text-[10px]">
            {project.patternType}
          </span>
        </div>
      </div>
    </Link>
  );
}
