import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { UploadZone } from './components/UploadZone';
import { InteractiveMap } from './components/InteractiveMap';
import { StatsOverview } from './components/StatsOverview';
import { ReportingLedger } from './components/ReportingLedger';
import { CityAnalytics } from './components/CityAnalytics';
import { ReportDetailModal } from './components/ReportDetailModal';
import { Footer } from './components/Footer';
import { INITIAL_REPORTS } from './data/mockReports';
import { Sparkles, MapPin, CheckCircle2, AlertTriangle } from 'lucide-react';

function AppContent() {
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeModalReport, setActiveModalReport] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleReportSubmit = (newReport) => {
    setReports(prev => [newReport, ...prev]);
    setSelectedLocation({
      lat: newReport.latitude,
      lng: newReport.longitude,
      locationStr: newReport.locationName
    });
    showToast(`Pothole report "${newReport.title}" submitted successfully! Pin dropped on map.`);
  };

  const handleUpvoteReport = (reportId) => {
    setReports(prev =>
      prev.map(r => r.id === reportId ? { ...r, upvotes: r.upvotes + 1 } : r)
    );
    showToast("Thank you! Your report confirmation has been recorded.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-500 selection:text-white transition-colors duration-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 flex items-center space-x-2 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        reportCount={reports.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        
        {/* TAB 1: Dashboard View (Main Upload Zone + Map + Ledger) */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* Hero Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-blue-100 mb-3 border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Citizen AI Road Watch</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Snap, Report, and Prioritize Road Repairs Instantaneously
                </h1>
                <p className="text-sm sm:text-base text-blue-100/90 mt-2 font-medium">
                  RoadMemory automatically extracts real-world EXIF GPS data from your photos, evaluates damage severity using AI, and dispatches municipal repair crews.
                </p>
              </div>
              
              {/* Background Geometric Accent */}
              <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            </div>

            {/* Split Screen Layout: Left Upload Zone & Right Interactive Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Upload Zone (5 cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <UploadZone
                  onReportSubmit={handleReportSubmit}
                  setSelectedLocation={setSelectedLocation}
                />
              </div>

              {/* Right Column: Interactive Leaflet Map (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <InteractiveMap
                  reports={reports}
                  selectedLocation={selectedLocation}
                  onSelectReport={(rep) => setActiveModalReport(rep)}
                />
              </div>

            </div>

            {/* Below the Fold: Key Metrics Bar */}
            <StatsOverview reports={reports} />

            {/* Below the Fold: Reporting Ledger */}
            <ReportingLedger
              reports={reports}
              onSelectReport={(rep) => setActiveModalReport(rep)}
              onUpvoteReport={handleUpvoteReport}
            />

          </div>
        )}

        {/* TAB 2: My Reports View */}
        {activeTab === 'reports' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white dark:bg-[#131B2E] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-stripe">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                My Pothole & Road Hazard Reports
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Track status updates and municipal dispatch logs for your reported hazards.
              </p>
            </div>

            <ReportingLedger
              reports={reports}
              onSelectReport={(rep) => setActiveModalReport(rep)}
              onUpvoteReport={handleUpvoteReport}
            />
          </div>
        )}

        {/* TAB 3: City Analytics View */}
        {activeTab === 'analytics' && (
          <CityAnalytics />
        )}

      </main>

      {/* Report Detail Modal */}
      {activeModalReport && (
        <ReportDetailModal
          report={activeModalReport}
          onClose={() => setActiveModalReport(null)}
          onUpvote={handleUpvoteReport}
        />
      )}

      {/* Sleek Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
