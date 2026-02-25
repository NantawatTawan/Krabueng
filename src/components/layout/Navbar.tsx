'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const navItems = {
  th: [
    { label: 'หน้าหลัก', href: '/' },
    { label: 'ผลงาน', href: '/portfolio' },
    { label: 'แคตตาล็อก', href: '/catalog' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Catalog', href: '/catalog' },
  ],
};

const ctaLabels = {
  th: 'ติดต่อเรา',
  en: 'Contact Us',
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = navItems[locale];
  const ctaLabel = ctaLabels[locale];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === '/en';
    }
    return pathname.includes(href);
  };

  const isHome = pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg transition-colors',
              scrolled || !isHome
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-900'
            )}>
              SC
</div>
            <div className="flex flex-col">
              <span className={cn(
                'text-lg font-bold leading-tight transition-colors',
                scrolled || !isHome ? 'text-stone-900' : 'text-white'
              )}>
                SunnyConcrete
              </span>
              <span className={cn(
                'text-[10px] font-medium tracking-widest uppercase leading-tight transition-colors',
                scrolled || !isHome ? 'text-stone-500' : 'text-white/70'
              )}>
                Concrete Artisan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive(item.href)
                    ? scrolled || !isHome
                      ? 'bg-stone-100 text-stone-900'
                      : 'bg-white/20 text-white'
                    : scrolled || !isHome
                      ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200',
                scrolled || !isHome
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-900 hover:bg-white/90'
              )}
            >
              <Phone size={14} />
              {ctaLabel}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                scrolled || !isHome
                  ? 'text-stone-700 hover:bg-stone-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-2xl mb-4 border border-stone-100 overflow-hidden animate-scale-in">
            <div className="flex flex-col p-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'font-medium py-3 px-4 rounded-xl transition-colors',
                    isActive(item.href)
                      ? 'bg-stone-100 text-stone-900'
                      : 'text-stone-600 hover:bg-stone-50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-stone-100 mt-2 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-stone-900 text-white py-3 px-4 rounded-xl font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={16} />
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
