import React from 'react';
import { Cpu, ArrowRight, Github, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#040812] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Mission CTA Box */}
        <div className="card-engineering p-8 rounded-2xl bg-gradient-to-r from-[#0e1726] to-[#080d1a] border-teal-500/30 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
            <Cpu className="w-4 h-4 animate-pulse" />
            <span>Mission Objective</span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 max-w-4xl mx-auto font-medium leading-relaxed">
            "RoadMemory doesn't just detect damaged infrastructure. It gives infrastructure a memory, learns how its condition changes over time, estimates deterioration risk, and helps authorities decide what to maintain first."
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs font-mono transition-all inline-flex items-center space-x-2 shadow-xl shadow-teal-500/20"
            >
              <span>Launch Live Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/10 text-xs font-mono text-slate-400">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white">Road<span className="text-teal-400">Memory</span></span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm">
              Predictive Road-Infrastructure Intelligence & Deterioration Memory Platform built for Municipal Engineers & Public Works Authorities.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[10px]">
                Smart City Category
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[10px]">
                Sustainability
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-bold">
                Smart India Hackathon Grade
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-bold block uppercase text-[11px] mb-1">Platform Modules</span>
            <button onClick={() => onNavigate('hero')} className="block hover:text-teal-300 transition-colors">Hero Overview</button>
            <button onClick={() => onNavigate('different')} className="block hover:text-teal-300 transition-colors">Predictive vs Reactive</button>
            <button onClick={() => onNavigate('memory')} className="block hover:text-teal-300 transition-colors">Asset Journey Paradox</button>
            <button onClick={() => onNavigate('dashboard')} className="block hover:text-teal-300 transition-colors text-teal-400 font-bold">Live Risk Control Tower</button>
            <button onClick={() => onNavigate('architecture')} className="block hover:text-teal-300 transition-colors">Pipeline Architecture</button>
          </div>

          {/* Hackathon Credits (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-white font-bold block uppercase text-[11px]">Submission Metadata</span>
            <div className="p-3 rounded-xl bg-[#080d1a] border border-white/10 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Benchmark:</span>
                <span className="text-teal-300 font-bold">SIH 2026 Smart City</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target User:</span>
                <span className="text-slate-200">PWD & Municipal Authorities</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">System State:</span>
                <span className="text-emerald-400 font-bold">Operational Telemetry Node</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <span>&copy; 2026 RoadMemory Platform. All Rights Reserved.</span>
          <span>Calm-Authoritative Municipal Infrastructure Ops Console</span>
        </div>

      </div>
    </footer>
  );
}
