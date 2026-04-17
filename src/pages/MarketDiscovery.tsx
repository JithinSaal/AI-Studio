import React from 'react';
import { ChevronRight, Download, Save, RefreshCcw } from 'lucide-react';
import { TargetCard } from '../components/organisms/TargetCard';
import { Button } from '../components/atoms/Button';

const targets = [
  {
    name: 'Stripe, Inc.',
    location: 'Dublin, Ireland',
    sector: 'FinTech / Payments',
    employees: '7,000+',
    revenue: '$14.3B',
    match: 95,
    logo: 'https://picsum.photos/seed/stripe/100',
    persona: {
      name: 'Sarah Chen',
      title: 'VP of Information Security',
      avatar: 'https://picsum.photos/seed/sarah/100'
    }
  },
  {
    name: 'Cloudflare',
    location: 'San Francisco, USA',
    sector: 'SaaS / Security',
    employees: '3,500+',
    revenue: '$975M',
    match: 88,
    logo: 'https://picsum.photos/seed/cloudflare/100',
    persona: {
      name: 'David Marcus',
      title: 'Global Head of Infrastructure',
      avatar: 'https://picsum.photos/seed/david/100'
    }
  },
  {
    name: 'Adyen',
    location: 'Amsterdam, NL',
    sector: 'FinTech / E-commerce',
    employees: '2,100+',
    revenue: '€1.3B',
    match: 82,
    logo: 'https://picsum.photos/seed/adyen/100',
    persona: {
      name: 'Erik Van Der',
      title: 'CTO, Core Systems',
      avatar: 'https://picsum.photos/seed/erik/100'
    }
  },
  {
    name: 'Personio',
    location: 'Munich, DE',
    sector: 'HR Tech / B2B SaaS',
    employees: '1,800+',
    revenue: '$220M',
    match: 75,
    logo: 'https://picsum.photos/seed/personio/100',
    persona: {
      name: 'Markus Roth',
      title: 'Director of IT Ops',
      avatar: 'https://picsum.photos/seed/markus/100'
    }
  }
];

export default function MarketDiscovery() {
  return (
    <div className="flex h-full overflow-hidden">
      {/* Sidebar Filters */}
      <aside className="w-[280px] h-full bg-surface-container-low flex flex-col p-6 gap-8 overflow-y-auto no-scrollbar">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Market Discovery Filters</h3>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">ICP Score</span>
              <span className="text-xs font-medium text-sky-500">85%+</span>
            </div>
            <div className="relative h-1.5 bg-surface-container-high rounded-full">
              <div className="absolute right-0 h-full w-[85%] bg-sky-400 rounded-full"></div>
              <div className="absolute left-[15%] -top-1.5 w-4 h-4 bg-white border-2 border-sky-500 rounded-full shadow-sm"></div>
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-semibold block mb-3">Sector</label>
            <div className="space-y-2">
              {['Enterprise SaaS', 'FinTech', 'HealthTech'].map((s) => (
                <label key={s} className="flex items-center gap-2 group cursor-pointer">
                  <input type="checkbox" defaultChecked={s !== 'HealthTech'} className="rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-semibold block mb-3">HQ Location</label>
            <select className="w-full bg-white border border-slate-200/50 rounded-lg p-2.5 text-sm focus:ring-sky-500 focus:border-sky-500 outline-none">
              <option>North America</option>
              <option>Europe</option>
              <option>APAC</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="text-sm font-semibold block mb-3">Data Confidence</label>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-surface-container-high text-xs font-medium border border-transparent hover:border-sky-500 transition-all">Verified</button>
              <button className="flex-1 py-2 rounded-lg bg-white text-xs font-medium border border-slate-200/50 text-slate-500">All</button>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold block mb-3">Persona Match</label>
            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100/50">
              <span className="text-xs font-bold text-sky-600 block mb-1">Chief Information Officer</span>
              <span className="text-[10px] text-slate-500 leading-tight">Must match technology leadership role.</span>
            </div>
          </div>
        </div>

        <Button className="mt-auto w-full gap-2 py-3 shadow-lg shadow-primary-container/20">
          <RefreshCcw className="w-4 h-4" />
          Apply Intelligence
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-surface p-8 no-scrollbar">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
              <span>Market Map</span>
              <ChevronRight className="w-3 h-3" />
              <span>EMEA Enterprise SaaS</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">312 Targets Identified</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export List
            </Button>
            <Button variant="secondary" className="gap-2">
              <Save className="w-4 h-4" />
              Save Segment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-12">
          {targets.map((target, idx) => (
            <TargetCard key={idx} {...target} />
          ))}
        </div>
      </main>
    </div>
  );
}
