import React from 'react';
import { MapPin, ShieldCheck, Github, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-[#0B0F17]/50 backdrop-blur-md py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm">
              RM
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                RoadMemory Platform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI-Powered Road Damage Reporting & Maintenance Prioritization
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>
            <span>EXIF Engine v2.4</span>
            <span>OpenStreetMap Tiles</span>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Citizens & Cities</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
