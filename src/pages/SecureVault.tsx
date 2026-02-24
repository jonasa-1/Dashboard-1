import { 
  ShieldCheck, 
  Plus, 
  Search, 
  Bell, 
  Settings, 
  Eye, 
  MoreVertical, 
  Lock, 
  Key, 
  ShieldAlert,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function SecureVault() {
  const notes = [
    {
      id: '1',
      title: 'Main Bank PIN',
      type: 'finance',
      preview: '•••• •••• •••• 4492',
      lastModified: '2 days ago',
      color: 'emerald'
    },
    {
      id: '2',
      title: 'Home Alarm Code',
      type: 'home',
      preview: 'AES-256 ENCRYPTED DATA',
      lastModified: '1 week ago',
      color: 'amber'
    },
    {
      id: '3',
      title: 'Passport Recovery Phrase',
      type: 'personal',
      preview: '•••• •••• •••• ••••',
      lastModified: '3 weeks ago',
      color: 'purple'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Secure Notes</h2>
            <p className="text-slate-500 mt-1">End-to-end encrypted items stored in your private vault.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all">
            <Plus size={18} />
            <span>New Secure Note</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shrink-0">
            All Items
          </button>
          {[
            { label: 'finance', color: 'bg-emerald-500' },
            { label: 'home', color: 'bg-amber-500' },
            { label: 'personal', color: 'bg-purple-500' }
          ].map(cat => (
            <button key={cat.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 hover:border-primary text-slate-600 text-sm font-medium shrink-0 transition-colors">
              <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
              #{cat.label}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 hover:border-primary text-slate-600 text-sm font-medium shrink-0">
            <Plus size={16} />
          </button>
        </div>

        {/* Grid of Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm border border-primary/5 hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {note.type === 'finance' ? <ShieldCheck size={20} /> : note.type === 'home' ? <Lock size={20} /> : <Key size={20} />}
                </div>
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                  note.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' : 
                  note.color === 'amber' ? 'bg-amber-100 text-amber-700' : 
                  'bg-purple-100 text-purple-700'
                }`}>
                  #{note.type}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">{note.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-mono text-slate-400 tracking-tighter">{note.preview}</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Last modified: {note.lastModified}</p>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                  <Eye size={16} />
                  Reveal
                </button>
                <button className="px-3 py-2.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Empty Placeholder Card */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 p-6 hover:bg-primary/10 transition-all cursor-pointer group">
            <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
              <Plus size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-slate-900">Create Secure Entry</h3>
              <p className="text-xs text-slate-500 mt-1">Passwords, codes, or keys</p>
            </div>
          </div>
        </div>

        {/* Security Info Banner */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden relative">
          <div className="size-16 shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary relative z-10">
            <ShieldAlert size={32} />
          </div>
          <div className="flex-1 text-center md:text-left relative z-10">
            <h4 className="font-bold text-lg leading-tight">Zero-Knowledge Security</h4>
            <p className="text-slate-400 text-sm mt-1">Your notes are encrypted with your master password on your device. We never see your data.</p>
          </div>
          <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-all border border-white/20 shrink-0 relative z-10">
            Security Audit
          </button>
          {/* Background Decor */}
          <div className="absolute -right-8 -bottom-8 opacity-10 text-primary">
            <ShieldCheck size={160} />
          </div>
        </div>
      </div>
    </div>
  );
}
