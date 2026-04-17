import React from 'react';
import { cn } from '../../lib/utils';

interface MetricItemProps {
  label: string;
  value: string;
  className?: string;
}

export const MetricItem: React.FC<MetricItemProps> = ({ label, value, className }) => {
  return (
    <div className={cn("bg-white p-5 rounded-xl flex flex-col gap-1 border border-slate-200/50 shadow-sm transition-all hover:border-sky-500/20", className)}>
      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-2xl font-bold text-slate-900">{value}</span>
    </div>
  );
};

export const CompactMetric: React.FC<MetricItemProps> = ({ label, value, className }) => (
  <div className={cn("p-4 rounded-2xl bg-slate-50/50", className)}>
    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">{label}</p>
    <p className="text-lg font-bold">{value}</p>
  </div>
);
