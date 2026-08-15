import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  MapPin, 
  BarChart3, 
  FileText, 
  Bell, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab, reportCount }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0B0F17]/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/20">
              <MapPin className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                  Road<span className="text-blue-600 dark:text-blue-400">Memory</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                  <Sparkles className="w-3 h-3 mr-1" /> AI Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block -mt-1 font-medium">
                Infrastructure Damage & Prioritization Engine
              </p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'dashboard'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'reports'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>My Reports</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs font-bold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                {reportCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'analytics'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>City Analytics</span>
            </button>
          </nav>

          {/* Right: Mode Toggle, Notifications & User Avatar */}
          <div className="flex items-center space-x-3">
            
            {/* Light/Dark Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Theme"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Notification Bell */}
            <button 
              className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            {/* User Profile Avatar */}
            <div className="flex items-center space-x-3 pl-2 border-l border-slate-200 dark:border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-600 dark:from-blue-600 dark:to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                SK
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-tight">Shubham Kundu</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Citizen Inspector</p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-200/60 dark:border-slate-800/60">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'dashboard' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'reports' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Reports ({reportCount})</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex flex-col items-center text-xs font-medium ${
              activeTab === 'analytics' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </button>
        </div>

      </div>
    </header>
  );
};
