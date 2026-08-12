import React from 'react';
import { Activity, AlertTriangle, ShieldCheck, IndianRupee, Layers, Filter } from 'lucide-react';
import GeospatialMap from './GeospatialMap';
import SegmentDetailPanel from './SegmentDetailPanel';
import PriorityTable from './PriorityTable';
import BudgetSimulator from './BudgetSimulator';

export default function Dashboard({ segments, selectedSegment, onSelectSegment, onOpenHistory, stats }) {
  const [activeMapFilter, setActiveMapFilter] = React.useState('all');
  const [allocatedBudget, setAllocatedBudget] = React.useState(25000000); // Default ₹2.5 Cr

  // Budget allocations computation for the priority table
  const budgetAllocations = React.useMemo(() => {
    let currentSpent = 0;
    const fundedIds = [];
    const sorted = [...segments].sort((a, b) => b.riskScore - a.riskScore);

    sorted.forEach(s => {
      if (currentSpent + s.estimatedRepairCost <= allocatedBudget) {
        currentSpent += s.estimatedRepairCost;
        fundedIds.push(s.id);
      }
    });

    return { fundedIds, currentSpent };
  }, [segments, allocatedBudget]);

  return (
    <section className="py-10 bg-[#080d1a] border-b border-white/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Telemetry Stat Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono uppercase text-teal-400 font-bold tracking-widest">
                Flagship Command Console
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Live Infrastructure Memory & Risk Control Tower
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Real-time predictive telemetry feed for municipal PWD engineers
            </p>
          </div>

          {/* Quick Stat Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            
            <div className="p-3 rounded-xl bg-[#0e1726] border border-white/10">
              <span className="text-slate-400 block text-[10px]">MONITORED ASSETS</span>
              <span className="text-lg font-bold text-white tabular-nums">{stats.totalAssetsMonitored}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0e1726] border border-amber-500/30">
              <span className="text-amber-400 block text-[10px]">HIGH RISK</span>
              <span className="text-lg font-bold text-amber-300 tabular-nums">{stats.highRiskCount} Segments</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0e1726] border border-red-500/30">
              <span className="text-red-400 block text-[10px]">CRITICAL</span>
              <span className="text-lg font-bold text-red-400 tabular-nums">{stats.criticalRiskCount} Segments</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0e1726] border border-emerald-500/30">
              <span className="text-emerald-400 block text-[10px]">PREVENTIVE ACTION</span>
              <span className="text-lg font-bold text-emerald-300 tabular-nums">{stats.preventiveActionsRecommended} Scheduled</span>
            </div>

          </div>
        </div>

        {/* Main 2-Column Product Layout: Geospatial Map (Left ~60%) & Segment Detail Panel (Right ~40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Geospatial Map Container (7 cols) */}
          <div className="lg:col-span-7">
            <GeospatialMap
              segments={segments}
              selectedSegment={selectedSegment}
              onSelectSegment={onSelectSegment}
              activeFilter={activeMapFilter}
              onFilterChange={setActiveMapFilter}
            />
          </div>

          {/* Segment Telemetry Detail Panel (5 cols) */}
          <div className="lg:col-span-5">
            <SegmentDetailPanel
              segment={selectedSegment}
              onOpenHistory={onOpenHistory}
            />
          </div>

        </div>

        {/* What-If Budget Simulator Section */}
        <BudgetSimulator
          segments={segments}
          allocatedBudget={allocatedBudget}
          onBudgetChange={setAllocatedBudget}
        />

        {/* Maintenance Priority Queue Table */}
        <PriorityTable
          segments={segments}
          selectedSegment={selectedSegment}
          onSelectSegment={onSelectSegment}
          budgetAllocations={budgetAllocations}
        />

      </div>
    </section>
  );
}
