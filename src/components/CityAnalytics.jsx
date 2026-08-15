import React from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  MapPin, 
  Clock,
  Building2,
  Wrench
} from 'lucide-react';

export const CityAnalytics = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono mb-2 inline-block">
              San Francisco Municipal District 4
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              City Infrastructure Analytics & AI Intelligence
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Predictive road maintenance data, automated severity ranking, and budget efficiency metrics.
            </p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all self-start md:self-auto">
            Export Municipal PDF Report
          </button>
        </div>
      </div>

      {/* Grid of Key Performance Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Severity Distribution */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-stripe">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
              <PieChart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Damage Type Breakdown</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">2026 YTD</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-700 dark:text-slate-300">Deep Asphalt Potholes</span>
                <span className="text-red-500 font-mono">46%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '46%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-700 dark:text-slate-300">Thermal & Fatigue Cracks</span>
                <span className="text-amber-500 font-mono">32%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-700 dark:text-slate-300">Manhole & Utility Sinking</span>
                <span className="text-blue-500 font-mono">14%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-700 dark:text-slate-300">Shoulder Ravelling</span>
                <span className="text-emerald-500 font-mono">8%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Neighborhood Hotspots */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-stripe">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>High Density Hotspot Areas</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">Priority Zones</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Financial District & Market St</span>
              </div>
              <span className="font-mono font-bold text-red-600 dark:text-red-400">412 Reports</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Mission District & 24th St</span>
              </div>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">289 Reports</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="font-bold text-slate-800 dark:text-slate-200">SoMa / Howard & Folsom</span>
              </div>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">198 Reports</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Richmond District & Geary</span>
              </div>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">124 Reports</span>
            </div>
          </div>
        </div>

        {/* Card 3: Repair SLA & Savings */}
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-stripe flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span>Budget & AI Optimization</span>
              </h3>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                +42% Cost Savings
              </span>
            </div>

            <div className="space-y-3 text-xs mb-4">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
                <span className="text-[11px] text-emerald-800 dark:text-emerald-300 block font-semibold">
                  Preventive Repair Savings
                </span>
                <span className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">
                  $142,500
                </span>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                  Saved by catching micro-cracks before full base layer failure.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
                <span className="text-[11px] text-blue-800 dark:text-blue-300 block font-semibold">
                  Field Dispatch Efficiency
                </span>
                <span className="text-xl font-extrabold text-blue-700 dark:text-blue-400 font-mono">
                  1.8 Days SLA
                </span>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">
                  Automated routing groups nearby work orders for field crews.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 italic text-center pt-2 border-t border-slate-100 dark:border-slate-800">
            Powered by RoadMemory AI Prioritization Engine v2.4
          </div>
        </div>

      </div>

    </div>
  );
};
