import { Search, Bell, Settings, Calendar as CalendarIcon, RefreshCw } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 sticky top-0 z-50 h-16">
      <div className="flex flex-1 max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full h-10 pl-10 pr-4 rounded-lg border-none bg-slate-100 text-slate-900 focus:ring-2 focus:ring-primary/50 text-sm" 
            placeholder="Search entries, tags, or dates..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center gap-2 mr-4">
          <RefreshCw size={16} />
          <span>Export/Import JSON</span>
        </button>
        
        <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600">
          <CalendarIcon size={18} />
        </button>
        <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-600">
          <Settings size={18} />
        </button>
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30 ml-2">
          <img 
            alt="User Profile" 
            className="h-full w-full object-cover" 
            src="https://picsum.photos/seed/user/100/100"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
