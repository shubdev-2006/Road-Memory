import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from '../context/ThemeContext';
import { 
  MapPin, 
  Layers, 
  Filter, 
  Maximize2, 
  ExternalLink, 
  ThumbsUp, 
  AlertTriangle,
  Compass,
  CheckCircle
} from 'lucide-react';

// Custom SVG Icons for Leaflet markers
const createCustomIcon = (color, isNew = false) => {
  const svgHtml = `
    <div className="relative flex items-center justify-center ${isNew ? 'new-marker-pulse' : ''}">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" 
              fill="${color}" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="9" r="3.5" fill="#ffffff"/>
      </svg>
    </div>
  `;
  return L.divIcon({
    html: svgHtml,
    className: 'custom-leaflet-marker',
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });
};

// Component to handle smooth map panning when selectedLocation changes
const MapController = ({ selectedLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], 15, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [selectedLocation, map]);
  return null;
};

export const InteractiveMap = ({ reports, selectedLocation, onSelectReport }) => {
  const { darkMode } = useTheme();
  const [filterSeverity, setFilterSeverity] = useState('All');
  
  const DEFAULT_CENTER = [37.7749, -122.4194]; // San Francisco Downtown

  // Color mapping based on report severity or new upload
  const getMarkerColor = (report) => {
    if (report.severity === 'High Priority') return '#ef4444'; // Red
    if (report.severity === 'Moderate') return '#f59e0b'; // Amber
    if (report.status === 'Fixed') return '#10b981'; // Green
    return '#3b82f6'; // Blue
  };

  const filteredReports = reports.filter(rep => {
    if (filterSeverity === 'All') return true;
    if (filterSeverity === 'High Priority') return rep.severity === 'High Priority';
    if (filterSeverity === 'Fixed') return rep.status === 'Fixed';
    if (filterSeverity === 'Assessing') return rep.status === 'Assessing';
    return true;
  });

  return (
    <div className="relative w-full h-[520px] lg:h-full min-h-[480px] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-stripe dark:shadow-stripe-dark flex flex-col bg-white dark:bg-[#131B2E]">
      
      {/* Map Control Header Bar */}
      <div className="z-20 px-4 py-3 bg-white/90 dark:bg-[#131B2E]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            Road Damage Geospatial Map
          </h3>
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {filteredReports.length} pins visible
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1 text-xs">
          <button
            onClick={() => setFilterSeverity('All')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              filterSeverity === 'All'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterSeverity('High Priority')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              filterSeverity === 'High Priority'
                ? 'bg-red-500 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            High Priority
          </button>
          <button
            onClick={() => setFilterSeverity('Fixed')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              filterSeverity === 'Fixed'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Fixed
          </button>
        </div>

      </div>

      {/* Leaflet Map Canvas */}
      <div className="relative flex-1 w-full h-full">
        <MapContainer
          center={selectedLocation ? [selectedLocation.lat, selectedLocation.lng] : DEFAULT_CENTER}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          {/* Tile Layer (Standard OpenStreetMap with CSS dark filter in index.css) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController selectedLocation={selectedLocation} />

          {/* Newly Dropped Pin (pulsing red) if user uploaded photo */}
          {selectedLocation && selectedLocation.lat && (
            <Marker
              position={[selectedLocation.lat, selectedLocation.lng]}
              icon={createCustomIcon('#ef4444', true)}
            >
              <Popup>
                <div className="p-1 max-w-[220px]">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-red-600 dark:text-red-400 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Newly Reported Pothole</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    {selectedLocation.locationStr || "San Francisco Location"}
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}
                  </p>
                </div>
              </Popup>
            </Marker>
          )}

          {/* Historical Report Pins */}
          {filteredReports.map((report) => (
            <Marker
              key={report.id}
              position={[report.latitude, report.longitude]}
              icon={createCustomIcon(getMarkerColor(report), false)}
            >
              <Popup>
                <div className="p-1.5 max-w-[240px] text-left">
                  <img
                    src={report.imageUrl}
                    alt={report.title}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  
                  <div className="flex items-center justify-between mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      report.severity === 'High Priority'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                    }`}>
                      {report.severity}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 font-mono">
                      Score: {report.severityScore}/100
                    </span>
                  </div>

                  <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-tight mb-1">
                    {report.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mb-2">
                    📍 {report.locationName}
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400">
                      👍 {report.upvotes} confirmations
                    </span>
                    <button
                      onClick={() => onSelectReport(report)}
                      className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <span>Details</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend Overlay at Bottom Right */}
        <div className="absolute bottom-4 right-4 z-20 bg-white/90 dark:bg-[#131B2E]/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-md text-[11px] space-y-1.5 hidden sm:block">
          <p className="font-bold text-slate-800 dark:text-slate-200 text-[10px] uppercase tracking-wider mb-1">
            Damage Legend
          </p>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">High Severity / Critical</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">Moderate Damage</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">Fixed / Repaired</span>
          </div>
        </div>

      </div>

    </div>
  );
};
