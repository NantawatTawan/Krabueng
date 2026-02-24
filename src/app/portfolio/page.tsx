'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ProjectFilter } from '@/components/portfolio/ProjectFilter';
import { Pagination } from '@/components/portfolio/Pagination';
import { WorkProcess } from '@/components/portfolio/WorkProcess';
import { Shield, Award, Clock } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
  const { locale } = useLanguage();
  const [currentFilter, setCurrentFilter] = useState<'all' | 'private' | 'government'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (currentFilter === 'all') return projects;
    return projects.filter((p) => p.type === currentFilter);
  }, [currentFilter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (filter: 'all' | 'private' | 'government') => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="badge-premium bg-white/10 text-brand-300 mb-4">
            {locale === 'th' ? 'ผลงาน' : 'Portfolio'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {locale === 'th' ? (
              <>ผลงาน<span className="text-brand-400">คุณภาพ</span>ของเรา</>
            ) : (
              <>Our <span className="text-brand-400">Quality</span> Works</>
            )}
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl">
            {locale === 'th'
              ? 'รวมผลงานโครงการคอนกรีตพิมพ์ลายที่ได้รับการออกแบบและติดตั้งอย่างมืออาชีพทั่วประเทศไทย'
              : 'A collection of professionally designed and installed stamped concrete projects throughout Thailand'}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Award size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{projects.length}+</p>
                <p className="text-xs text-stone-500">{locale === 'th' ? 'โครงการ' : 'Projects'}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">100%</p>
                <p className="text-xs text-stone-500">{locale === 'th' ? 'พึงพอใจ' : 'Satisfaction'}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Clock size={18} className="text-brand-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">10+</p>
                <p className="text-xs text-stone-500">{locale === 'th' ? 'ปีประสบการณ์' : 'Years Exp.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          {/* Filter */}
          <ProjectFilter
            onFilterChange={handleFilterChange}
            currentFilter={currentFilter}
            filteredCount={filteredProjects.length}
            totalCount={projects.length}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>

      {/* Work Process */}
      <WorkProcess />

      {/* Quality Guarantee */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative bg-stone-900 rounded-3xl overflow-hidden p-10 md:p-16 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500 rounded-full blur-[150px]" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-400" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {locale === 'th' ? 'รับประกันคุณภาพทุกโครงการ' : 'Quality Guaranteed on Every Project'}
              </h2>
              <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                {locale === 'th'
                  ? 'เรามั่นใจในคุณภาพของผลงานทุกชิ้น ด้วยวัสดุคุณภาพสูงและทีมช่างฝีมือระดับมืออาชีพ'
                  : 'We stand behind the quality of every project with premium materials and professional craftsmanship'}
              </p>
              <button className="bg-white hover:bg-stone-50 text-stone-900 font-semibold py-3.5 px-8 rounded-xl transition-colors">
                {locale === 'th' ? 'ติดต่อเราวันนี้' : 'Contact Us Today'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
