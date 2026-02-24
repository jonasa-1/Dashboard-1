import { 
  Edit3, 
  Shield, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  ArrowRight, 
  Lock, 
  ExternalLink,
  Mic,
  Paperclip,
  MapPin,
  ImageIcon as ImageIconLucide
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, User</h2>
        <p className="text-slate-500 mt-1">Here is what's happening with your workspace today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Diary Widget */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-100 flex items-center gap-2">
            <Edit3 className="text-primary" size={20} />
            <h3 className="font-bold text-slate-900">Quick Diary</h3>
          </div>
          <div className="flex-1 p-5 relative">
            <textarea 
              className="w-full h-40 bg-slate-50 border-none rounded-xl p-4 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 resize-none" 
              placeholder="Jot down a thought..."
            ></textarea>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">#Work</span>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">#Idea</span>
              <button className="px-2 py-0.5 border border-dashed border-slate-300 text-slate-400 text-[10px] font-bold rounded uppercase tracking-wider hover:border-primary hover:text-primary">+ Add Tag</button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 text-slate-400">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ImageIconLucide size={18} /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Paperclip size={18} /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><MapPin size={18} /></button>
              </div>
              <button className="bg-primary/10 text-primary font-bold px-6 py-2 rounded-lg text-sm hover:bg-primary/20 transition-colors">
                Save Note
              </button>
            </div>
          </div>
        </div>

        {/* Security Overview Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                <Shield size={24} />
              </div>
              <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-medium">Safe</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">42 Passwords</h3>
            <p className="text-slate-500 text-sm mt-1">Your credentials are encrypted and secure.</p>
          </div>
          <div className="mt-8">
            <button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Lock size={14} />
              Manage Vault
            </button>
          </div>
        </div>

        {/* Recent Links Widget */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <LinkIcon className="text-primary" size={18} />
              Recent Links
            </h3>
            <button className="text-primary text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { title: 'UI Design Inspiration', url: 'dribbble.com', tags: ['#Design', '#Inspiration'] },
              { title: 'Open Source Project', url: 'github.com', tags: ['#Coding'] },
              { title: 'Project Roadmap 2024', url: 'notion.so', tags: ['#Planning'] }
            ].map((link, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 group cursor-pointer hover:bg-primary/5 transition-colors">
                <div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center overflow-hidden border border-slate-100">
                  <div className="bg-slate-200 w-full h-full flex items-center justify-center text-[10px] font-bold text-slate-400">
                    {link.url[0].toUpperCase()}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{link.title}</p>
                  <p className="text-xs text-slate-500 truncate">{link.url}</p>
                  <div className="flex gap-1 mt-1">
                    {link.tags.map(tag => (
                      <span key={tag} className="text-[9px] text-primary/70 font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Screenshot Widget */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 h-48 md:h-auto relative overflow-hidden bg-slate-100">
            <img 
              alt="Latest Screenshot" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://picsum.photos/seed/screenshot/800/600"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-lg">
              <ExternalLink size={14} className="text-slate-700" />
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <ImageIcon className="text-primary" size={18} />
                  Latest Screenshot
                </h3>
                <span className="text-xs text-slate-400">2h ago</span>
              </div>
              <p className="text-slate-700 text-sm font-medium">Research dashboard layout for the new project. Focus on information hierarchy and spacing.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">Research</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">UI/UX</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/50/50`} alt="Avatar" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">
                  +2
                </div>
              </div>
              <button className="text-primary text-sm font-bold flex items-center gap-1 group">
                View Folder
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
