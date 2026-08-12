import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Sliders, UserCheck, AlertCircle } from 'lucide-react';

export default function TrustMethodology() {
  const trustCards = [
    {
      title: "We estimate risk, not exact failure dates.",
      desc: "RoadMemory computes probabilistic deterioration likelihood based on historical survival curves, not unscientific exact-date predictions.",
      icon: ShieldCheck,
      tag: "Probabilistic Survival Curves"
    },
    {
      title: "Prototype data sources are clearly labeled.",
      desc: "Demonstration datasets combine real open GIS & municipal inspection feeds with calibrated stress-test scenarios.",
      icon: CheckCircle2,
      tag: "Verifiable Data Provenance"
    },
    {
      title: "Risk thresholds are fully configurable.",
      desc: "Calibrated to regional PWD engineering standards, sub-grade soil types, and local monsoon rainfall indexes.",
      icon: Sliders,
      tag: "Municipal PWD Standards"
    },
    {
      title: "Decision-support tool for human engineering review.",
      desc: "Empowers municipal engineers with transparent XAI reasoning; does not replace professional human oversight.",
      icon: UserCheck,
      tag: "Human-in-the-Loop Governance"
    }
  ];

  return (
    <section className="py-16 bg-[#0e1726]/40 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-semibold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
            Engineering Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Trust & Methodology Principles
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Built to earn the trust of municipal engineers, PWD officials, and urban infrastructure authorities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="card-engineering p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-teal-300">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    "{card.title}"
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Audited Engineering Protocol</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
