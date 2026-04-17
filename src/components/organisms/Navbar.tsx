import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar } from '../atoms/Avatar';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-64 right-0 z-50 bg-slate-50/80 backdrop-blur-xl flex items-center justify-between px-6 py-3 border-b border-slate-200/10">
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold tracking-tighter text-slate-900">GTM Intelligence</span>
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-slate-500 hover:text-slate-900 text-sm font-medium tracking-tight transition-colors" href="#">Dashboard</a>
          <a className="text-sky-500 font-semibold text-sm tracking-tight border-b-2 border-sky-500 py-1" href="#">Campaigns</a>
          <a className="text-slate-500 hover:text-slate-900 text-sm font-medium tracking-tight transition-colors" href="#">Market</a>
          <a className="text-slate-500 hover:text-slate-900 text-sm font-medium tracking-tight transition-colors" href="#">Contacts</a>
          <a className="text-slate-500 hover:text-slate-900 text-sm font-medium tracking-tight transition-colors" href="#">Analytics</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full border-2 border-white"></span>
        </button>
        <Avatar 
          src="https://picsum.photos/seed/user/200" 
          fallback="JD"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};
