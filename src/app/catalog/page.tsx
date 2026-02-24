'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { patterns } from '@/data/patterns';
import { colors } from '@/data/colors';
import { PatternCard } from '@/components/catalog/PatternCard';
import { CatalogSearch } from '@/components/catalog/CatalogSearch';
import { CatalogFilter } from '@/components/catalog/CatalogFilter';
import { ViewToggle } from '@/components/catalog/ViewToggle';

type Category = 'all' | 'Classic' | 'Natural' | 'European' | 'Modern';
type ViewMode = 'grid' | 'list';

export default function CatalogPage() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<'patterns' | 'colors'>('patterns');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<Category>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredPatterns = useMemo(() => {
    let filtered = patterns;
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.nameEn.toLowerCase().includes(query) ||
          p.nameTh.toLowerCase().includes(query) ||
          p.descriptionEn.toLowerCase().includes(query) ||
          p.descriptionTh.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [categoryFilter, searchQuery]);

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
            {locale === 'th' ? 'แคตตาล็อก' : 'Catalog'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {locale === 'th' ? (
              <>สำรวจ<span className="text-brand-400">ลวดลาย</span>ของเรา</>
            ) : (
              <>Explore Our <span className="text-brand-400">Patterns</span></>
            )}
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl">
            {locale === 'th'
              ? 'ค้นหาลวดลายและสีมาตรฐานกว่า 30 แบบ ที่พร้อมให้คุณเลือกสรรสำหรับโครงการของคุณ'
              : 'Browse over 30 patterns and standard colors ready for your next project'}
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex gap-1 mb-8 bg-stone-200/50 rounded-xl p-1 w-fit">
            <button
              onClick={() => {
                setActiveTab('patterns');
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeTab === 'patterns'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {locale === 'th' ? 'ลายพิมพ์' : 'Patterns'}
            </button>
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeTab === 'colors'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {locale === 'th' ? 'สีมาตรฐาน' : 'Standard Colors'}
            </button>
          </div>

          {/* Patterns Tab */}
          {activeTab === 'patterns' && (
            <div>
              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 items-end">
                <div className="flex-1 min-w-0">
                  <CatalogSearch value={searchQuery} onSearch={setSearchQuery} />
                </div>
                <CatalogFilter currentFilter={categoryFilter} onFilterChange={setCategoryFilter} />
                <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
              </div>

              {/* Results Count */}
              <p className="text-sm text-stone-500 mb-6">
                {locale === 'th'
                  ? `พบ ${filteredPatterns.length} ลาย`
                  : `${filteredPatterns.length} patterns found`}
              </p>

              {/* Grid/List */}
              {filteredPatterns.length > 0 ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredPatterns.map((pattern) => (
                    <PatternCard key={pattern.id} pattern={pattern} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-stone-500 text-lg">
                    {locale === 'th'
                      ? 'ไม่พบลายพิมพ์ที่ตรงกับเงื่อนไขการค้นหา'
                      : 'No patterns found matching your search'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div>
              <p className="text-sm text-stone-500 mb-6">
                {locale === 'th'
                  ? `สีมาตรฐาน ${colors.length} เฉดสี`
                  : `${colors.length} standard colors`}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="w-full h-28 group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-stone-900 truncate">
                        {color.nameEn}
                      </h3>
                      <p className="text-xs text-stone-500 truncate">
                        {color.nameTh}
                      </p>
                      <p className="text-xs text-stone-400 font-mono mt-2">
                        {color.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
