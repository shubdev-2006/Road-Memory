import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Camera, 
  MapPin, 
  CheckCircle2, 
  Search, 
  AlertTriangle, 
  Sparkles, 
  RefreshCw, 
  Zap, 
  Crosshair,
  FileImage,
  Layers,
  ArrowRight
} from 'lucide-react';
import { MOCK_PRESET_UPLOADS } from '../data/mockReports';

export const UploadZone = ({ onReportSubmit, setSelectedLocation }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [exifData, setExifData] = useState(null);
  const [manualSearchQuery, setManualSearchQuery] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(null);
  
  const fileInputRef = useRef(null);

  // Popular San Francisco street presets for manual search fallback
  const SUGGESTED_ADDRESSES = [
    { label: "Market St & 5th St, San Francisco", lat: 37.7842, lng: -122.4076 },
    { label: "Valencia St & 18th St, Mission District", lat: 37.7618, lng: -122.4216 },
    { label: "Lombard St & Hyde St, Russian Hill", lat: 37.8021, lng: -122.4187 },
    { label: "Columbus Ave & Broadway, North Beach", lat: 37.7981, lng: -122.4072 },
  ];

  // Process uploaded or selected image
  const processImage = (file, overrideData = null) => {
    setIsProcessing(true);
    setProcessingStep('Reading camera EXIF metadata...');

    const imagePreview = overrideData ? overrideData.url : URL.createObjectURL(file);
    setPreviewUrl(imagePreview);
    setSelectedFile(file || { name: 'sample_pothole_photo.jpg' });

    // Step 1: EXIF parsing simulation
    setTimeout(() => {
      setProcessingStep('Extracting GPS coordinates & Timestamp...');
    }, 600);

    // Step 2: AI damage severity analysis
    setTimeout(() => {
      setProcessingStep('Running RoadMemory AI Damage Severity Model...');
    }, 1200);

    // Step 3: Complete processing
    setTimeout(() => {
      setIsProcessing(false);
      
      const lat = overrideData ? overrideData.lat : (37.7749 + (Math.random() - 0.5) * 0.04);
      const lng = overrideData ? overrideData.lng : (-122.4194 + (Math.random() - 0.5) * 0.04);
      const locationStr = overrideData ? overrideData.locationStr : "1200 Market Street, San Francisco, CA";
      
      const generatedExif = {
        lat: parseFloat(lat.toFixed(4)),
        lng: parseFloat(lng.toFixed(4)),
        locationStr,
        timestamp: new Date().toLocaleString(),
        camera: overrideData ? "iPhone 15 Pro" : "Mobile Camera",
        aperture: "f/1.8",
        iso: 64,
        severity: overrideData ? overrideData.severity : "High Priority",
        severityScore: overrideData ? overrideData.severityScore : Math.floor(Math.random() * 25) + 75,
        aiDetails: overrideData ? overrideData.aiDetails : {
          damageType: "Severe Asphalt Pothole",
          estimatedDepth: "7.8 cm",
          surfaceArea: "1.5 m²",
          hazardLevel: "Critical Risk to Suspension",
          suggestedFix: "Immediate Cold/Hot Patching",
          estimatedCost: "$480"
        }
      };

      setExifData(generatedExif);
      
      // Update interactive map center immediately
      setSelectedLocation({
        lat: generatedExif.lat,
        lng: generatedExif.lng,
        locationStr: generatedExif.locationStr
      });
    }, 1800);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedPresetIndex(null);
      processImage(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedPresetIndex(null);
      processImage(e.dataTransfer.files[0]);
    }
  };

  const handlePresetSelect = (index) => {
    setSelectedPresetIndex(index);
    const preset = MOCK_PRESET_UPLOADS[index];
    processImage(null, preset);
  };

  const handleManualLocationSelect = (addressObj) => {
    setManualSearchQuery(addressObj.label);
    if (exifData) {
      const updated = {
        ...exifData,
        lat: addressObj.lat,
        lng: addressObj.lng,
        locationStr: addressObj.label
      };
      setExifData(updated);
      setSelectedLocation({ lat: addressObj.lat, lng: addressObj.lng, locationStr: addressObj.label });
    } else {
      setSelectedLocation({ lat: addressObj.lat, lng: addressObj.lng, locationStr: addressObj.label });
    }
  };

  const handleSubmit = () => {
    if (!previewUrl || !exifData) return;

    const newReport = {
      id: `REP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      title: `Pothole Report at ${exifData.locationStr.split(',')[0]}`,
      imageUrl: previewUrl,
      locationName: exifData.locationStr,
      latitude: exifData.lat,
      longitude: exifData.lng,
      timestamp: new Date().toISOString(),
      formattedDate: "Just Now",
      severity: exifData.severity,
      severityScore: exifData.severityScore,
      severityColor: exifData.severityScore > 80 ? "red" : "amber",
      status: "Assessing",
      statusColor: "yellow",
      upvotes: 1,
      aiAnalysis: exifData.aiDetails,
      exif: {
        camera: exifData.camera,
        aperture: exifData.aperture,
        shutter: "1/500s",
        iso: exifData.iso,
        gpsTimestamp: new Date().toLocaleTimeString()
      }
    };

    onReportSubmit(newReport);
    
    // Reset after submit
    setSelectedFile(null);
    setPreviewUrl(null);
    setExifData(null);
    setSelectedPresetIndex(null);
    setManualSearchQuery('');
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setExifData(null);
    setSelectedPresetIndex(null);
  };

  return (
    <div className="bg-white dark:bg-[#131B2E] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark transition-all">
      
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
              Report Road Damage
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Upload photo to extract EXIF location & run AI damage evaluation
            </p>
          </div>
        </div>
        <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          <Zap className="w-3 h-3 mr-1 text-amber-500 fill-amber-500" /> Real-time EXIF
        </span>
      </div>

      {/* Main Drag & Drop / Preview Box */}
      {!previewUrl ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
            isDragOver
              ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/20 scale-[0.99]'
              : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-slate-50/50 dark:bg-slate-900/40'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 shadow-inner">
            <Upload className="w-7 h-7" />
          </div>

          <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-base mb-1">
            Drag & drop pothole photo here
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 max-w-xs mx-auto">
            Supports JPG, PNG or WebP with embedded GPS metadata
          </p>

          <button
            type="button"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            Upload Pothole Photo
          </button>
        </div>
      ) : (
        /* Image Preview & Processing Display */
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 group">
            <img
              src={previewUrl}
              alt="Uploaded road damage"
              className="w-full h-56 object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

            {/* Clear Image Button */}
            <button
              onClick={resetUpload}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 hover:bg-black text-white text-xs font-medium backdrop-blur-md transition-all flex items-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Change</span>
            </button>

            {/* Floating Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
              <span className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md">
                <FileImage className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate max-w-[180px]">{selectedFile?.name || "Pothole Photo"}</span>
              </span>
              
              {exifData && (
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white font-bold backdrop-blur-md">
                  GPS Extracted ✓
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quick Demo Sample Presets */}
      {!previewUrl && (
        <div className="mt-4 pt-4 border-t border-slate-200/70 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
            <span>Or test with a sample photo:</span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">1-Click Demo</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {MOCK_PRESET_UPLOADS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handlePresetSelect(idx)}
                className={`p-2 rounded-xl text-left border text-xs transition-all flex items-center space-x-2 ${
                  selectedPresetIndex === idx
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <img src={preset.url} alt="sample" className="w-8 h-8 rounded-lg object-cover" />
                <span className="truncate flex-1 font-medium">{preset.name.split(':')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading Progress State */}
      {isProcessing && (
        <div className="mt-4 p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50">
          <div className="flex items-center space-x-3 mb-2">
            <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
              {processingStep}
            </span>
          </div>
          <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full animate-pulse-subtle w-3/4"></div>
          </div>
        </div>
      )}

      {/* Extracted EXIF & AI Severity Results Card */}
      {exifData && !isProcessing && (
        <div className="mt-4 space-y-4 animate-fadeIn">
          
          {/* Extracted Location Badge */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {exifData.locationStr}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    GPS: {exifData.lat}° N, {exifData.lng}° W • {exifData.camera}
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                EXIF match 100%
              </span>
            </div>
          </div>

          {/* AI Severity Evaluation Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-900 text-white border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  AI Damage Severity Assessment
                </span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                exifData.severityScore > 80
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}>
                {exifData.severity} ({exifData.severityScore}/100)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-slate-400 text-[10px] block">Damage Type</span>
                <span className="font-semibold">{exifData.aiDetails.damageType}</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-slate-400 text-[10px] block">Estimated Depth</span>
                <span className="font-semibold">{exifData.aiDetails.estimatedDepth}</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-slate-400 text-[10px] block">Hazard Level</span>
                <span className="font-semibold text-amber-300">{exifData.aiDetails.hazardLevel}</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <span className="text-slate-400 text-[10px] block">Repair Est.</span>
                <span className="font-semibold text-emerald-400">{exifData.aiDetails.estimatedCost}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 italic border-t border-white/10 pt-2">
              Suggested Fix: {exifData.aiDetails.suggestedFix}
            </p>
          </div>

        </div>
      )}

      {/* Manual Location Fallback Search Bar */}
      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 flex items-center justify-between">
          <span>No GPS metadata found? Override street address:</span>
          <span className="text-[10px] text-slate-400 font-normal">Manual Fallback</span>
        </label>
        
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={manualSearchQuery}
            onChange={(e) => setManualSearchQuery(e.target.value)}
            placeholder="Type street address (e.g. 500 Market St)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* Suggested Locations Chips */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {SUGGESTED_ADDRESSES.map((addr, i) => (
            <button
              key={i}
              onClick={() => handleManualLocationSelect(addr)}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200/50 dark:border-slate-700/50 truncate max-w-[200px]"
            >
              📍 {addr.label.split(',')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Report Button */}
      {previewUrl && exifData && (
        <button
          onClick={handleSubmit}
          className="mt-5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 group"
        >
          <span>Submit Pothole Report to City System</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

    </div>
  );
};
