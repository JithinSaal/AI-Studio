import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Plus, 
  HelpCircle, 
  FileText, 
  Edit3, 
  BarChart3, 
  Map as MapIcon, 
  Users, 
  CheckSquare, 
  Kanban,
  Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../atoms/Button';

const navItems = [
  { name: 'Campaign Setup', icon: Edit3, path: '/setup' },
  { name: 'Pipeline Monitor', icon: BarChart3, path: '/monitor' },
  { name: 'Market Map', icon: MapIcon, path: '/' },
  { name: 'Contact Profiles', icon: Users, path: '/contacts' },
  { name: 'Pitch Approval', icon: CheckSquare, path: '/review' },
  { name: 'Outreach Tracker', icon: Kanban, path: '/tracker' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 bg-slate-50 flex flex-col p-4 gap-2 border-r border-slate-200/10 flex-shrink-0 sticky top-0">
      <div className="flex flex-col gap-1 mb-6 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
            <Zap className="text-white w-4 h-4 fill-current" />
          </div>
          <div>
            <h1 className="text-xs font-bold uppercase tracking-widest text-slate-900">Precision Architect</h1>
            <p className="text-[10px] text-slate-500 font-medium opacity-70">Enterprise Intelligence</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "group flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-200/50 hover:text-slate-900 transition-all rounded-lg cursor-pointer",
              isActive && "bg-white text-sky-500 font-medium shadow-sm border border-slate-200/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-sans text-[13px] leading-relaxed">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-4 px-2">
        <Button className="w-full gap-2 py-2.5">
          <Plus className="w-4 h-4" />
          New Campaign
        </Button>
      </div>

      <div className="mt-auto space-y-1 border-t border-slate-200/10 pt-4">
        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 transition-all cursor-pointer">
          <HelpCircle className="w-5 h-5" />
          <span className="font-sans text-[13px]">Support</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 transition-all cursor-pointer">
          <FileText className="w-5 h-5" />
          <span className="font-sans text-[13px]">Documentation</span>
        </div>
      </div>
    </aside>
  );
};
