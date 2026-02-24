'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 mb-3">
        <Image
          src={images[activeIndex]}
          alt="Project gallery"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
              activeIndex === index
                ? 'ring-2 ring-brand-500 ring-offset-2'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <p className="text-xs text-stone-400 mt-2">
        {locale === 'th' ? `รูปที่ ${activeIndex + 1} จาก ${images.length}` : `Image ${activeIndex + 1} of ${images.length}`}
      </p>
    </div>
  );
}
