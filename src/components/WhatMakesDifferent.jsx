import React from 'react';
import { AlertCircle, Cpu, RefreshCcw, ShieldAlert, Zap, Layers, ArrowRight } from 'lucide-react';

export default function WhatMakesDifferent() {
  return (
    <section className="py-16 bg-[#080d1a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Why RoadMemory is Not Another Pothole App
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Most civic apps detect surface damage after it breaks. RoadMemory records the asset's digital memory to predict deterioration risk before failure occurs.
          </p>
        </div>

        {/* 2 Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Plain Language Contrast */}
          <div className="card-engineering p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-mono text-xs font-bold">
                  VS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Detection vs. Journey Memory</h3>
                  <p className="text-xs text-slate-400">Statement of Intelligence Scope</p>
                </div>
              </div>

              {/* Pothole Detection system */}
              <div className="mb-6 p-4 rounded-xl bg-[#080d1a] border border-red-500/20">
                <div className="text-[11px] font-mono uppercase text-red-400 font-bold mb-1 flex items-center space-x-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>A Pothole-Detection System says:</span>
                </div>
                <p className="text-sm font-semibold text-slate-200 italic">
                  "There is a pothole."
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Pure point-in-time observation. Ignores why it happened, how fast it grew, or whether the road sub-base is compromised.
                </p>
              </div>

              {/* RoadMemory system */}
              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 shadow-lg shadow-teal-500/5">
                <div className="text-[11px] font-mono uppercase text-teal-400 font-bold mb-1 flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  <span>RoadMemory Engine says:</span>
                </div>
                <p className="text-sm font-bold text-teal-200">
                  "This infrastructure asset has a history of deterioration, its condition is worsening, environmental and usage factors increase its risk, and it should be prioritized for preventive maintenance."
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-mono">
                  Full multi-factor trajectory analysis connecting sub-grade age, heavy axle loads, and monsoon saturation.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Scope: Point-in-Time → Dynamic Survival Curve</span>
            </div>
          </div>

          {/* Card 2: Complaint SOS Loop vs Proactive Intelligence Loop */}
          <div className="card-engineering p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono text-xs font-bold">
                  LOOP
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Complaint/SOS Loop vs. Proactive Control</h3>
                  <p className="text-xs text-slate-400">Operational Decision Pipeline</p>
                </div>
              </div>

              {/* SOS Complaint loop */}
              <div className="mb-6 p-4 rounded-xl bg-[#080d1a] border border-amber-500/20">
                <div className="text-[11px] font-mono uppercase text-amber-400 font-bold mb-2 flex items-center space-x-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Legacy Complaint / SOS Model:</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-300 flex-wrap gap-y-2">
                  <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Problem Occurs</span>
                  <span>→</span>
                  <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Person Reports</span>
                  <span>→</span>
                  <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Authority Responds</span>
                  <span>→</span>
                  <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30">Patchwork Repair</span>
                </div>
              </div>

              {/* RoadMemory Proactive Loop */}
              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 shadow-lg shadow-teal-500/5">
                <div className="text-[11px] font-mono uppercase text-teal-400 font-bold mb-2 flex items-center space-x-1.5">
                  <RefreshCcw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>RoadMemory Proactive Loop:</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-200 flex-wrap gap-y-2">
                  <span className="bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded border border-teal-500/30">Asset History</span>
                  <span>+</span>
                  <span className="bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded border border-teal-500/30">Inspection Fleet</span>
                  <span>+</span>
                  <span className="bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded border border-teal-500/30">Monsoon / Freight</span>
                  <span>→</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">Preventive Schedule</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Goal: Zero Pothole Escalation across City Network</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
