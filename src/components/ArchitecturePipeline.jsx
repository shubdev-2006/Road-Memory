import React from 'react';
import { Cpu, Database, Network, LineChart, ShieldCheck, Layers, GitBranch, ArrowDown, CheckCircle2, Clock } from 'lucide-react';

export default function ArchitecturePipeline() {
  const steps = [
    {
      step: '01',
      title: 'Multi-Modal Data Sources',
      desc: 'Drone LiDAR, Mobile Camera Fleets, PWD Repair Logs, Rainfall Datasets & Axle Traffic Sensors',
      icon: Database,
      badge: 'Data Layer'
    },
    {
      step: '02',
      title: 'Ingestion & Geospatial Cleaning',
      desc: 'Normalizing GIS coordinates, segmenting road corridors into 500m micro-blocks, and spatial alignment',
      icon: Network,
      badge: 'ETL Pipeline'
    },
    {
      step: '03',
      title: 'Feature & Trajectory Extraction',
      desc: 'Extracting crack density, rutting progression rates, sub-base age, and environmental stress indexes',
      icon: Cpu,
      badge: 'Feature Store'
    },
    {
      step: '04',
      title: 'Infrastructure Memory Engine',
      desc: 'Core engine matching historical asset trajectories to build continuous digital survival curves',
      icon: Layers,
      badge: 'Memory Core',
      highlight: true
    },
    {
      step: '05',
      title: 'Deterioration Risk Model',
      desc: 'Predictive ML survival curves estimating structural failure likelihood over 6–24 month horizon',
      icon: LineChart,
      badge: 'Predictive ML'
    },
    {
      step: '06',
      title: 'Maintenance Priority Engine',
      desc: 'Knapsack budget optimizer resolving Priority = (Risk × Impact) / Cost to output greenlit schedule',
      icon: ShieldCheck,
      badge: 'Decision Engine'
    }
  ];

  return (
    <section className="py-16 bg-[#080d1a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            How the Infrastructure Memory Engine Operates
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            An end-to-end predictive intelligence pipeline turning heterogeneous municipal telemetry into actionable preventive maintenance schedules.
          </p>
        </div>

        {/* Pipeline Graphic Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={s.step}
                className={`card-engineering p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between ${
                  s.highlight ? 'border-teal-500/50 bg-teal-950/20 ring-1 ring-teal-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-teal-400">{s.step}</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{s.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{s.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Latency: Sub-second Query</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Asset-Agnostic Extension Branching Diagram Callout */}
        <div className="bg-[#0e1726] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Asset-Agnostic Infrastructure Expansion</h3>
                <p className="text-xs text-slate-400 font-mono">The underlying Infrastructure Memory Engine extends across all civic infrastructure assets.</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold">
              Extensible Core Platform
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The same underlying Infrastructure Memory Engine that powers <span className="text-teal-400 font-bold">Road Corridors today</span> is architected to give digital memory to all municipal physical assets:
          </p>

          {/* Branching Asset Modules Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
            
            {/* Roads: Live MVP */}
            <div className="p-3.5 rounded-xl bg-teal-500/20 border border-teal-400 text-center">
              <span className="font-bold text-teal-200 block">Road Corridors</span>
              <span className="text-[10px] font-bold text-emerald-300 uppercase block mt-1 flex items-center justify-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>LIVE MVP</span>
              </span>
            </div>

            {/* Bridges */}
            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-white/10 text-center opacity-80">
              <span className="font-bold text-slate-300 block">Bridges & Flyovers</span>
              <span className="text-[10px] text-amber-400 uppercase block mt-1">Coming Next</span>
            </div>

            {/* Stormwater Drainage */}
            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-white/10 text-center opacity-80">
              <span className="font-bold text-slate-300 block">Stormwater Drains</span>
              <span className="text-[10px] text-amber-400 uppercase block mt-1">Coming Next</span>
            </div>

            {/* Streetlights */}
            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-white/10 text-center opacity-80">
              <span className="font-bold text-slate-300 block">Streetlight Grid</span>
              <span className="text-[10px] text-slate-400 uppercase block mt-1">Future Module</span>
            </div>

            {/* Footpaths */}
            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-white/10 text-center opacity-80">
              <span className="font-bold text-slate-300 block">Urban Sidewalks</span>
              <span className="text-[10px] text-slate-400 uppercase block mt-1">Future Module</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
