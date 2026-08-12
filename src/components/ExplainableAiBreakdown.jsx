import React from 'react';
import { Cpu, Info } from 'lucide-react';

export default function ExplainableAiBreakdown({ xaiData, takeaway }) {
  const factors = [
    { key: 'currentCondition', label: 'Current Defect Condition', weight: xaiData?.currentCondition || 30, color: 'bg-red-500' },
    { key: 'deteriorationTrend', label: 'Deterioration Trend (12m)', weight: xaiData?.deteriorationTrend || 25, color: 'bg-orange-500' },
    { key: 'trafficAxleLoad', label: 'Traffic & Freight Axle Load', weight: xaiData?.trafficAxleLoad || 18, color: 'bg-amber-500' },
    { key: 'subgradeAge', label: 'Pavement & Sub-base Age', weight: xaiData?.subgradeAge || 12, color: 'bg-yellow-500' },
    { key: 'monsoonExposure', label: 'Monsoon Rainfall Saturation', weight: xaiData?.monsoonExposure || 9, color: 'bg-teal-500' },
    { key: 'maintenanceLag', label: 'Deferred Maintenance Lag', weight: xaiData?.maintenanceLag || 6, color: 'bg-blue-500' }
  ];

  return (
    <div className="bg-[#080d1a] border border-white/10 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-teal-400" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
            Explainable AI (XAI) Risk Drivers
          </h4>
        </div>
        <span className="text-[10px] font-mono text-slate-400">Weighted Risk Model</span>
      </div>

      {/* Horizontal Factor Bars */}
      <div className="space-y-2.5">
        {factors.map(f => (
          <div key={f.key} className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-slate-300">{f.label}</span>
              <span className="text-slate-400 font-bold tabular-nums">{f.weight}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full ${f.color} rounded-full transition-all duration-700`}
                style={{ width: `${f.weight}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Plain English Takeaway */}
      {takeaway && (
        <div className="mt-4 p-3 rounded-lg bg-teal-950/20 border border-teal-500/30 flex items-start space-x-2 text-xs text-teal-200">
          <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono font-bold text-teal-300 uppercase block text-[10px]">Primary Driver Diagnosis:</span>
            <p className="mt-0.5 leading-relaxed">{takeaway}</p>
          </div>
        </div>
      )}
    </div>
  );
}
