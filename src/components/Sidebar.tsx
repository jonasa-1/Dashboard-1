import { 
  LayoutDashboard, 
  BookOpen, 
  ShieldCheck, 
  Mic, 
  Settings,
  Calendar
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'diary', label: 'Diary', icon: BookOpen },
    { id: 'vault', label: 'Secure Vault', icon: ShieldCheck },
    { id: 'diktafon', label: 'Diktafon', icon: Mic },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col p-4 shrink-0 h-full">
      <div className="flex items-center gap-3 px-3 py-4 mb-6">
        <div className="bg-primary rounded-lg p-1.5 text-white">
          <LayoutDashboard size={20} />
        </div>
        <div>
          <h1 className="text-slate-900 text-base font-bold leading-none">Organizer</h1>
          <p className="text-slate-500 text-xs mt-1">Personal Workspace</p>
        </div>
      </div>

      <div className="space-y-1 flex-1">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Menu</p>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as Page)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              currentPage === item.id 
                ? 'bg-primary/10 text-primary font-bold' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <item.icon size={18} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Calendar</p>
        <div className="p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <button className="text-slate-400 hover:text-slate-600"><ChevronLeft size={14} /></button>
            <span className="text-xs font-bold">October 2023</span>
            <button className="text-slate-400 hover:text-slate-600"><ChevronRight size={14} /></button>
          </div>
          <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 mb-1">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="h-6 flex items-center justify-center text-[10px] col-start-2">1</div>
            <div className="h-6 flex items-center justify-center text-[10px]">2</div>
            <div className="h-6 flex items-center justify-center text-[10px] bg-primary text-white rounded-full font-bold shadow-sm shadow-primary/30">3</div>
            <div className="h-6 flex items-center justify-center text-[10px]">4</div>
            <div className="h-6 flex items-center justify-center text-[10px]">5</div>
            <div className="h-6 flex items-center justify-center text-[10px]">6</div>
            <div className="h-6 flex items-center justify-center text-[10px]">7</div>
            <div className="h-6 flex items-center justify-center text-[10px]">8</div>
            <div className="h-6 flex items-center justify-center text-[10px]">9</div>
            <div className="h-6 flex items-center justify-center text-[10px] bg-primary/20 rounded-full">10</div>
            <div className="h-6 flex items-center justify-center text-[10px]">11</div>
            <div className="h-6 flex items-center justify-center text-[10px]">12</div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
}

function ChevronLeft({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
}

function ChevronRight({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
}
