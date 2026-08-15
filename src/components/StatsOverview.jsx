import React from 'react';
import { AlertCircle, CheckCircle2, Clock, MapPin, TrendingUp, ShieldAlert } from 'lucide-react';

export const StatsOverview = ({ reports }) => {
  const total = reports.length + 1420; // adding mock baseline scale
  const highPriorityCount = reports.filter(r => r.severity === 'High Priority').length + 80;
  const fixedCount = reports.filter(r => r.status === 'Fixed').length + 310;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-6">
      
      {/* Tile 1: Total Reports */}
      <div className="bg-white dark:bg-[#131B2E] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Potholes Logged
          </span>
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <MapPin className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {total.toLocaleString()}
          </span>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
            <TrendingUp className="w-3 h-3 mr-0.5" /> +12.4%
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">Updated in real-time</p>
      </div>

      {/* Tile 2: High Priority */}
      <div className="bg-white dark:bg-[#131B2E] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            High Priority Hazards
          </span>
          <div className="p-2 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
            <ShieldAlert className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-extrabold text-red-600 dark:text-red-400">
            {highPriorityCount}
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Needs dispatch
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">AI Severity Score &gt; 80</p>
      </div>

      {/* Tile 3: Avg Resolution SLA */}
      <div className="bg-white dark:bg-[#131B2E] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Avg Repair SLA
          </span>
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
            <Clock className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            1.8 Days
          </span>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            -35% faster
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">From report to asphalt patch</p>
      </div>

      {/* Tile 4: Resolved Repairs */}
      <div className="bg-white dark:bg-[#131B2E] p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Repaired This Month
          </span>
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {fixedCount}
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Potholes sealed
          </span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">Verified by field crew</p>
      </div>

    </div>
  );
};
