import { useState, useEffect, useRef } from 'react';
import { Mic, Square, RotateCcw, Save, Trash2, Search, Download, Upload } from 'lucide-react';

export default function Diktafon() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('TRYCK FÖR ATT BÖRJA');
  const [ideas, setIdeas] = useState<any[]>([]);
  
  // Waveform bars
  const bars = Array.from({ length: 16 });

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setStatus('TRYCK FÖR ATT BÖRJA');
    } else {
      setIsRecording(true);
      setStatus('● LYSSNAR');
      // Simulate transcript
      setTranscript('Det här är en test-transkribering av vad jag säger just nu...');
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-background-light">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black text-primary tracking-widest uppercase">💡 Idéfångaren</h2>
          <div className="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-xs font-mono text-slate-500 shadow-sm">
            {ideas.length} idéer
          </div>
        </div>

        {/* Record Section */}
        <section className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm text-center flex flex-col items-center">
          <p className={`text-[10px] font-mono tracking-[0.2em] uppercase mb-6 ${isRecording ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`}>
            {status}
          </p>
          
          <div className="relative mb-8">
            {isRecording && (
              <>
                <div className="absolute inset-[-20px] rounded-full border-2 border-rose-500/30 animate-ping"></div>
                <div className="absolute inset-[-40px] rounded-full border-2 border-rose-500/10 animate-ping animation-delay-500"></div>
              </>
            )}
            <button 
              onClick={toggleRecording}
              className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 shadow-xl ${
                isRecording ? 'bg-rose-500 text-white scale-110' : 'bg-slate-50 text-slate-400 border-2 border-slate-100 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <Mic size={40} />
            </button>
          </div>

          <div className="h-10 flex items-center justify-center gap-1 mb-6">
            {bars.map((_, i) => (
              <div 
                key={i} 
                className={`w-1 rounded-full bg-rose-500 transition-all duration-300 ${isRecording ? 'opacity-100' : 'opacity-20 h-1'}`}
                style={{ 
                  height: isRecording ? `${Math.random() * 32 + 4}px` : '4px',
                  animation: isRecording ? `wave 0.8s ease-in-out infinite alternate ${i * 0.05}s` : 'none'
                }}
              ></div>
            ))}
          </div>

          {transcript && (
            <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left italic text-slate-600 mb-6 animate-in fade-in slide-in-from-bottom-4">
              "{transcript}"
            </div>
          )}

          {transcript && (
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => {setTranscript(''); setStatus('TRYCK FÖR ATT BÖRJA'); setIsRecording(false);}}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={16} /> Tala igen
              </button>
              <button className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                <Save size={16} /> Spara idé
              </button>
            </div>
          )}
        </section>

        {/* Ideas List */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Sparade idéer</span>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input 
                  className="pl-8 pr-3 py-1.5 w-32 bg-white border border-slate-200 rounded-full text-[10px] focus:ring-primary focus:border-primary" 
                  placeholder="Sök..."
                />
              </div>
              <button className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors">
                <Download size={14} />
              </button>
              <button className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors">
                <Upload size={14} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {ideas.length === 0 ? (
              <div className="text-center py-12 text-slate-400 font-mono text-xs leading-relaxed">
                Inga idéer ännu.<br />Tryck på mikrofonen och börja tala!
              </div>
            ) : (
              ideas.map(idea => (
                <div key={idea.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group">
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary"><Edit3 size={14} /></button>
                    <button className="p-1.5 text-slate-400 hover:text-rose-500"><Trash2 size={14} /></button>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 pr-12">{idea.text}</p>
                  <div className="mt-4 flex justify-between items-end">
                    <div className="flex gap-2">
                      {idea.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] font-bold rounded uppercase border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">{idea.date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      
      <style>{`
        @keyframes wave {
          from { height: 4px; }
          to { height: 32px; }
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}

function Edit3({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
}
