import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  History, 
  RefreshCcw, 
  MoreVertical, 
  BrainCircuit, 
  Sparkles, 
  Mail, 
  Linkedin, 
  MessageSquare,
  Edit2,
  Wand2,
  Download,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Avatar } from '../components/atoms/Avatar';
import { Badge } from '../components/atoms/Badge';
import { Button } from '../components/atoms/Button';

const contacts = [
  {
    id: '1',
    name: 'Alex Rivera',
    title: 'CTO @ InnovateFlow',
    score: 98,
    status: 'Draft',
    updated: '2m ago',
    avatar: 'https://picsum.photos/seed/alexr/100',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Head of Growth @ ScaleUp',
    score: 84,
    status: 'Approved',
    updated: 'Approved by AI',
    avatar: 'https://picsum.photos/seed/sarahc/100',
  },
  {
    id: '3',
    name: 'Marcus Knight',
    title: 'VP Engineering @ Stealth',
    score: 72,
    status: 'Edited',
    updated: 'Manual tweak',
    initials: 'MK',
  },
  {
    id: '4',
    name: 'David Vance',
    title: 'Director @ Nexus Global',
    score: 61,
    status: 'Rejected',
    updated: 'Low relevance',
    avatar: 'https://picsum.photos/seed/davidv/100',
  }
];

export default function PitchApproval() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Panel: Review Queue */}
      <section className="w-[400px] flex flex-col border-r border-slate-200/10 bg-surface-container-low flex-shrink-0">
        <div className="p-6 pb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Review Queue</h3>
            <p className="text-[12px] text-slate-500">24 pending approvals</p>
          </div>
          <Button size="sm" className="gap-2 bg-slate-900 shadow-sm px-3 rounded-xl border-none">
            <CheckCircle2 className="w-3.5 h-3.5" /> Approve All
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-4 no-scrollbar">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={cn(
                "p-4 rounded-xl border cursor-pointer transition-all",
                selectedContact.id === contact.id 
                  ? "bg-white border-sky-400/30 shadow-sm" 
                  : "bg-transparent border-transparent hover:bg-slate-200/50"
              )}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Avatar src={contact.avatar} fallback={contact.initials || contact.name} size="md" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{contact.name}</h4>
                    <p className="text-[11px] text-slate-500">{contact.title}</p>
                  </div>
                </div>
                <Badge variant={selectedContact.id === contact.id ? 'sky' : 'slate'}>
                  {contact.score} SCORE
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className={cn(
                  "text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1",
                  contact.status === 'Draft' ? "text-amber-600 bg-amber-50" : 
                  contact.status === 'Approved' ? "text-emerald-600 bg-emerald-50" : 
                  contact.status === 'Edited' ? "text-blue-600 bg-blue-50" : "text-rose-600 bg-rose-50"
                )}>
                  {contact.status === 'Draft' && <Edit2 className="w-3 h-3" />}
                  {contact.status === 'Approved' && <CheckCircle2 className="w-3 h-3" />}
                  {contact.status === 'Edited' && <History className="w-3 h-3" />}
                  {contact.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                  {contact.status}
                </span>
                <span className="text-[11px] text-slate-400">{contact.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Panel: Pitch Preview */}
      <section className="flex-1 flex flex-col bg-surface overflow-hidden">
        <div className="p-8 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
              <BrainCircuit className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Pitch Preview: {selectedContact.name}</h2>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                Generated via <span className="font-semibold text-sky-500">Enterprise Value Arc</span> strategy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all"><RefreshCcw className="w-5 h-5" /></button>
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 pt-4 no-scrollbar">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-sky-500" /> Context Intelligence
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                  <span>{selectedContact.name.split(' ')[0]} recently posted about <span className="font-semibold text-slate-900">workflow automation</span> scaling issues.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                  <span>{selectedContact.name.split(' ')[1] ? 'InnovateFlow' : 'The target'}'s Series B funding deck emphasized <span className="font-semibold text-slate-900">operational efficiency</span>.</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" /> Hook Strategy
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                Leveraging their transition to micro-services. Connecting their internal scaling goals with our infrastructure modularity.
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Scalability focus</Badge>
                <Badge>CTO Persona</Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-4 border-b border-slate-100 pb-2">
            <button className="px-4 py-2 text-sm font-semibold text-sky-500 border-b-2 border-sky-500 flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-900 transition-all flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-900 transition-all flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </button>
          </div>

          <div className="relative">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 border-l-4 border-sky-500">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <p className="text-[12px] text-slate-400">Subject: Scaling {selectedContact.name.split(' ')[1] ? 'InnovateFlow' : 'Infrastructure'}'s Backend Infrastructure</p>
                  <div className="h-px w-24 bg-slate-100"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">142 Words</span>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
                <p>Hi {selectedContact.name.split(' ')[0]},</p>
                <p>Caught your session at the CTO Summit last week—your insights on the "automation debt" that comes with Series B scaling really hit home. It's a challenge we've seen many engineering leaders face as they pivot from speed-to-market to operational stability.</p>
                <p>I’ve been tracking your move toward a more modular architecture. Our Precision Intelligence framework was specifically designed to handle the exact state-sync bottlenecks you mentioned, reducing deployment latency by nearly 40% for teams at your current scale.</p>
                <p>Would you be open to a brief exchange on how we've helped similar CTOs bridge that automation gap without halting their feature roadmap?</p>
                <p>Best,<br/>Precision Architect Team</p>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-sky-500 transition-all border border-slate-100"><Edit2 className="w-5 h-5" /></button>
              <button className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-amber-500 transition-all border border-slate-100"><Wand2 className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="danger" className="gap-2">
              <XCircle className="w-5 h-5" /> Reject
            </Button>
            <Button variant="outline" className="gap-2 border-slate-200">
              <Edit2 className="w-5 h-5" /> Edit Manually
            </Button>
            <Button className="gap-2 px-8 bg-slate-900 shadow-lg">
              <UserCheck className="w-5 h-5" /> Approve Pitch
            </Button>
          </div>
        </div>

        <div className="p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/50 flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <Avatar key={i} fallback="JS" size="sm" className="ring-2 ring-white border-none" />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+21</div>
            </div>
            <span className="text-sm text-slate-500 font-medium">Pending: <span className="text-slate-900 font-bold">21 total</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="gap-2">
              <Download className="w-4 h-4" /> Export
            </Button>
            <Button variant="ghost" className="text-sky-600 hover:text-sky-700 hover:bg-sky-50">
              Approve Remaining
            </Button>
            <Button className="gap-2 px-6 bg-sky-500 shadow-md">
              Proceed to Outreach <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
