import React from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps {
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, fallback, size = 'md', className }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div className={cn(
      "rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100 flex items-center justify-center",
      sizes[size],
      className
    )}>
      {src ? (
        <img 
          src={src} 
          alt={fallback || "Avatar"} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-[10px] font-bold text-slate-500 uppercase">{fallback?.substring(0, 2)}</span>
      )}
    </div>
  );
};
