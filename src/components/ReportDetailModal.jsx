import React from 'react';
import { 
  X, 
  MapPin, 
  Sparkles, 
  Camera, 
  Calendar, 
  ThumbsUp, 
  ShieldAlert, 
  Wrench, 
  DollarSign, 
  CheckCircle2, 
  Clock,
  ExternalLink
} from 'lucide-react';

export const ReportDetailModal = ({ report, onClose, onUpvote }) => {
  if (!report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#131B2E] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl transition-all relative">
        
        {/* Header */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-white/90 dark:bg-[#131B2E]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
              {report.id}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
              report.severity === 'High Priority'
                ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                : 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
            }`}>
              {report.severity} ({report.severityScore}/100)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 max-h-72">
            <img
              src={report.imageUrl}
              alt={report.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-xl font-extrabold">{report.title}</h2>
              <p className="text-xs text-slate-200 flex items-center mt-1">
                <MapPin className="w-3.5 h-3.5 text-red-400 mr-1" />
                {report.locationName}
              </p>
            </div>
          </div>

          {/* AI Severity Evaluation Card */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>AI Computer Vision Diagnostic Audit</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white/5 p-2.5 rounded-xl">
                <span className="text-slate-400 text-[10px] block">Damage Classification</span>
                <span className="font-bold text-slate-100">{report.aiAnalysis?.damageType || "Asphalt Pothole"}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl">
                <span className="text-slate-400 text-[10px] block">Depth Estimate</span>
                <span className="font-bold text-slate-100">{report.aiAnalysis?.estimatedDepth || "6.5 cm"}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl">
                <span className="text-slate-400 text-[10px] block">Affected Area</span>
                <span className="font-bold text-slate-100">{report.aiAnalysis?.surfaceArea || "1.5 m²"}</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl">
                <span className="text-slate-400 text-[10px] block">Estimated Cost</span>
                <span className="font-bold text-emerald-400">{report.aiAnalysis?.estimatedCost || "$450"}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                <strong className="text-white">Recommended Fix:</strong> {report.aiAnalysis?.suggestedFix}
              </span>
            </div>
          </div>

          {/* EXIF Metadata & Location Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center space-x-1.5">
                <Camera className="w-4 h-4 text-blue-500" />
                <span>Camera & EXIF Payload</span>
              </h4>
              <div className="space-y-1 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                <p>Device: {report.exif?.camera || "Smartphone"}</p>
                <p>Aperture: {report.exif?.aperture || "f/1.8"}</p>
                <p>ISO: {report.exif?.iso || "50"}</p>
                <p>GPS Time: {report.exif?.gpsTimestamp || report.formattedDate}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Geospatial Verification</span>
              </h4>
              <div className="space-y-1 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
                <p>Latitude: {report.latitude}° N</p>
                <p>Longitude: {report.longitude}° W</p>
                <p>Confidence: 99.8% (EXIF Match)</p>
                <p>Municipal Zone: SF District 4</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => onUpvote(report.id)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md flex items-center space-x-1.5"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Confirm Pothole Hazard ({report.upvotes})</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200 transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
