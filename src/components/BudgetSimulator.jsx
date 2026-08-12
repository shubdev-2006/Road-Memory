import React from 'react';
import { Calculator, CheckCircle2, AlertTriangle, ShieldCheck, TrendingDown, IndianRupee } from 'lucide-react';

export default function BudgetSimulator({ segments, allocatedBudget, onBudgetChange }) {
  // Budget range: ₹10 Lakhs (1,000,000) to ₹1.5 Crores (15,000,000)
  const minBudget = 1000000;
  const maxBudget = 15000000;
  const step = 500000;

  // Rank segments by Priority Index = (riskScore * impactScore) / estimatedRepairCost
  const rankedSegments = React.useMemo(() => {
    return [...segments].map(s => {
      const priorityIndex = (s.riskScore * s.impactScore) / (s.estimatedRepairCost / 100000);
      return { ...s, priorityIndex };
    }).sort((a, b) => b.priorityIndex - a.priorityIndex);
  }, [segments]);

  // Determine funded segments given allocatedBudget
  const { fundedSegments, unfundedSegments, totalSpent, totalRiskMitigated, totalRiskCitywide } = React.useMemo(() => {
    let currentSpent = 0;
    const funded = [];
    const unfunded = [];
    let riskMitigated = 0;

    const citywideTotalRisk = segments.reduce((sum, s) => sum + s.riskScore, 0);

    rankedSegments.forEach(s => {
      if (currentSpent + s.estimatedRepairCost <= allocatedBudget) {
        currentSpent += s.estimatedRepairCost;
        funded.push(s);
        riskMitigated += s.riskScore;
      } else {
        unfunded.push(s);
      }
    });

    const riskPercent = citywideTotalRisk > 0 ? ((riskMitigated / citywideTotalRisk) * 100).toFixed(1) : 0;

    return {
      fundedSegments: funded,
      unfundedSegments: unfunded,
      totalSpent: currentSpent,
      totalRiskMitigated: riskPercent,
      totalRiskCitywide: citywideTotalRisk
    };
  }, [rankedSegments, allocatedBudget, segments]);

  return (
    <div className="card-engineering rounded-2xl p-6 border-teal-500/30">
      
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-teal-400 font-mono text-xs font-bold uppercase">
            <Calculator className="w-4 h-4" />
            <span>Budget Optimization Engine</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            "What-If" Preventive Maintenance Budget Simulator
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Demonstrates real-time knapsack allocation based on <span className="font-mono text-teal-300 font-bold">Priority = (Risk × Impact) / Cost</span>.
          </p>
        </div>

        {/* Live Risk Mitigation Badge */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-center">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">City Risk Mitigated</span>
          <span className="text-2xl font-black font-mono text-emerald-300 tabular-nums">{totalRiskMitigated}%</span>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="text-xs font-mono text-slate-300 font-bold uppercase">
            Allocated Municipal Budget (₹):
          </label>
          <span className="text-2xl font-extrabold font-mono text-teal-300 tabular-nums">
            ₹{(allocatedBudget / 100000).toFixed(1)} Lakhs <span className="text-xs text-slate-400 font-normal">({(allocatedBudget / 10000000).toFixed(2)} Cr)</span>
          </span>
        </div>

        <input
          type="range"
          min={minBudget}
          max={maxBudget}
          step={step}
          value={allocatedBudget}
          onChange={(e) => onBudgetChange(Number(e.target.value))}
          className="w-full h-3 bg-[#080d1a] border border-white/15 rounded-lg appearance-none cursor-pointer accent-teal-400"
        />

        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>₹10 Lakhs (Min Baseline)</span>
          <span>₹75 Lakhs (Medium Triage)</span>
          <span>₹1.5 Crores (Full Network Renewal)</span>
        </div>
      </div>

      {/* Real-time Allocation Summary Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Total Budget Spent */}
        <div className="p-4 rounded-xl bg-[#080d1a] border border-white/10">
          <span className="text-[11px] font-mono text-slate-400 uppercase block">Optimal Capital Utilized</span>
          <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
            ₹{(totalSpent / 100000).toFixed(1)} Lakhs
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Remaining Buffer: ₹{((allocatedBudget - totalSpent) / 100000).toFixed(1)}L</p>
        </div>

        {/* Funded Segments Count */}
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-mono font-bold uppercase mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Funded Interventions</span>
          </div>
          <div className="text-xl font-bold font-mono text-emerald-300 tabular-nums">
            {fundedSegments.length} Segments
          </div>
          <p className="text-[11px] text-emerald-300/80 mt-1">High-impact risk prevented</p>
        </div>

        {/* Deferred Segments Count */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
          <div className="flex items-center space-x-1.5 text-amber-400 text-xs font-mono font-bold uppercase mb-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Deferred Segments</span>
          </div>
          <div className="text-xl font-bold font-mono text-amber-300 tabular-nums">
            {unfundedSegments.length} Segments
          </div>
          <p className="text-[11px] text-amber-300/80 mt-1">Monitored for future budget cycles</p>
        </div>

      </div>

      {/* Live Plain-English Recommendation Output */}
      <div className="mt-6 p-4 rounded-xl bg-teal-950/30 border border-teal-500/40 text-xs text-teal-200">
        <span className="font-mono font-bold uppercase text-[10px] text-teal-300 block mb-1">
          Optimization Engine Output:
        </span>
        <p className="font-medium leading-relaxed">
          Allocating <b className="text-white">₹{(allocatedBudget / 100000).toFixed(1)} Lakhs</b> successfully greenlights <b className="text-emerald-300">{fundedSegments.length} highest-priority road segments</b>, neutralizing <b className="text-emerald-300">{totalRiskMitigated}% of total citywide deterioration risk</b>.
          {unfundedSegments.length > 0 && (
            <span> <b className="text-amber-300">{unfundedSegments.length} lower-priority segments</b> are safely deferred to routine monitoring without immediate threat of catastrophic pavement failure.</span>
          )}
        </p>
      </div>

    </div>
  );
}
