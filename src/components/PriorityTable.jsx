import React from 'react';
import { ShieldAlert, ArrowUpDown, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

export default function PriorityTable({ segments, selectedSegment, onSelectSegment, budgetAllocations }) {
  const [sortField, setSortField] = React.useState('priorityRank');
  const [sortOrder, setSortOrder] = React.useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedSegments = [...segments].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    if (typeof aVal === 'string') {
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
  });

  return (
    <div className="card-engineering rounded-2xl p-5 sm:p-6">
      
      {/* Table Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3 mb-4">
        <div>
          <span className="text-xs font-mono uppercase text-teal-400 font-semibold tracking-wider">
            Municipal Maintenance Queue
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">
            Prioritized Preventive Maintenance Schedule
          </h3>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <span>Rank Formula:</span>
          <span className="px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-bold">
            Priority = (Risk Score × Impact Factor) / Cost
          </span>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono border-collapse">
          
          <thead>
            <tr className="border-b border-white/10 text-slate-400 uppercase text-[10px] tracking-wider bg-[#080d1a]">
              <th className="p-3 cursor-pointer hover:text-white" onClick={() => handleSort('priorityRank')}>
                <div className="flex items-center space-x-1">
                  <span>Rank</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3 cursor-pointer hover:text-white" onClick={() => handleSort('id')}>
                <div className="flex items-center space-x-1">
                  <span>Segment ID</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3">Corridor Location</th>
              <th className="p-3 cursor-pointer hover:text-white" onClick={() => handleSort('riskScore')}>
                <div className="flex items-center space-x-1">
                  <span>Risk Score</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3 cursor-pointer hover:text-white" onClick={() => handleSort('trafficVolume')}>
                <div className="flex items-center space-x-1">
                  <span>Traffic (PCD)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3 cursor-pointer hover:text-white" onClick={() => handleSort('estimatedRepairCost')}>
                <div className="flex items-center space-x-1">
                  <span>Est. Cost (₹)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-3">Budget Status</th>
              <th className="p-3">Recommended Intervention</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {sortedSegments.map((s) => {
              const isSelected = selectedSegment?.id === s.id;
              const isFunded = budgetAllocations ? budgetAllocations.fundedIds.includes(s.id) : true;

              return (
                <tr
                  key={s.id}
                  onClick={() => onSelectSegment(s)}
                  className={`hover:bg-white/5 transition-all cursor-pointer ${
                    isSelected ? 'bg-teal-500/10 border-l-4 border-l-teal-400' : ''
                  }`}
                >
                  {/* Rank */}
                  <td className="p-3 font-bold text-white">
                    <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono">
                      #{s.priorityRank}
                    </span>
                  </td>

                  {/* Segment ID */}
                  <td className="p-3 font-bold text-teal-400">
                    {s.id}
                  </td>

                  {/* Location */}
                  <td className="p-3 text-slate-200 font-sans font-medium max-w-[200px] truncate">
                    {s.name}
                  </td>

                  {/* Risk Score */}
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        s.riskTier === 'critical' ? 'bg-red-500 animate-pulse' :
                        s.riskTier === 'high' ? 'bg-orange-500' :
                        s.riskTier === 'moderate' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}></span>
                      <span className={`font-bold tabular-nums ${
                        s.riskTier === 'critical' ? 'text-red-400' :
                        s.riskTier === 'high' ? 'text-orange-400' :
                        s.riskTier === 'moderate' ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {s.riskScore}/100
                      </span>
                    </div>
                  </td>

                  {/* Traffic Volume */}
                  <td className="p-3 text-slate-300 tabular-nums">
                    {(s.trafficVolume).toLocaleString()} PCD/day
                  </td>

                  {/* Cost */}
                  <td className="p-3 text-slate-200 tabular-nums font-semibold">
                    ₹{(s.estimatedRepairCost / 100000).toFixed(1)}L
                  </td>

                  {/* Budget Funding Simulator Status */}
                  <td className="p-3">
                    {isFunded ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase inline-flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Funded</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-bold uppercase inline-flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>Deferred</span>
                      </span>
                    )}
                  </td>

                  {/* Recommended Action */}
                  <td className="p-3 text-slate-300 font-sans text-xs truncate max-w-[220px]">
                    {s.recommendedAction}
                  </td>

                  {/* Action Link */}
                  <td className="p-3 text-right">
                    <button className="text-teal-400 hover:text-teal-300 p-1 rounded hover:bg-white/5 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
}
