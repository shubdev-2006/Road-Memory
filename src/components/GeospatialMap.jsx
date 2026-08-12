import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Layers, MapPin, Filter, AlertTriangle } from 'lucide-react';

// Custom Map View Re-center component
function MapRecenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 13, { duration: 1.2 });
    }
  }, [center, map]);
  return null;
}

// Custom Marker Icons for Segment Center Points
const createCustomIcon = (tier, isSelected) => {
  const colorMap = {
    critical: '#ef4444',
    high: '#f97316',
    moderate: '#f59e0b',
    low: '#10b981'
  };
  const color = colorMap[tier] || '#10b981';
  const size = isSelected ? 24 : 18;

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 0 12px ${color};
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="width: 6px; height: 6px; background-color: white; border-radius: 50%;"></div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
};

export default function GeospatialMap({ segments, selectedSegment, onSelectSegment, activeFilter, onFilterChange }) {
  const defaultCenter = [12.9760, 77.6150]; // Bangalore Municipal Urban Core

  const riskColorMap = {
    critical: '#ef4444',
    high: '#f97316',
    moderate: '#f59e0b',
    low: '#10b981'
  };

  const filteredSegments = segments.filter(s => {
    if (activeFilter === 'all') return true;
    return s.riskTier === activeFilter;
  });

  return (
    <div className="card-engineering rounded-2xl p-4 relative overflow-hidden flex flex-col h-[580px]">
      
      {/* Map Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 z-10">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-teal-400" />
          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
            Municipal Infrastructure Geospatial Risk Map
          </h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
            {filteredSegments.length} Segments Visible
          </span>
        </div>

        {/* Risk Filter Tabs */}
        <div className="flex items-center space-x-1 bg-[#080d1a] p-1 rounded-xl border border-white/10 text-xs font-mono">
          {['all', 'critical', 'high', 'moderate', 'low'].map(tier => (
            <button
              key={tier}
              onClick={() => onFilterChange(tier)}
              className={`px-2.5 py-1 rounded-lg text-[11px] uppercase font-semibold transition-all ${
                activeFilter === tier
                  ? tier === 'critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : tier === 'high' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  : tier === 'moderate' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : tier === 'low' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Leaflet Map View */}
      <div className="flex-1 rounded-xl overflow-hidden relative border border-white/10">
        <MapContainer
          center={selectedSegment?.center || defaultCenter}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <MapRecenter center={selectedSegment?.center} />

          {/* Render Road Segments as Polylines */}
          {filteredSegments.map(seg => {
            const isSelected = selectedSegment?.id === seg.id;
            const strokeColor = riskColorMap[seg.riskTier] || '#10b981';

            return (
              <React.Fragment key={seg.id}>
                {/* Polyline */}
                <Polyline
                  positions={seg.coordinates}
                  pathOptions={{
                    color: strokeColor,
                    weight: isSelected ? 8 : seg.riskTier === 'critical' ? 6 : 4,
                    opacity: isSelected ? 1 : 0.85,
                    dashArray: isSelected ? '4, 4' : null
                  }}
                  eventHandlers={{
                    click: () => onSelectSegment(seg)
                  }}
                >
                  <Tooltip sticky direction="top" opacity={0.95}>
                    <div className="font-mono text-xs p-1">
                      <span className="font-bold text-teal-400">{seg.id}</span> - {seg.name}
                      <br />
                      <span className="text-slate-300">Risk Score: <b>{seg.riskScore}/100</b> ({seg.riskTier.toUpperCase()})</span>
                      <br />
                      <span className="text-slate-400">Defects: {seg.defectDensity}</span>
                    </div>
                  </Tooltip>
                </Polyline>

                {/* Marker at Segment Center */}
                <Marker
                  position={seg.center}
                  icon={createCustomIcon(seg.riskTier, isSelected)}
                  eventHandlers={{
                    click: () => onSelectSegment(seg)
                  }}
                >
                  <Popup>
                    <div className="font-mono text-xs space-y-1.5 p-1 min-w-[200px]">
                      <div className="flex justify-between items-center border-b border-white/10 pb-1">
                        <span className="font-bold text-teal-400">{seg.id}</span>
                        <span className={`px-2 py-0.5 text-[10px] rounded uppercase font-bold ${
                          seg.riskTier === 'critical' ? 'badge-critical' :
                          seg.riskTier === 'high' ? 'badge-high' :
                          seg.riskTier === 'moderate' ? 'badge-moderate' : 'badge-low'
                        }`}>
                          Risk {seg.riskScore}
                        </span>
                      </div>
                      <p className="text-slate-200 font-sans text-xs font-semibold">{seg.name}</p>
                      <div className="text-[11px] text-slate-300 pt-1">
                        <p>PCI Condition: <b className="text-white">{seg.currentConditionIndex}/100</b></p>
                        <p>Action: <b className="text-teal-300">{seg.recommendedAction}</b></p>
                      </div>
                      <button
                        onClick={() => onSelectSegment(seg)}
                        className="w-full mt-2 bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 border border-teal-500/40 py-1 rounded text-[10px] font-bold uppercase transition-all"
                      >
                        Inspect Telemetry Panel
                      </button>
                    </div>
                  </Popup>
                </Marker>
              </React.Fragment>
            );
          })}
        </MapContainer>

        {/* Map Legend Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#080d1a]/95 border border-white/15 p-2.5 rounded-xl text-[11px] font-mono shadow-2xl z-[1000] flex items-center space-x-4">
          <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Risk Tier Legend:</span>
          <div className="flex items-center space-x-1.5 text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Low (&lt;35)</span>
          </div>
          <div className="flex items-center space-x-1.5 text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>Moderate (35-65)</span>
          </div>
          <div className="flex items-center space-x-1.5 text-orange-400">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span>High (65-80)</span>
          </div>
          <div className="flex items-center space-x-1.5 text-red-400 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span>Critical (&gt;80)</span>
          </div>
        </div>

      </div>

    </div>
  );
}
