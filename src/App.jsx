import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import InfrastructureMemoryExplainer from './components/InfrastructureMemoryExplainer';
import Dashboard from './components/Dashboard';
import ArchitecturePipeline from './components/ArchitecturePipeline';
import TrustMethodology from './components/TrustMethodology';
import Footer from './components/Footer';
import AssetHistoryModal from './components/AssetHistoryModal';
import { ROAD_SEGMENTS, CITY_SUMMARY } from './data/mockRoadData';

export default function App() {
  const [segments, setSegments] = useState(ROAD_SEGMENTS);
  const [selectedSegment, setSelectedSegment] = useState(ROAD_SEGMENTS[0]);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  const handleSelectSegment = (segment) => {
    setSelectedSegment(segment);
  };

  const handleOpenHistory = (segment) => {
    if (segment) setSelectedSegment(segment);
    setIsHistoryModalOpen(true);
  };

  const handleNavigate = (targetId) => {
    setActiveTab(targetId);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onNavigate={handleNavigate}
        activeTab={activeTab}
        onSelectSegment={handleSelectSegment}
        segments={segments}
      />

      {/* Hero Section (A) */}
      <div id="hero">
        <Hero
          onNavigate={handleNavigate}
          stats={CITY_SUMMARY}
        />
      </div>

      {/* What Makes This Different Section (B) */}
      <div id="different">
        <WhatMakesDifferent />
      </div>

      {/* Infrastructure Memory Explainer (C) */}
      <div id="memory">
        <InfrastructureMemoryExplainer
          onSelectSegment={handleOpenHistory}
          segments={segments}
        />
      </div>

      {/* Live Dashboard Core Product View (D) */}
      <div id="dashboard">
        <Dashboard
          segments={segments}
          selectedSegment={selectedSegment}
          onSelectSegment={handleSelectSegment}
          onOpenHistory={handleOpenHistory}
          stats={CITY_SUMMARY}
        />
      </div>

      {/* Architecture & How It Works (F) */}
      <div id="architecture">
        <ArchitecturePipeline />
      </div>

      {/* Trust & Engineering Methodology (G) */}
      <div id="trust">
        <TrustMethodology />
      </div>

      {/* Footer & Mission CTA (H) */}
      <Footer onNavigate={handleNavigate} />

      {/* Deep Dive Asset History Modal (E) */}
      {isHistoryModalOpen && (
        <AssetHistoryModal
          segment={selectedSegment}
          onClose={() => setIsHistoryModalOpen(false)}
        />
      )}

    </div>
  );
}
