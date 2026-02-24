import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Calendar, 
  Clock, 
  MapPin, 
  Bold, 
  Italic, 
  List, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Undo, 
  Redo,
  Tag,
  X
} from 'lucide-react';

export default function Diary() {
  const [selectedEntryId, setSelectedEntryId] = useState('1');

  const entries = [
    {
      id: '1',
      title: 'Project Brainstorming',
      date: 'Oct 24, 2023',
      time: '10:30 AM',
      preview: 'Started sketching out the new architecture for the database and how the diary storage will work...',
      tags: ['#work', '#ideas'],
      active: true
    },
    {
      id: '2',
      title: 'Weekly Reflection',
      date: 'Oct 23, 2023',
      time: '08:15 PM',
      preview: 'This week was productive. Managed to clear the backlog for the sprint and actually spent time on personal development.',
      tags: ['#personal'],
      active: false
    },
    {
      id: '3',
      title: 'Morning Routine Log',
      date: 'Oct 22, 2023',
      time: '06:00 AM',
      preview: 'Woke up at 5:45 AM. 20 minutes meditation, followed by a heavy leg day at the gym. Feeling energized.',
      tags: ['#fitness', '#personal'],
      active: false
    }
  ];

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Entry List */}
      <section className="w-96 border-r border-slate-200 bg-white flex flex-col shrink-0">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-lg">Entries</h3>
          <button className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-primary/90 transition-colors">
            <Plus size={14} /> New
          </button>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-2">
          {entries.map((entry) => (
            <div 
              key={entry.id}
              onClick={() => setSelectedEntryId(entry.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                selectedEntryId === entry.id 
                  ? 'bg-primary/5 border-primary/20' 
                  : 'hover:bg-slate-50 border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-[11px] font-bold uppercase ${selectedEntryId === entry.id ? 'text-primary' : 'text-slate-400'}`}>
                  {entry.date}
                </span>
                <span className="text-[11px] text-slate-400">{entry.time}</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{entry.title}</h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{entry.preview}</p>
              <div className="mt-3 flex gap-2">
                {entry.tags.map(tag => (
                  <span key={tag} className={`text-[10px] font-bold ${selectedEntryId === entry.id ? 'text-primary' : 'text-slate-400'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor View */}
      <section className="flex-1 bg-white flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1 text-slate-500">
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Bold size={18} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Italic size={18} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><List size={18} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><ImageIcon size={18} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><LinkIcon size={18} /></button>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Undo size={18} /></button>
            <button className="p-2 hover:bg-slate-100 rounded-lg"><Redo size={18} /></button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">Discard</button>
            <button className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">Save Entry</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-12 no-scrollbar">
          <div className="max-w-2xl mx-auto">
            <input 
              className="w-full text-4xl font-extrabold border-none bg-transparent focus:ring-0 mb-4 p-0 placeholder:text-slate-300" 
              placeholder="Untitled Entry" 
              defaultValue="Project Brainstorming"
            />
            <div className="flex items-center gap-4 mb-10 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                October 24, 2023
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                10:30 AM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Home Office
              </div>
            </div>
            <div className="prose prose-slate max-w-none">
              <textarea 
                className="w-full h-[400px] border-none bg-transparent focus:ring-0 p-0 text-lg leading-relaxed text-slate-700 placeholder:text-slate-300 resize-none" 
                placeholder="Start writing your thoughts..."
                defaultValue={`Started sketching out the new architecture for the database and how the diary storage will work. The idea is to use a distributed model that ensures low latency for users across different regions.

Key points to consider:
1. End-to-end encryption for all diary entries.
2. Fast indexing for the tagging system.
3. Offline support with conflict resolution.

Need to check if we can integrate the Material Symbols icons more natively into the UI component library.`}
              />
            </div>
          </div>
        </div>

        {/* Tagging Field */}
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Tag size={18} className="text-slate-400" />
            <div className="flex flex-1 flex-wrap gap-2 items-center">
              <span className="flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold py-1 px-3 rounded-full">
                #work
                <button className="hover:text-primary/70"><X size={12} /></button>
              </span>
              <span className="flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold py-1 px-3 rounded-full">
                #ideas
                <button className="hover:text-primary/70"><X size={12} /></button>
              </span>
              <input 
                className="flex-1 min-w-[120px] border-none bg-transparent focus:ring-0 text-sm p-1" 
                placeholder="Add tags..."
              />
            </div>
            <div className="text-xs text-slate-400 italic">Saved automatically at 10:35 AM</div>
          </div>
        </div>
      </section>
    </div>
  );
}
