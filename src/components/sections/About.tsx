"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Flame,
  Binary,
  CheckCircle2,
} from "lucide-react";

const highlightsDomain = [
  {
    title: "AISC 303 & AWS D1.1 Compliance",
    desc: "Built with Certified Welding Inspectors (CWIs) to automate hold points, welder certs, and one-click audit binders.",
  },
  {
    title: "Native Tekla & SDS/2 Ingestion",
    desc: "Ingests complex piece marks, cambers, and manages detailer drawing revisions without scrap or back charges.",
  },
  {
    title: "MTR & Heat Number Genealogy",
    desc: "Hard-locks mill heats, ASTM grades, and drops/remnants directly to piece marks from receiving to erection.",
  },
];

const highlightsTech = [
  {
    title: "15+ Years Building Scalable Software",
    desc: "Proven engineering leadership delivering high-availability multi-tenant cloud platforms, hardened APIs, and enterprise systems.",
  },
  {
    title: "Offline-First Edge PWA Architecture",
    desc: "Zero-latency tablet scanning engineered for high-EMI welding bays and Wi-Fi deadzones with automatic background sync.",
  },
  {
    title: "Combinatorial Nesting & BIM Ingestion",
    desc: "Algorithmic 1D cut-list solvers and sub-second parsers processing 10,000+ line Tekla model exports and structural diffs.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="badge mb-3 mx-auto gap-1.5">
            <HardHat size={13} className="text-zinc-600" />
            <span>About FabSimple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Built by Steel Veterans.
            <span className="text-zinc-500 block sm:inline"> Engineered for Scale.</span>
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            We paired structural steel shop owners and CWIs with principal systems architects. No generic ERP bloat—just purpose-built software that speaks structural steel fluently.
          </p>
        </motion.div>

        {/* Dual Pillar Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-10">
          {/* Card 1: Shop Floor Domain */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
                  <Flame size={20} />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
                  Domain Experience
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Structural Steel Shop Mastery
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Decades of hands-on leadership managing multi-acre yards, beam lines, and zero-tolerance audits.
              </p>

              <div className="mt-6 space-y-4">
                {highlightsDomain.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded bg-zinc-100 flex items-center justify-center text-zinc-800 shrink-0 mt-0.5">
                      <CheckCircle2 size={12} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
                      <div className="text-xs text-zinc-500 leading-relaxed mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>AISC 303 · AWS D1.1 · SSPC</span>
              <span className="text-zinc-600 font-semibold">Shop-Tested Pedigree</span>
            </div>
          </motion.div>

          {/* Card 2: Software Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900 text-white rounded-2xl border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                  <Binary size={20} />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                  Software Depth
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                15+ Years of Software Engineering
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Over 15 years of experience building mission-critical cloud platforms, resilient architectures, and enterprise systems.
              </p>

              <div className="mt-6 space-y-4">
                {highlightsTech.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                      <CheckCircle2 size={12} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-zinc-400 leading-relaxed mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Next.js · Edge PWA · Cloud Systems</span>
              <span className="text-zinc-300 font-semibold">15+ Yrs Software Pedigree</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
