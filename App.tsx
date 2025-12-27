
import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA, QUICK_LINKS, APP_LINKS } from './constants';
import { ChecklistItem } from './types';
import { syncChecklist, updateChecklistItem, addChecklistItem } from './firebase';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'links' | 'checklist'>('itinerary');
  const [selectedDay, setSelectedDay] = useState(1);
  const [checklist, setChecklist] = useState<Record<string, ChecklistItem>>({});
  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    // In a real app with working Firebase, this would sync live data
    // For this demo, we'll try to sync but fallback to empty if config is placeholder
    try {
      syncChecklist((data) => setChecklist(data));
    } catch (e) {
      console.warn("Firebase sync failed - probably due to placeholder config", e);
    }
  }, []);

  const handleToggleCheck = (id: string, item: ChecklistItem) => {
    try {
      updateChecklistItem(id, !item.completed, item.text);
    } catch (e) {
      // Mock update if Firebase is not connected
      setChecklist(prev => ({
        ...prev,
        [id]: { ...item, completed: !item.completed }
      }));
    }
  };

  const handleAddCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    try {
      addChecklistItem(newItemText);
    } catch (e) {
       // Mock add if Firebase is not connected
       const id = Date.now().toString();
       setChecklist(prev => ({
         ...prev,
         [id]: { id, text: newItemText, completed: false }
       }));
    }
    setNewItemText('');
  };

  return (
    <div className="min-h-screen pb-24 text-slate-800">
      {/* Background Image Placeholder Area */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url('https://picsum.photos/id/${10 + selectedDay}/1200/800')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      </div>

      {/* Header */}
      <header className="p-6 pt-12 text-white">
        <h1 className="text-3xl font-bold tracking-tight">2026 日本冬季旅行</h1>
        <p className="mt-1 opacity-80 font-light">1/10 (六) - 1/17 (六) · 東京 & 富士山</p>
        
        {/* Countdown / Status Card */}
        <div className="mt-6 glass rounded-2xl p-4 text-slate-900 flex items-center justify-between shadow-xl">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">當前進度</div>
            <div className="text-lg font-medium">準備中 - 記得搶票！</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">Jan 10</div>
            <div className="text-xs text-slate-500">Departure Day</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 mt-2">
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {/* Day Selector */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 py-2">
              {ITINERARY_DATA.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full transition-all ${
                    selectedDay === day.id 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'glass text-slate-800'
                  }`}
                >
                  D{day.id}
                </button>
              ))}
            </div>

            {/* Itinerary Details */}
            <div className="glass rounded-3xl p-6 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{ITINERARY_DATA[selectedDay-1].date}</h2>
                <h3 className="text-indigo-600 font-medium text-lg">{ITINERARY_DATA[selectedDay-1].title}</h3>
                {ITINERARY_DATA[selectedDay-1].accommodation && (
                  <div className="mt-2 inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm">
                    🏠 {ITINERARY_DATA[selectedDay-1].accommodation}
                  </div>
                )}
              </div>

              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200" />
                
                {ITINERARY_DATA[selectedDay-1].schedules.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 flex items-center justify-center -translate-x-[11px]" />
                    <div className="text-xs font-bold text-slate-500 uppercase">{item.time}</div>
                    <div className="font-bold text-lg text-slate-900 mt-1">{item.activity}</div>
                    {item.description && (
                      <p className="mt-1 text-slate-600 leading-relaxed text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reminders section for specific days */}
            {selectedDay === 1 && (
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                <div className="flex items-start">
                  <div className="text-2xl mr-3">💡</div>
                  <div>
                    <h4 className="font-bold text-amber-800">行前關鍵提醒</h4>
                    <ul className="mt-2 text-sm text-amber-700 space-y-1 list-disc list-inside">
                      <li>吉卜力搶票：12/10 09:00 (台) 搶 1/14 的票。</li>
                      <li>自駕雪胎：富士山山區務必確認租車含雪胎。</li>
                      <li>展覽預約：建議提早完成 teamLab 訂票。</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'links' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section>
              <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-indigo-600 p-1 rounded">🔗</span> 快捷連結
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {QUICK_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-2xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform active:scale-95 shadow-lg"
                  >
                    <span className="text-3xl mb-2">{link.icon}</span>
                    <span className="text-sm font-medium leading-tight">{link.name}</span>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-teal-600 p-1 rounded">📱</span> 推薦 APP
              </h2>
              <div className="space-y-3">
                {APP_LINKS.map((app, idx) => (
                  <a
                    key={idx}
                    href={app.url}
                    target="_blank"
                    className="glass p-4 rounded-2xl flex items-center justify-between shadow-md"
                  >
                    <div className="font-medium">{app.name}</div>
                    <div className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">{app.platform}</div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'checklist' && (
          <div className="glass rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold mb-6">備忘清單</h2>
            
            <form onSubmit={handleAddCheck} className="flex gap-2 mb-6">
              <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder="新增項目..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all"
              >
                +
              </button>
            </form>

            <div className="space-y-3">
              {Object.entries(checklist).length > 0 ? (
                // Fix: Cast Object.entries(checklist) to properly typed array to avoid 'unknown' type issues
                (Object.entries(checklist) as [string, ChecklistItem][]).map(([id, item]) => (
                  <div 
                    key={id} 
                    onClick={() => handleToggleCheck(id, item)}
                    className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
                      item.completed ? 'bg-slate-100 opacity-60' : 'bg-white shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      item.completed ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'
                    }`}>
                      {item.completed && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className={`flex-1 ${item.completed ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                      {item.text}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-slate-400">
                  <p>目前沒有備忘項目</p>
                  <p className="text-xs mt-1">Firebase 已就緒，新增項目會即時同步</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-6 left-6 right-6 h-16 glass rounded-full flex items-center justify-around px-2 shadow-2xl border border-white/40 z-50">
        <button 
          onClick={() => setActiveTab('itinerary')}
          className={`flex flex-col items-center flex-1 py-1 transition-all ${activeTab === 'itinerary' ? 'text-indigo-600 scale-110' : 'text-slate-400'}`}
        >
          <span className="text-xl">📅</span>
          <span className="text-[10px] font-bold">行程</span>
        </button>
        <button 
          onClick={() => setActiveTab('links')}
          className={`flex flex-col items-center flex-1 py-1 transition-all ${activeTab === 'links' ? 'text-indigo-600 scale-110' : 'text-slate-400'}`}
        >
          <span className="text-xl">🔗</span>
          <span className="text-[10px] font-bold">連結</span>
        </button>
        <button 
          onClick={() => setActiveTab('checklist')}
          className={`flex flex-col items-center flex-1 py-1 transition-all ${activeTab === 'checklist' ? 'text-indigo-600 scale-110' : 'text-slate-400'}`}
        >
          <span className="text-xl">✅</span>
          <span className="text-[10px] font-bold">備忘</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
