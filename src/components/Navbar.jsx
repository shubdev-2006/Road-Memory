import React from 'react';
import { Activity, Shield, Cpu, MapPin, Search, ArrowRight } from 'lucide-react';

export default function Navbar({ onNavigate, activeTab, onSelectSegment, segments }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);

  const handleSearch = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.trim().length > 0) {
      const filtered = segments.filter(
        s => s.id.toLowerCase().includes(q.toLowerCase()) || 
             s.name.toLowerCase().includes(q.toLowerCase()) ||
             s.zone.toLowerCase().includes(q.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080d1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tagline Badge */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('hero')}>
          <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shadow-lg shadow-teal-500/10">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg text-white tracking-tight">Road<span className="text-teal-400">Memory</span></span>
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-full">
                SIH 2026 Telemetry Node
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Predictive Infrastructure Intelligence Engine</p>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="relative hidden md:block w-72">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => searchQuery && setShowResults(true)}
              placeholder="Search Segment ID (e.g. R102-S3)..."
              className="w-full bg-[#0e1726] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono"
            />
          </div>

          {/* Quick Search Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#0e1726] border border-white/15 rounded-lg shadow-2xl z-50 max-h-60 overflow-y-auto divide-y divide-white/5">
              {searchResults.map(s => (
                <div
                  key={s.id}
                  onClick={() => {
                    onSelectSegment(s);
                    setShowResults(false);
                    onNavigate('dashboard');
                  }}
                  className="p-2.5 hover:bg-white/5 cursor-pointer flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-mono text-teal-400 font-semibold">{s.id}</span>
                    <p className="text-slate-300 truncate max-w-[180px]">{s.name}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                    s.riskTier === 'critical' ? 'badge-critical' :
                    s.riskTier === 'high' ? 'badge-high' :
                    s.riskTier === 'moderate' ? 'badge-moderate' : 'badge-low'
                  }`}>
                    {s.riskScore}/100
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-medium text-slate-300">
          <button 
            onClick={() => onNavigate('hero')}
            className={`hover:text-white transition-colors ${activeTab === 'hero' ? 'text-teal-400 font-semibold' : ''}`}
          >
            Overview
          </button>
          <button 
            onClick={() => onNavigate('different')}
            className={`hover:text-white transition-colors ${activeTab === 'different' ? 'text-teal-400 font-semibold' : ''}`}
          >
            Predictive vs Reactive
          </button>
          <button 
            onClick={() => onNavigate('memory')}
            className={`hover:text-white transition-colors ${activeTab === 'memory' ? 'text-teal-400 font-semibold' : ''}`}
          >
            Asset Journey Paradox
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`hover:text-white transition-colors flex items-center space-x-1.5 ${activeTab === 'dashboard' ? 'text-teal-400 font-semibold' : ''}`}
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span>Live Console</span>
          </button>
          <button 
            onClick={() => onNavigate('architecture')}
            className={`hover:text-white transition-colors ${activeTab === 'architecture' ? 'text-teal-400 font-semibold' : ''}`}
          >
            Architecture
          </button>
        </nav>

        {/* Action CTA */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM LIVE</span>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs transition-all duration-200 shadow-lg shadow-teal-500/20 flex items-center space-x-2"
          >
            <span>View Live Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
