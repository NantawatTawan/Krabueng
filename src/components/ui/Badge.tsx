'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'popular' | 'private' | 'government' | 'category';
  className?: string;
}

export function Badge({ children, variant = 'category', className }: BadgeProps) {
  const variantClasses = {
    popular: 'bg-red-500 text-white',
    private: 'bg-blue-600 text-white',
    government: 'bg-green-500 text-white',
    category: 'bg-gray-300 text-gray-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
