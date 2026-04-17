import React from 'react';
import { 
  MoreHorizontal, 
  Calendar, 
  Bolt,
  Filter,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Avatar } from '../components/atoms/Avatar';
import { Button } from '../components/atoms/Button';
import { TrackerCard, TrackerCardProps } from '../components/organisms/TrackerCard';

const columns = [
  { 
    id: 'approved', 
    title: 'Approved', 
    count: 4, 
    cards: [
      {
        name: 'Alex Thompson',
        title: 'VP Engineering @ CloudScale',
        snippet: '"Impressive growth at CloudScale! Given your recent expansion into EMEA, our GTM framework could..."',
        type: 'email',
        time: 'Approved 2h ago'
      }
    ]
  },
  { 
    id: 'sent', 
    title: 'Sent', 
    count: 12, 
    cards: [
      {
        name: 'Elena Rodriguez',
        title: 'Director Ops @ DataStream',
        snippet: '"Noticed your post about data silos..."',
        type: 'linkedin',
        time: 'Sent 2 days ago'
      }
    ]
  },
  { 
    id: 'opened', 
    title: 'Opened', 
    count: 8, 
    active: true,
    cards: [
      {
        name: 'Marcus Chen',
        title: 'CMO @ Nexus AI',
        opens: 3,
        type: 'email',
        time: 'Last open: 14m ago',
        highIntent: true
      }
    ]
  },
  { 
    id: 'replied', 
    title: 'Replied', 
    count: 3, 
    cards: [
      {
        name: 'Sarah Jenkins',
        title: 'Head of Sales @ Vertex',
        reply: '"Thanks for reaching out, I\'m actually looking at our GTM strategy next Tuesday..."',
        type: 'linkedin',
        time: 'Replied 1h ago'
      }
    ]
  },
  { 
    id: 'booked', 
    title: 'Meeting Booked', 
    count: 2, 
    success: true,
    cards: [
      {
        name: 'Jordan Peterson',
        title: 'CEO @ Titan Flow',
        meeting: 'Friday, Oct 27, 2:30 PM (EST)',
        type: 'calendar',
        time: 'Set 4h ago'
      }
    ]
  }
];

export default function OutreachTracker() {
  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Board Toolbar */}
      <div className="px-6 py-6 bg-surface flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button className="px-4 py-1.5 bg-white text-[13px] font-medium rounded-lg shadow-sm">Kanban</button>
            <button className="px-4 py-1.5 text-slate-500 text-[13px] font-medium hover:text-slate-900">List View</button>
          </div>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-transparent hover:border-slate-200 transition-colors cursor-pointer">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="text-[13px] text-slate-600">Last 30 Days</span>
            <MoreHorizontal className="w-4 h-4 text-slate-400 rotate-90" />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 mr-2">
            {[1, 2, 3].map((i) => (
              <Avatar 
                key={i}
                src={`https://picsum.photos/seed/user${i}/100`} 
                size="sm"
                className="ring-2 ring-surface border-slate-200"
              />
            ))}
            <div className="w-8 h-8 rounded-full ring-2 ring-surface bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold">+4</div>
          </div>
          <Button variant="outline" className="gap-2 px-4 py-1.5 rounded-xl">
            <Filter className="w-4 h-4 text-slate-400" />
            Channel: LinkedIn
          </Button>
          <Button variant="primary" className="gap-2 px-4 py-1.5 rounded-xl">
            <Bolt className="w-4 h-4" />
            Quick Search
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6">
        <div className="flex h-full gap-6 min-w-max">
          {columns.map((col) => (
            <div key={col.id} className="w-80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[12px] font-semibold uppercase tracking-widest",
                    col.active ? "text-sky-600" : col.success ? "text-emerald-700" : "text-slate-400"
                  )}>{col.title}</span>
                  <span className={cn(
                    "px-1.5 py-0.5 rounded text-[11px] font-bold",
                    col.active ? "bg-sky-100 text-sky-600" : col.success ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                  )}>{col.count}</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-900" />
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-4 no-scrollbar">
                {col.cards.map((card, idx) => (
                  <TrackerCard key={idx} {...(card as any)} statusId={col.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
