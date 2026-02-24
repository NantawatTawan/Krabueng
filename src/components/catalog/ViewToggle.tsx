'use client';

import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

type ViewMode = 'grid' | 'list';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-1 bg-stone-100 rounded-xl p-1">
      <button
        onClick={() => onViewChange('grid')}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          currentView === 'grid'
            ? 'bg-white text-stone-900 shadow-sm'
            : 'text-stone-400 hover:text-stone-600'
        )}
        title="Grid view"
      >
        <LayoutGrid className="w-4 h-4" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={cn(
          'p-2 rounded-lg transition-all duration-200',
          currentView === 'list'
            ? 'bg-white text-stone-900 shadow-sm'
            : 'text-stone-400 hover:text-stone-600'
        )}
        title="List view"
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  );
}
