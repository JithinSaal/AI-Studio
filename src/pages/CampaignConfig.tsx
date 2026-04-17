import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MessageSquare, 
  Infinity, 
  Minus, 
  Plus,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/atoms/Button';

export default function CampaignConfig() {
  const [maxCompanies, setMaxCompanies] = useState(25);
  const [selectedSize, setSelectedSize] = useState('SMB (1-50)');
  const [selectedChannel, setSelectedChannel] = useState('All Channels');

  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-surface pb-12">
      <div className="max-w-[680px] mx-auto py-12 px-6">
        <header className="mb-10">
          <h1 className="text-[1.75rem] font-bold text-slate-900 tracking-tight mb-2">GTM Intelligence - Configure your campaign parameters</h1>
          <p className="text-slate-500 text-sm">Define your precision outreach targeting. Our AI will architect the pipeline based on these constraints.</p>
        </header>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Target Country</label>
                <select className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Singapore</option>
                  <option>United Arab Emirates</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Target Vertical</label>
                <select className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none">
                  <option>Tech</option>
                  <option>Oil & Gas</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                </select>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Company Size</label>
              <div className="flex flex-wrap gap-2">
                {['SMB (1-50)', 'Mid-Market (51-200)', 'Enterprise (201-1000)', 'Large Enterprise (1000+)'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold transition-all",
                      selectedSize === size 
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/20" 
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/50 space-y-6">
            <div className="space-y-2">
              <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Buyer Persona Title</label>
              <input 
                className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none" 
                placeholder="e.g. Chief Information Security Officer" 
                type="text"
              />
              <div className="flex gap-2 pt-1">
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 cursor-pointer hover:bg-slate-200">VP Operations</span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 cursor-pointer hover:bg-slate-200">Head of Procurement</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 italic">Please select or type a single target persona</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">ICP Criteria</label>
              <textarea 
                className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none" 
                placeholder="Describe the Ideal Customer Profile characteristics..." 
                rows={3}
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Product Portfolio</label>
              <textarea 
                className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none" 
                placeholder="Detail the products or services you are offering..." 
                rows={3}
              ></textarea>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/50 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Max Companies</label>
                <p className="text-[11px] text-slate-400">Target volume per cycle</p>
              </div>
              <div className="flex items-center bg-slate-100 rounded-xl p-1">
                <button 
                  onClick={() => setMaxCompanies(m => Math.max(1, m - 1))}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 rounded-lg transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-bold text-sm text-slate-900">{maxCompanies}</span>
                <button 
                  onClick={() => setMaxCompanies(m => m + 1)}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 rounded-lg transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Primary Outreach Channels</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Email', icon: Mail },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'WhatsApp', icon: MessageSquare },
                  { name: 'All Channels', icon: Infinity }
                ].map((channel) => (
                  <button
                    key={channel.name}
                    onClick={() => setSelectedChannel(channel.name)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all",
                      selectedChannel === channel.name 
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/20" 
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    )}
                  >
                    <channel.icon className="w-4 h-4" />
                    {channel.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Sales Agent Name</label>
                <input 
                  className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none" 
                  placeholder="Alex Rivera" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 block">Sales Agent Email</label>
                <input 
                  className="w-full bg-slate-50 border-none rounded-xl text-sm p-3 focus:ring-2 focus:ring-sky-500 transition-all outline-none" 
                  placeholder="alex.rivera@gtm.ai" 
                  type="email" 
                />
              </div>
            </div>
          </section>

          <div className="pt-4">
            <Button className="w-full py-4 bg-slate-900 group shadow-xl">
              Launch GTM Pipeline
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-[0.2em]">Automated Intelligence Orchestration will begin immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
}
