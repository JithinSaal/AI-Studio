import React from 'react';
import { 
  Check, 
  Clock, 
  Coins, 
  Target, 
  BrainCircuit, 
  FileEdit, 
  UserSearch, 
  Rocket,
  ChevronDown,
  Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MetricItem } from '../components/molecules/Metric';
import { Badge } from '../components/atoms/Badge';

const stats = [
  { label: 'Elapsed Time', value: '14m 22s' },
  { label: 'Tokens Processed', value: '842.4k' },
  { label: 'Estimated Cost', value: '$12.44' },
  { label: 'Contacts Found', value: '118' },
];

const stages = [
  {
    title: 'Market Mapping',
    desc: 'Segmenting EMEA FinTech landscape',
    status: 'COMPLETED',
    time: '01:24',
    tokens: '42k',
    cost: '$0.84',
    icon: Check,
    active: false,
  },
  {
    title: 'Contact Discovery',
    desc: 'Fetching LinkedIn profiles and verified emails',
    status: 'COMPLETED',
    time: '04:12',
    tokens: '128k',
    cost: '$2.56',
    icon: Check,
    active: false,
  },
  {
    title: 'Deep Profiling',
    desc: 'Analyzing recent interviews, commits, and news for 118 leads',
    status: 'RUNNING',
    time: '08:45',
    tokens: '672.4k',
    cost: '$9.04',
    icon: BrainCircuit,
    active: true,
  },
  {
    title: 'Pitch Composition',
    desc: 'Generating hyper-personalized 1:1 outreach',
    status: 'PENDING',
    icon: FileEdit,
    active: false,
  },
  {
    title: 'Human Review',
    desc: 'Quality check & edge-case adjustment',
    status: 'PENDING',
    icon: UserSearch,
    active: false,
  },
  {
    title: 'Outreach Ready',
    desc: 'Synchronizing to Apollo and LinkedIn',
    status: 'PENDING',
    icon: Rocket,
    active: false,
  },
];

export default function PipelineMonitor() {
  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-[280px] bg-surface-container-low p-6 flex flex-col gap-6 flex-shrink-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Campaign</span>
            <button className="text-[11px] text-sky-500 font-medium hover:underline">Edit</button>
          </div>
          <h2 className="text-xl font-bold text-slate-900 leading-tight">Q4 SaaS Expansion: EMEA Region</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="emerald">Enterprise</Badge>
            <Badge variant="sky">LinkedIn High-Touch</Badge>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Focus Market</p>
              <p className="text-[13px] font-semibold text-slate-900">FinTech Series B+</p>
            </div>
          </div>
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-slate-500">Priority Level</span>
              <span className="text-[12px] font-bold text-slate-900">High</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-slate-500">Persona</span>
              <span className="text-[12px] font-bold text-slate-900">CTO / VP Eng</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <img 
            alt="Analytics Visual" 
            src="https://picsum.photos/seed/blueprint/300/200?grayscale" 
            className="rounded-xl opacity-50 mb-4"
            referrerPolicy="no-referrer"
          />
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Intelligence engine is optimizing outreach based on recent LinkedIn engagement spikes in London.
          </p>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto no-scrollbar">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <MetricItem key={i} label={s.label} value={s.value} />
          ))}
        </div>

        {/* Pipeline Timeline */}
        <div className="relative flex flex-col gap-6 ml-4">
          {/* Connector Line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

          {stages.map((stage, idx) => (
            <div key={idx} className={cn("relative pl-14 group", !stage.active && stage.status === 'PENDING' && "opacity-50 grayscale")}>
              {/* Icon Circle */}
              <div className={cn(
                "absolute left-0 top-1 w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 transition-all",
                stage.status === 'COMPLETED' ? "bg-emerald-500 border-emerald-500 text-white" : 
                stage.active ? "bg-white border-sky-400 text-sky-500 animate-pulse shadow-lg shadow-sky-400/20" : 
                "bg-slate-50 border-slate-200 text-slate-400"
              )}>
                <stage.icon className={cn("w-5 h-5", stage.active && "animate-spin-slow")} />
              </div>

              {/* Card */}
              <div className={cn(
                "bg-white p-6 rounded-xl border border-slate-200/50 shadow-sm transition-all",
                stage.active ? "border-sky-400/30 ring-1 ring-sky-400/10" : "hover:bg-slate-50"
              )}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{stage.title}</h3>
                    <p className="text-[11px] text-slate-500">{stage.desc}</p>
                  </div>
                  <Badge variant={stage.status === 'COMPLETED' ? 'emerald' : stage.status === 'RUNNING' ? 'sky' : 'slate'}>
                    {stage.status}
                  </Badge>
                </div>

                {stage.status !== 'PENDING' && (
                  <>
                    {stage.active && (
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-4 overflow-hidden">
                        <div className="bg-sky-500 h-full w-[65%] transition-all duration-1000"></div>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-8 items-center text-[11px] text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {stage.time}</div>
                      <div className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> {stage.tokens}</div>
                      <div className="flex items-center gap-1.5"><Coins className="w-3.5 h-3.5" /> {stage.cost}</div>
                      {stage.active && (
                        <button className="ml-auto flex items-center gap-1 text-sky-500 font-bold hover:underline">
                          PREVIEW DATA <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
