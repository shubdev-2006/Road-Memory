import React from 'react';

export default function RadialGauge({ score = 0, riskTier = 'low' }) {
  // Semi-circle radial gauge or full circular gauge (0 to 100)
  const radius = 54;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const colorMap = {
    critical: { stroke: '#ef4444', text: 'text-red-400', label: 'CRITICAL RISK', bg: 'bg-red-500/10 border-red-500/30' },
    high: { stroke: '#f97316', text: 'text-orange-400', label: 'HIGH RISK', bg: 'bg-orange-500/10 border-orange-500/30' },
    moderate: { stroke: '#f59e0b', text: 'text-amber-400', label: 'MODERATE RISK', bg: 'bg-amber-500/10 border-amber-500/30' },
    low: { stroke: '#10b981', text: 'text-emerald-400', label: 'LOW RISK', bg: 'bg-emerald-500/10 border-emerald-500/30' }
  };

  const styleConfig = colorMap[riskTier] || colorMap.low;

  return (
    <div className="flex flex-col items-center justify-center relative py-2">
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={styleConfig.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center score readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-black font-mono text-white tracking-tight tabular-nums">
            {score}
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            / 100 Risk
          </span>
        </div>
      </div>

      {/* Risk Badge Pill */}
      <div className={`mt-2 px-3 py-1 rounded-full border text-[11px] font-mono font-bold tracking-wider uppercase ${styleConfig.bg} ${styleConfig.text}`}>
        {styleConfig.label}
      </div>
    </div>
  );
}
