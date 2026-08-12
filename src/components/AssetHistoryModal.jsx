import React from 'react';
import { X, Layers, Clock, ShieldCheck, FileText, Activity, AlertTriangle, Calendar, CloudRain, Truck, CheckCircle2 } from 'lucide-react';

export default function AssetHistoryModal({ segment, onClose }) {
  if (!segment) return null;

  const [selectedYear, setSelectedYear] = React.useState(2026);

  const historyItem = segment.timelineHistory?.find(h => h.year === selectedYear) || segment.timelineHistory?.[segment.timelineHistory.length - 1];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Modal Card */}
      <div className="bg-[#0e1726] border border-white/15 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0e1726] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs text-teal-400 font-bold px-2.5 py-0.5 bg-teal-500/10 border border-teal-500/30 rounded">
                DIGITAL PASSPORT: {segment.id}
              </span>
              <span className="text-xs font-mono text-slate-400">{segment.zone}</span>
            </div>
            <h2 className="text-xl font-extrabold text-white mt-1">{segment.name}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8">
          
          {/* Segment Asset Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#080d1a] border border-white/5">
              <span className="text-slate-400 block text-[10px]">PAVEMENT TYPE</span>
              <span className="font-bold text-white">Polymer Bituminous (SMA)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080d1a] border border-white/5">
              <span className="text-slate-400 block text-[10px]">TRAFFIC FREIGHT LOAD</span>
              <span className="font-bold text-teal-300 tabular-nums">{segment.axleLoadTn} Tn Axle Load</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080d1a] border border-white/5">
              <span className="text-slate-400 block text-[10px]">POPULATION IMPACT</span>
              <span className="font-bold text-amber-300 tabular-nums">{(segment.populationServed).toLocaleString()} Citizens</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080d1a] border border-white/5">
              <span className="text-slate-400 block text-[10px]">RISK STATUS</span>
              <span className={`font-bold uppercase ${
                segment.riskTier === 'critical' ? 'text-red-400' :
                segment.riskTier === 'high' ? 'text-orange-400' :
                segment.riskTier === 'moderate' ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {segment.riskScore}/100 ({segment.riskTier})
              </span>
            </div>
          </div>

          {/* Interactive Timeline Scrubbing Controls (Horizontal Year Selector) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="font-bold text-teal-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Clock className="w-4 h-4" />
                <span>Historical Journey Scrubbing (2021 – 2026)</span>
              </span>
              <span>Click any year marker to inspect telemetry snapshot</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {segment.timelineHistory.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setSelectedYear(item.year)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedYear === item.year
                      ? 'bg-teal-500/20 border-teal-400 ring-2 ring-teal-500/30'
                      : 'bg-[#080d1a] border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-white block">{item.year}</span>
                  <span className={`text-[10px] font-mono font-semibold block mt-0.5 ${
                    item.score < 50 ? 'text-red-400' : item.score < 75 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    PCI {item.score}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Year Inspection Snapshot */}
          {historyItem && (
            <div className="bg-[#080d1a] border border-white/10 rounded-2xl p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <span className="text-xs font-mono text-teal-400 font-bold uppercase">
                    Year {historyItem.year} Inspection Event Snapshot
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Condition State: <span className="text-teal-300">{historyItem.condition}</span>
                  </h3>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-slate-400">Data Source:</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-semibold text-slate-200">
                    {historyItem.inspectionSource}
                  </span>
                </div>
              </div>

              {/* Simulated Inspection Imagery & Telemetry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Simulated Telemetry Satellite/Camera Photo (5 cols) */}
                <div className="md:col-span-5 bg-black/50 border border-white/10 rounded-xl p-4 relative overflow-hidden flex flex-col items-center justify-center min-h-[180px]">
                  
                  {/* Visual Synthetic Vector Asset Graphic */}
                  <div className="w-full h-28 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-3 relative flex flex-col justify-between border border-white/10">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>TELEMETRY CAM-{historyItem.year}</span>
                      <span className="text-emerald-400">GPS OK</span>
                    </div>

                    {/* Simulated road line vector graphic with defect overlays */}
                    <div className="w-full h-8 relative flex items-center justify-center my-2">
                      <div className="w-full h-2 bg-slate-700 rounded relative">
                        {/* Dashed center line */}
                        <div className="w-full h-0.5 border-t border-dashed border-yellow-400/80 my-0.5"></div>
                        {/* Defect markers */}
                        {historyItem.score < 60 && (
                          <div className="absolute left-1/3 top-0 w-3 h-3 rounded-full bg-red-500/80 border border-red-300 animate-pulse"></div>
                        )}
                        {historyItem.score < 80 && (
                          <div className="absolute right-1/4 top-0 w-2 h-2 rounded-full bg-amber-500/80 border border-amber-300"></div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-300">
                      <span>LAT: {segment.center[0]}</span>
                      <span>LNG: {segment.center[1]}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 mt-2">
                    Verified Inspection Imagery Frame #{historyItem.year}-04
                  </span>
                </div>

                {/* Telemetry Metrics (7 cols) */}
                <div className="md:col-span-7 space-y-3 font-mono text-xs">
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-teal-400" />
                      <span className="text-slate-300">Pavement Condition Score (PCI):</span>
                    </div>
                    <span className={`font-bold tabular-nums text-sm ${
                      historyItem.score < 50 ? 'text-red-400' : historyItem.score < 75 ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {historyItem.score} / 100
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-300">Total Recorded Defect Units:</span>
                    </div>
                    <span className="font-bold text-amber-300 tabular-nums text-sm">
                      {historyItem.defectsCount} Defects
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CloudRain className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-300">Monsoon Rainfall Exposure:</span>
                    </div>
                    <span className="font-bold text-blue-300 tabular-nums text-sm">
                      {historyItem.rainfallMm} mm
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300">Maintenance Action Applied:</span>
                    </div>
                    <span className="font-bold text-emerald-300">
                      {historyItem.maintenanceApplied}
                    </span>
                  </div>

                </div>

              </div>

              {/* Inspector Engineering Notes */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block mb-1">
                  Engineers' Diagnostic Assessment Note:
                </span>
                <p className="text-slate-200 font-sans leading-relaxed">
                  "{historyItem.notes}"
                </p>
              </div>

            </div>
          )}

          {/* Condition Score Trend Bar Chart */}
          <div className="bg-[#080d1a] border border-white/10 rounded-2xl p-6">
            <h4 className="text-xs font-mono font-bold uppercase text-teal-400 tracking-wider mb-4">
              5-Year Pavement Condition Trajectory (2021 – 2026)
            </h4>

            <div className="h-36 flex items-end justify-between gap-4 pt-4 px-2 border-b border-white/10">
              {segment.timelineHistory.map(item => (
                <div key={item.year} className="flex-1 flex flex-col items-center group">
                  <span className="text-[10px] font-mono text-slate-300 font-bold mb-1 tabular-nums">
                    {item.score}
                  </span>
                  <div className="w-full bg-white/5 rounded-t-lg h-24 relative flex items-end">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        item.score < 50 ? 'bg-red-500' : item.score < 75 ? 'bg-amber-500' : 'bg-teal-500'
                      }`}
                      style={{ height: `${item.score}%` }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-2">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0e1726] border-t border-white/10 px-6 py-4 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Verifiable Data Provenance: PWD Sensor Network & LiDAR GIS Node</span>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl transition-all"
          >
            Close Digital Passport
          </button>
        </div>

      </div>
    </div>
  );
}
