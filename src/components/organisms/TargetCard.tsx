import React from 'react';
import { CheckCircle2, Globe, Mail, Link as LinkIcon } from 'lucide-react';
import { Card, CardHeader, CardBody, CardFooter } from '../molecules/Card';
import { Avatar } from '../atoms/Avatar';
import { CompactMetric } from '../molecules/Metric';
import { Button } from '../atoms/Button';

interface TargetProps {
  name: string;
  logo: string;
  location: string;
  sector: string;
  match: number;
  employees: string;
  revenue: string;
  persona: {
    name: string;
    title: string;
    avatar: string;
  };
}

export const TargetCard: React.FC<TargetProps> = ({
  name,
  logo,
  location,
  sector,
  match,
  employees,
  revenue,
  persona,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 overflow-hidden border border-slate-100">
            <img src={logo} alt={name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">{name}</h3>
              <CheckCircle2 className="w-4 h-4 text-sky-500 fill-current" />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> {location}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{sector}</span>
            </div>
          </div>
        </div>
        
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full rotate-[-90deg]">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={175.9} strokeDashoffset={175.9 * (1 - match / 100)} className="text-sky-500" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs font-bold leading-none">{match}%</span>
            <span className="text-[8px] uppercase tracking-tighter text-slate-500">Match</span>
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <CompactMetric label="Employees" value={employees} />
          <CompactMetric label="Estimated Revenue" value={revenue} />
        </div>

        <div className="border-t border-slate-100 pt-6 mb-6">
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-4">Key Persona Identified</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src={persona.avatar} fallback={persona.name} size="md" />
              <div>
                <p className="text-sm font-bold">{persona.name}</p>
                <p className="text-xs text-slate-500">{persona.title}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-slate-400">
                <Mail className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-slate-400">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </CardBody>

      <CardFooter className="border-none !pt-0">
        <Button variant="outline" className="w-full bg-slate-100 border-none hover:bg-primary-container hover:text-white">
          View Full Profile
        </Button>
      </CardFooter>
    </Card>
  );
};
