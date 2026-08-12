import React from 'react';
import { Clock, TrendingUp, AlertTriangle, CheckCircle, ShieldAlert, ArrowRight, Activity, GitBranch } from 'lucide-react';
import { TWIN_PARADOX_DATA } from '../data/mockRoadData';

export default function InfrastructureMemoryExplainer({ onSelectSegment, segments }) {
  const sampleSegment = segments.find(s => s.id === "R102-S3") || segments[0];

  return (
    <section className="py-16 bg-[#0e1726]/60 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Digital Asset History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            The Infrastructure Memory Engine in Action
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every road segment maintains a continuous timeline of structural events. RoadMemory uses this historical trajectory to compute risk rather than relying on point-in-time condition alone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Vertical Timeline of Segment R102-S3 */}
          <div className="lg:col-span-7 card-engineering p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono text-teal-400 font-semibold uppercase">Digital Journey Passport</span>
                <h3 className="text-xl font-bold text-white mt-1">{sampleSegment.name}</h3>
                <p className="text-xs font-mono text-slate-400">ID: {sampleSegment.id} | Zone: {sampleSegment.zone}</p>
              </div>

              <span className="badge-critical px-3 py-1 rounded-full text-xs font-mono font-bold">
                RISK: {sampleSegment.riskScore}/100
              </span>
            </div>

            {/* Vertical Timeline Component */}
            <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-6">
              
              {sampleSegment.timelineHistory.slice(0, 4).map((item, idx) => (
                <div key={item.year} className="relative group">
                  
                  {/* Timeline Dot Node */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#0e1726] flex items-center justify-center transition-all ${
                    idx === 3 ? 'border-red-500 bg-red-500/20 animate-pulse' :
                    idx === 2 ? 'border-amber-500 bg-amber-500/20' :
                    'border-teal-500 bg-teal-500/20'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      idx === 3 ? 'bg-red-400' : idx === 2 ? 'bg-amber-400' : 'bg-teal-400'
                    }`}></div>
                  </div>

                  {/* Event Card */}
                  <div className="p-4 rounded-xl bg-[#080d1a] border border-white/10 hover:border-teal-500/40 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-teal-400">{item.year} Inspection Event</span>
                      <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                        item.score < 50 ? 'bg-red-500/20 text-red-300' :
                        item.score < 75 ? 'bg-amber-500/20 text-amber-300' : 'bg-teal-500/20 text-teal-300'
                      }`}>
                        PCI: {item.score}/100 ({item.condition})
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-1 font-medium">{item.notes}</p>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
                      <span>Defects: {item.defectsCount} units</span>
                      <span>Rainfall: {item.rainfallMm} mm</span>
                      <span className="text-teal-300">{item.maintenanceApplied}</span>
                    </div>
                  </div>

                </div>
              ))}

            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onSelectSegment(sampleSegment)}
                className="text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center space-x-1"
              >
                <span>View Complete 6-Year Interactive History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): The Twin Segment Paradox */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="card-engineering p-6 sm:p-8 rounded-2xl border-teal-500/30">
              <div className="flex items-center space-x-2 text-teal-400 font-mono text-xs font-bold uppercase mb-2">
                <GitBranch className="w-4 h-4" />
                <span>The Twin Segment Paradox</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Identical Current Condition, Opposite Deterioration Risk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Suppose two roads both currently exhibit exactly <span className="font-mono text-amber-300 font-bold">10 defects</span>. Static inspection treats them as identical. RoadMemory's trajectory engine reveals why one requires urgent intervention while the other requires none.
              </p>

              {/* Road A Card */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-red-500/30 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-white">{TWIN_PARADOX_DATA.roadA.id}</span>
                  <span className="badge-high text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    RISK SCORE: {TWIN_PARADOX_DATA.roadA.riskScore}/100
                  </span>
                </div>
                <div className="text-xs text-red-300 font-mono mb-2">
                  Defects: 10 count | Trend: {TWIN_PARADOX_DATA.roadA.historyTrend}
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {TWIN_PARADOX_DATA.roadA.reason}
                </p>
                <div className="mt-3 pt-2 border-t border-red-500/20 text-[11px] font-mono text-red-400 font-semibold">
                  Action: {TWIN_PARADOX_DATA.roadA.recommendedAction}
                </div>
              </div>

              {/* Road B Card */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-emerald-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-white">{TWIN_PARADOX_DATA.roadB.id}</span>
                  <span className="badge-low text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    RISK SCORE: {TWIN_PARADOX_DATA.roadB.riskScore}/100
                  </span>
                </div>
                <div className="text-xs text-emerald-300 font-mono mb-2">
                  Defects: 10 count | Trend: {TWIN_PARADOX_DATA.roadB.historyTrend}
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {TWIN_PARADOX_DATA.roadB.reason}
                </p>
                <div className="mt-3 pt-2 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-semibold">
                  Action: {TWIN_PARADOX_DATA.roadB.recommendedAction}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
