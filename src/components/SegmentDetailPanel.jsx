import React from 'react';
import { AlertCircle, Calendar, Truck, Users, Wrench, Layers, ArrowUpRight, TrendingUp } from 'lucide-react';
import RadialGauge from './RadialGauge';
import ExplainableAiBreakdown from './ExplainableAiBreakdown';

export default function SegmentDetailPanel({ segment, onOpenHistory }) {
  if (!segment) {
    return (
      <div className="card-engineering p-8 rounded-2xl text-center text-slate-400">
        <p className="text-sm font-mono">Select a road segment on the map or priority table to view telemetry detail.</p>
      </div>
    );
  }

  return (
    <div className="card-engineering p-5 sm:p-6 rounded-2xl space-y-6">
      
      {/* Segment Header */}
      <div className="flex items-start justify-between pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-teal-400 font-bold px-2 py-0.5 bg-teal-500/10 border border-teal-500/30 rounded">
              {segment.id}
            </span>
            <span className="text-xs text-slate-400 font-mono">{segment.zone}</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1.5 leading-snug">{segment.name}</h3>
        </div>

        <button
          onClick={() => onOpenHistory(segment)}
          className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 text-xs font-mono flex items-center space-x-1 transition-all shrink-0"
          title="Open Asset Memory History"
        >
          <span>Digital Passport</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Radial Gauge & High-level Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        
        {/* Gauge (5 cols) */}
        <div className="sm:col-span-5 bg-[#080d1a] border border-white/10 rounded-xl p-3 flex flex-col items-center">
          <RadialGauge score={segment.riskScore} riskTier={segment.riskTier} />
        </div>

        {/* Core Telemetry List (7 cols) */}
        <div className="sm:col-span-7 space-y-2.5 text-xs font-mono">
          
          <div className="flex justify-between items-center p-2 rounded bg-[#080d1a] border border-white/5">
            <span className="text-slate-400">Current Pavement Index (PCI):</span>
            <span className="font-bold text-white tabular-nums">{segment.currentConditionIndex}/100</span>
          </div>

          <div className="flex justify-between items-center p-2 rounded bg-[#080d1a] border border-white/5">
            <span className="text-slate-400">12mo Deterioration Δ:</span>
            <span className="font-bold text-red-400 tabular-nums flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              {segment.deteriorationRate12m}
            </span>
          </div>

          <div className="flex justify-between items-center p-2 rounded bg-[#080d1a] border border-white/5">
            <span className="text-slate-400">Defect Density:</span>
            <span className="font-bold text-amber-300 tabular-nums">{segment.defectDensity}</span>
          </div>

          <div className="flex justify-between items-center p-2 rounded bg-[#080d1a] border border-white/5">
            <span className="text-slate-400">Last Maintenance:</span>
            <span className="font-medium text-slate-300">{segment.lastMaintenanceDate}</span>
          </div>

        </div>

      </div>

      {/* Defect Breakdown Badges */}
      <div className="p-3 bg-[#080d1a] border border-white/10 rounded-xl">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Detected Structural Defects</span>
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
          <div className="p-2 rounded bg-white/5 border border-white/5">
            <span className="text-red-400 font-bold text-sm block tabular-nums">{segment.defectsList?.potholes}</span>
            <span className="text-[10px] text-slate-400">Potholes</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/5">
            <span className="text-amber-400 font-bold text-sm block tabular-nums">{segment.defectsList?.cracksMeters}m</span>
            <span className="text-[10px] text-slate-400">Cracks</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/5">
            <span className="text-orange-400 font-bold text-sm block tabular-nums">{segment.defectsList?.ruttingMeters}m</span>
            <span className="text-[10px] text-slate-400">Rutting</span>
          </div>
        </div>
      </div>

      {/* Recommended Action Banner */}
      <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-start space-x-3">
        <Wrench className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-[10px] font-mono text-teal-300 uppercase font-bold tracking-wider block">Recommended Action</span>
          <p className="text-xs font-bold text-white mt-0.5">{segment.recommendedAction}</p>
          <span className="text-[11px] font-mono text-slate-400 mt-1 block">Est. Budget Cost: ₹{(segment.estimatedRepairCost / 100000).toFixed(1)} Lakhs</span>
        </div>
      </div>

      {/* XAI Risk Breakdown */}
      <ExplainableAiBreakdown xaiData={segment.xaiBreakdown} takeaway={segment.xaiTakeaway} />

      {/* Button to Open Deep Dive Memory History */}
      <button
        onClick={() => onOpenHistory(segment)}
        className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/20"
      >
        <Layers className="w-4 h-4" />
        <span>Explore Full Asset Journey & Memory Timeline</span>
      </button>

    </div>
  );
}
