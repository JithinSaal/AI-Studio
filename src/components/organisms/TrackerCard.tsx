import React from 'react';
import { AtSign, Linkedin, CalendarCheck, Clock, CheckCheck, Eye, Reply } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface TrackerCardProps {
  name: string;
  title: string;
  snippet?: string;
  reply?: string;
  meeting?: string;
  opens?: number;
  type: 'email' | 'linkedin' | 'calendar';
  time: string;
  highIntent?: boolean;
  statusId: string;
}

export const TrackerCard: React.FC<TrackerCardProps> = ({
  name,
  title,
  snippet,
  reply,
  meeting,
  opens,
  type,
  time,
  highIntent,
  statusId,
}) => {
  return (
    <div className={cn(
      "bg-white p-4 rounded-xl shadow-sm border transition-all group relative cursor-pointer hover:border-sky-500/30",
      highIntent ? "ring-1 ring-sky-500/20 border-sky-500/10 shadow-sky-500/5" : "border-slate-200/50"
    )}>
      {highIntent && (
        <div className="absolute -top-2 -right-1 bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
          HIGH INTENT
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-[14px] font-semibold text-slate-900">{name}</h4>
          <p className="text-[12px] text-slate-500">{title}</p>
        </div>
        {type === 'email' && <AtSign className="w-4 h-4 text-sky-500" />}
        {type === 'linkedin' && <Linkedin className="w-4 h-4 text-[#0A66C2]" />}
        {type === 'calendar' && <CalendarCheck className="w-4 h-4 text-emerald-600" />}
      </div>

      {snippet && (
        <div className="bg-slate-50 p-2.5 rounded-lg mb-3 border-l-2 border-sky-400">
          <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed italic">{snippet}</p>
        </div>
      )}

      {reply && (
        <div className="bg-emerald-50 p-2.5 rounded-lg mb-4 border border-emerald-100">
          <p className="text-[11px] text-emerald-800 font-medium italic">{reply}</p>
        </div>
      )}

      {meeting && (
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg mb-3 border border-slate-100">
          <Clock className="w-4 h-4 text-slate-400" />
          <div>
            <p className="text-[11px] font-bold text-slate-900">{meeting.split(',')[0] + ',' + meeting.split(',')[1]}</p>
            <p className="text-[10px] text-slate-500">{meeting.split(',')[2]}</p>
          </div>
        </div>
      )}

      {opens && (
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className={cn("h-full bg-sky-500", (opens || 0) >= 3 ? "w-full" : "w-1/2")}></div>
          </div>
          <span className="text-[10px] font-bold text-sky-500">{opens} Opens</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {statusId === 'opened' && (
          <>
            <button className="text-[10px] px-2 py-1 bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-md font-semibold transition-colors">Follow Up</button>
            <button className="text-[10px] px-2 py-1 bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-md font-semibold transition-colors">Mark Replied</button>
          </>
        )}
        {statusId === 'replied' && (
          <button className="w-full py-2 bg-sky-500/10 text-sky-600 text-[11px] font-bold rounded-lg hover:bg-sky-500 hover:text-white transition-all">Book Meeting</button>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 text-[11px] text-slate-400 font-medium">
        <span className="flex items-center gap-1">
          {statusId === 'sent' ? <CheckCheck className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
          {time}
        </span>
        {statusId === 'approved' && <button className="text-sky-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Send Now</button>}
        {statusId === 'opened' && <Eye className="w-3.5 h-3.5 text-sky-400" />}
        {statusId === 'replied' && <Reply className="w-3.5 h-3.5 text-emerald-500" />}
      </div>
    </div>
  );
};
