import React from 'react';
import { ArrowRight, ShieldCheck, Activity, AlertTriangle, Cpu, TrendingUp, Layers, CheckCircle2, XCircle } from 'lucide-react';

export default function Hero({ onNavigate, stats }) {
  const [activeWorkflow, setActiveWorkflow] = React.useState('predictive');

  return (
    <section className="relative overflow-hidden bg-topo-pattern pt-12 pb-20 border-b border-white/10">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Tagline Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0e1726] border border-teal-500/30 text-teal-300 text-xs font-mono shadow-xl shadow-teal-500/5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">
              "Most systems record the current condition of an asset. <span className="text-teal-400 underline decoration-teal-500/40 underline-offset-4">RoadMemory records the asset's journey.</span>"
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Predictive Infrastructure Intelligence & Deterioration Memory Engine
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            A predictive infrastructure maintenance platform that learns from the historical condition, environment, traffic, defects, and maintenance records of infrastructure to estimate deterioration risk and prioritize preventive maintenance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-xl shadow-teal-500/25 flex items-center justify-center space-x-3 group"
            >
              <span>View Live Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('memory')}
              className="w-full sm:w-auto bg-[#0e1726] hover:bg-[#162032] text-slate-200 border border-white/15 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Layers className="w-4 h-4 text-teal-400" />
              <span>See How It Works</span>
            </button>
          </div>
        </div>

        {/* 4 Telemetry Stat Chips */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="card-engineering p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Total Assets Monitored</span>
              <Activity className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              {stats.totalAssetsMonitored}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{stats.totalDistanceKm} municipal road corridor network</p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-transparent"></div>
          </div>

          <div className="card-engineering p-5 rounded-2xl relative overflow-hidden group border-amber-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">High-Risk Segments</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 tabular-nums">
              {stats.highRiskCount} <span className="text-xs font-normal text-slate-400">Segments</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Accelerating crack & rutting growth</p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>
          </div>

          <div className="card-engineering p-5 rounded-2xl relative overflow-hidden group border-red-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400">Critical Segments</span>
              <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-red-400 tabular-nums">
              {stats.criticalRiskCount} <span className="text-xs font-normal text-slate-400">Segments</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Immediate preventive resurfacing urgent</p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          </div>

          <div className="card-engineering p-5 rounded-2xl relative overflow-hidden group border-emerald-500/30">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Preventive Actions</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 tabular-nums">
              {stats.preventiveActionsRecommended} <span className="text-xs font-normal text-slate-400">Interventions</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">4.2x maintenance cost efficiency ratio</p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"></div>
          </div>

        </div>

        {/* Visual Before/After Workflow Comparison */}
        <div className="mt-16 bg-[#0e1726]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-teal-400 tracking-wider">Methodology Comparison</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Reactive Maintenance vs. Predictive RoadMemory Engine
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center bg-[#080d1a] p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveWorkflow('reactive')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeWorkflow === 'reactive' ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Reactive (Old Way)
              </button>
              <button
                onClick={() => setActiveWorkflow('predictive')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeWorkflow === 'predictive' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Predictive (RoadMemory)
              </button>
            </div>
          </div>

          {/* Workflow Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Reactive Box */}
            <div className={`p-6 rounded-xl border transition-all ${
              activeWorkflow === 'reactive' 
                ? 'bg-red-950/20 border-red-500/40 ring-1 ring-red-500/30' 
                : 'bg-[#080d1a]/50 border-white/5 opacity-70'
            }`}>
              <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase font-bold mb-4">
                <XCircle className="w-4 h-4" />
                <span>Reactive Workflow (Legacy Complaint Model)</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-[10px]">1</span>
                  <span>Road develops severe pothole / structural failure</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-[10px]">2</span>
                  <span>Citizen encounters damage & files public complaint</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-[10px]">3</span>
                  <span>PWD Authority dispatches physical inspection team</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-[10px]">4</span>
                  <span>High-cost emergency reconstruction repair issued</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-red-500/20 flex items-center justify-between text-[11px] text-red-300/80">
                <span>Result: Expensive, High Citizen Disruption, Short Pavement Lifespan</span>
              </div>
            </div>

            {/* Predictive Box */}
            <div className={`p-6 rounded-xl border transition-all ${
              activeWorkflow === 'predictive' 
                ? 'bg-teal-950/20 border-teal-500/40 ring-1 ring-teal-500/30' 
                : 'bg-[#080d1a]/50 border-white/5 opacity-70'
            }`}>
              <div className="flex items-center space-x-2 text-teal-400 font-mono text-xs uppercase font-bold mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Predictive Loop (RoadMemory Intelligence)</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-200">
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
                  <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">1</span>
                  <span>Historical Defect Data + Inspection Fleet Telemetry</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
                  <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">2</span>
                  <span>Monsoon Rainfall + Freight Axle Load Sensor Inputs</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
                  <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">3</span>
                  <span>Infrastructure Memory Engine estimates Deterioration Risk</span>
                </div>
                <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
                  <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">4</span>
                  <span>Priority Engine schedules Low-Cost Preventive Resurfacing</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-teal-500/20 flex items-center justify-between text-[11px] text-teal-300 font-semibold">
                <span>Result: 4.2x Cost Savings, Zero Pothole Failure, High Public Trust</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
