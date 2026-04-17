import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverable = true }) => {
  return (
    <div className={cn(
      "bg-white rounded-[24px] p-6 border border-slate-200/50 shadow-sm transition-all duration-300",
      hoverable && "hover:ring-1 hover:ring-sky-500/30 hover:shadow-md",
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("flex justify-between items-start mb-6", className)}>{children}</div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("", className)}>{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn("border-t border-slate-100 pt-6", className)}>{children}</div>
);
