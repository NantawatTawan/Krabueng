'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Facebook, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const footerContent = {
  th: {
    companyName: 'Lalabow (ไทย) จำกัด',
    tagline: 'ผู้เชี่ยวชาญคอนกรีตพิมพ์ลายระดับพรีเมียม',
    address: '123 ถ.สุขุมวิท แขวงไทรม้า อ.เมืองนนทบุรี จ.นนทบุรี 11000',
    phone1: '080-795-3665',
    email: 'info@lalabow.co.th',
    lineId: '@lalabow',
    facebookName: 'Lalabow Thailand',
    copyright: '© 2025 Lalabow. สงวนลิขสิทธิ์ทั้งหมด',
    quickLinks: 'ลิงก์ด่วน',
    contact: 'ติดต่อเรา',
    home: 'หน้าหลัก',
    portfolio: 'ผลงาน',
    catalog: 'แคตตาล็อก',
    services: 'บริการ',
  },
  en: {
    companyName: 'Lalabow (Thailand) Co., Ltd.',
    tagline: 'Premium Stamped Concrete Specialist',
    address: '123 Sukhumvit Rd, Thai Mueang, Muang District, Nonthaburi 11000',
    phone1: '080-795-3665',
    email: 'info@lalabow.co.th',
    lineId: '@lalabow',
    facebookName: 'Lalabow Thailand',
    copyright: '© 2025 Lalabow. All rights reserved.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    home: 'Home',
    portfolio: 'Portfolio',
    catalog: 'Catalog',
    services: 'Services',
  },
};

export function Footer() {
  const { locale } = useLanguage();
  const content = footerContent[locale];

  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-stone-900 flex items-center justify-center font-black text-lg">
                LB
  </div>
              <div>
                <p className="font-bold text-lg">Lalabow</p>
                <p className="text-stone-500 text-xs tracking-wider uppercase">Concrete Artisan</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              {content.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/lalabow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:border-white/30 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://line.me/R/ti/p/@lalabow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:border-white/30 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`mailto:${content.email}`}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:border-white/30 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-6">
              {content.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { label: content.home, href: '/' },
                { label: content.portfolio, href: '/portfolio' },
                { label: content.catalog, href: '/catalog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-500 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-6">
              {content.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-500 text-sm leading-relaxed">{content.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-500 flex-shrink-0" />
                <a href={`tel:${content.phone1}`} className="text-stone-500 hover:text-white transition-colors text-sm">
                  {content.phone1}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-500 flex-shrink-0" />
                <a href={`mailto:${content.email}`} className="text-stone-500 hover:text-white transition-colors text-sm">
                  {content.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-500 flex-shrink-0" />
                <a
                  href={`https://line.me/R/ti/p/${content.lineId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-white transition-colors text-sm"
                >
                  {content.lineId}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">{content.copyright}</p>
          <p className="text-stone-700 text-xs">
            Design & Development by Lalabow Team
          </p>
        </div>
      </div>
    </footer>
  );
}
