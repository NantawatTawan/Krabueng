'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta-phone' | 'cta-line';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  icon,
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-600',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    'cta-phone': 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 flex items-center gap-2',
    'cta-line': 'bg-green-500 hover:bg-green-600 text-white',
  };

  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2';

  const buttonContent = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], className)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {buttonContent}
    </button>
  );
}
