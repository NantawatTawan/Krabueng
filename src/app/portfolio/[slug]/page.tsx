'use client';

/* eslint-disable @next/next/no-img-element */

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { projects } from '@/data/projects';
import { ProjectGallery } from '@/components/portfolio/ProjectGallery';
import { MapPin, ArrowLeft, Check, MessageCircle, Phone, Calendar, Maximize2, Layers } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function ProjectDetailPage() {
  const { locale } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const project = useMemo(() => {
    return projects.find((p) => p.slug === slug);
  }, [slug]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return projects
      .filter((p) => p.id !== project.id && p.patternType === project.patternType)
      .slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-2xl font-bold text-stone-900 mb-3">
            {locale === 'th' ? 'ไม่พบโครงการ' : 'Project Not Found'}
          </h1>
          <p className="text-stone-500 mb-6">
            {locale === 'th'
              ? 'ขออภัย เราไม่พบโครงการที่ค้นหา'
              : 'Sorry, we could not find the project you are looking for'}
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold py-3 px-6 rounded-xl"
          >
            <ArrowLeft size={16} />
            {locale === 'th' ? 'กลับไปยังผลงาน' : 'Back to Portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  const title = locale === 'th' ? project.titleTh : project.titleEn;
  const description = locale === 'th' ? project.descriptionTh : project.descriptionEn;
  const location = locale === 'th' ? project.locationTh : project.locationEn;
  const highlights = locale === 'th' ? project.highlightsTh : project.highlightsEn;
  const typeLabel = project.type === 'private'
    ? (locale === 'th' ? 'เอกชน' : 'Private')
    : (locale === 'th' ? 'ราชการ' : 'Government');

  return (
    <main className="bg-stone-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100 pt-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            {locale === 'th' ? 'กลับไปยังผลงาน' : 'Back to Portfolio'}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Gallery and Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className={`badge-premium text-[10px] ${
                  project.type === 'private'
                    ? 'bg-brand-50 text-brand-700'
                    : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {typeLabel}
                </span>
                <span className="badge-premium bg-stone-100 text-stone-600 text-[10px]">
                  {project.patternType}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-stone-900">{title}</h1>
            </div>

            {/* Gallery */}
            <ProjectGallery images={project.images} />

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Layers size={18} />, label: locale === 'th' ? 'ประเภท' : 'Type', value: typeLabel },
                { icon: <Calendar size={18} />, label: locale === 'th' ? 'ปี' : 'Year', value: String(project.year) },
                { icon: <Maximize2 size={18} />, label: locale === 'th' ? 'พื้นที่' : 'Area', value: `${project.area} ${locale === 'th' ? 'ตร.ม.' : 'sq.m.'}` },
                { icon: <MapPin size={18} />, label: locale === 'th' ? 'สถานที่' : 'Location', value: location },
              ].map((spec, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-100 p-4">
                  <div className="text-brand-500 mb-2">{spec.icon}</div>
                  <p className="text-xs text-stone-400 mb-0.5">{spec.label}</p>
                  <p className="text-sm font-semibold text-stone-900">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">
                {locale === 'th' ? 'รายละเอียดโครงการ' : 'Project Details'}
              </h2>
              <p className="text-stone-600 leading-relaxed">{description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">
                {locale === 'th' ? 'จุดเด่น' : 'Highlights'}
              </h2>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-brand-600" />
                    </div>
                    <span className="text-stone-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: CTA Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Box */}
              <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {locale === 'th' ? 'สนใจโครงการแบบนี้?' : 'Interested in this style?'}
                </h3>
                <p className="text-sm text-stone-500 mb-6">
                  {locale === 'th'
                    ? 'ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาฟรี'
                    : 'Contact us for a free consultation and quote'}
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    <Phone size={16} />
                    {locale === 'th' ? 'โทรปรึกษาฟรี' : 'Call for Free Consult'}
                  </a>
                  <a
                    href={`https://line.me/ti/p/${companyInfo.line}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#06C755] hover:bg-[#05b34d] text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    <MessageCircle size={16} />
                    {locale === 'th' ? 'สอบถามทาง Line' : 'Inquire via Line'}
                  </a>
                  <Link
                    href="/portfolio"
                    className="flex items-center justify-center gap-2 w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    {locale === 'th' ? 'ดูโครงการอื่น' : 'View Other Projects'}
                  </Link>
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
                    {locale === 'th' ? 'โครงการที่เกี่ยวข้อง' : 'Related Projects'}
                  </h3>
                  <div className="space-y-3">
                    {relatedProjects.map((rp) => (
                      <Link
                        key={rp.id}
                        href={`/portfolio/${rp.slug}`}
                        className="group flex gap-3 bg-white rounded-xl border border-stone-100 overflow-hidden hover:border-brand-200 transition-colors"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 bg-stone-100">
                          <img
                            src={rp.images[0]}
                            alt={locale === 'th' ? rp.titleTh : rp.titleEn}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 flex flex-col justify-center">
                          <h4 className="font-semibold text-stone-900 text-sm line-clamp-1 group-hover:text-brand-700 transition-colors">
                            {locale === 'th' ? rp.titleTh : rp.titleEn}
                          </h4>
                          <p className="text-xs text-stone-500 mt-0.5">
                            {rp.year} · {rp.area} {locale === 'th' ? 'ตร.ม.' : 'sq.m.'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
