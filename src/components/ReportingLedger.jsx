import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ThumbsUp, 
  ExternalLink, 
  AlertCircle, 
  Calendar, 
  MapPin, 
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
  CheckCircle,
  Clock
} from 'lucide-react';

export const ReportingLedger = ({ reports, onSelectReport, onUpvoteReport }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredReports = reports.filter(report => {
    const matchesSearch = 
      report.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = 
      selectedStatus === 'All' || 
      report.status === selectedStatus ||
      (selectedStatus === 'High Priority' && report.severity === 'High Priority');

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Assessing':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center space-x-1">
            <Clock className="w-3 h-3 mr-1 animate-pulse" /> Assessing
          </span>
        );
      case 'Reported':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3 mr-1" /> Reported
          </span>
        );
      case 'In Repair':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center space-x-1">
            <SlidersHorizontal className="w-3 h-3 mr-1" /> In Repair
          </span>
        );
      case 'Fixed':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-1">
            <CheckCircle className="w-3 h-3 mr-1" /> Fixed
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {status}
          </span>
        );
    }
  };

  return (
    <section className="mt-8">
      
      {/* Section Title & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <span>Status Dashboard & Reporting Ledger</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-mono">
              Live Feed
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Explore recent community reports, AI severity evaluations, and municipal repair status
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center space-x-2">
          {/* Search Bar */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by street or ID..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-[#131B2E] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-xs"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Table
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {['All', 'High Priority', 'Assessing', 'Reported', 'In Repair', 'Fixed'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedStatus === status
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-[#131B2E] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-white dark:bg-[#131B2E] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-200 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={report.imageUrl}
                  alt={report.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                
                {/* Top Status & ID */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/60 text-white backdrop-blur-md">
                    {report.id}
                  </span>
                  {getStatusBadge(report.status)}
                </div>

                {/* Bottom Severity Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-extrabold backdrop-blur-md shadow-sm ${
                    report.severity === 'High Priority'
                      ? 'bg-red-500/90 text-white'
                      : 'bg-amber-500/90 text-white'
                  }`}>
                    {report.severity} ({report.severityScore}/100)
                  </span>

                  <span className="text-[11px] text-white/90 font-medium flex items-center bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-md">
                    <Calendar className="w-3 h-3 mr-1" />
                    {report.formattedDate.split('•')[0]}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {report.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-start space-x-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="truncate">{report.locationName}</span>
                  </p>

                  {/* AI Quick Insight Box */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs mb-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Damage Type:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{report.aiAnalysis?.damageType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Est. Repair Cost:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{report.aiAnalysis?.estimatedCost}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls: Upvote & Detail Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onUpvoteReport(report.id)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Confirm ({report.upvotes})</span>
                  </button>

                  <button
                    onClick={() => onSelectReport(report)}
                    className="flex items-center space-x-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Inspect Audit</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-white dark:bg-[#131B2E] rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-stripe">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
              <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-200/80 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Report & Image</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">AI Severity</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 flex items-center space-x-3">
                      <img src={report.imageUrl} alt="thumbnail" className="w-12 h-10 object-cover rounded-lg" />
                      <div>
                        <span className="font-mono text-[10px] text-slate-400 block">{report.id}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{report.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium max-w-[200px] truncate">
                      📍 {report.locationName}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        report.severity === 'High Priority' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                      }`}>
                        {report.severity} ({report.severityScore})
                      </span>
                    </td>
                    <td className="py-3 px-4">{getStatusBadge(report.status)}</td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{report.formattedDate}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => onSelectReport(report)}
                        className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-100 transition-colors"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredReports.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-[#131B2E] rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm">No reports matching your search filter.</p>
        </div>
      )}

    </section>
  );
};
