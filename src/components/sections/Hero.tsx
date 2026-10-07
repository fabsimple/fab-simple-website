"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Play, Award, QrCode, CheckCircle2 } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const heroSlides = [
  {
    titlePart1: "Run Your Fabrication Shop.",
    titlePart2: "Without the Chaos.",
    description:
      "Bring estimating, project management, procurement, production, inventory, and billing together in one connected platform. From Tekla and SDS/2 BOM intake to heat-number traceability, saw-cut nesting, and AIA G702 billing, FabSimple keeps your entire operation organized and moving forward.",
  },
  {
    titlePart1: "Simplify Every Step of",
    titlePart2: "Your Fabrication Workflow.",
    description:
      "Eliminate disconnected spreadsheets, manual processes, and information gaps across your fabrication workflow. FabSimple streamlines everything from estimating and BOM processing to material tracking, shop-floor operations, project management, and billing—all in one place.",
  },
  {
    titlePart1: "Run Your Fab Shop Smarter.",
    titlePart2: "Not Harder.",
    description:
      "Equip your team with purpose-built tools for every stage of shop operations. From the GC Portal and Cut-List Optimizer to AISC 303 quality control, NCR reporting, and OSHA checklists, FabSimple helps your team improve efficiency, maintain compliance, and keep every job on track.",
  },
  {
    titlePart1: "Turn Fabrication Complexity",
    titlePart2: "into Operational Clarity.",
    description:
      "Steel fabrication involves countless details, materials, processes, and deadlines. FabSimple brings them together into a clear, connected workflow—giving you visibility from the initial estimate and BOM intake through material traceability, production, project delivery, and final billing.",
  },
  {
    titlePart1: "One Platform.",
    titlePart2: "Complete Control of Your Fab Shop.",
    description:
      "Replace disconnected tools with one platform built around the way fabrication shops actually work. FabSimple connects estimating, project management, material and heat tracking, nesting, production, inventory, and AIA billing so your teams can work from a single source of truth.",
  },
];

const stats = [
  { value: "100%", label: "AISC 303 Traceability" },
  { value: "AWS D1.1", label: "Structural Welding Code" },
  { value: "AIA G702", label: "Progress Billing & SOV" },
  { value: "Tekla & SDS/2", label: "Direct Detailing Intake" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-50">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-50/80" />

      {/* Decorative line elements */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-60" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-300 bg-white text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
            Built for Structural &amp; Miscellaneous Steel Fabricators
          </motion.div>

          {/* Rotating Headline & Description Carousel */}
          <div
            className="relative min-h-[310px] sm:min-h-[260px] lg:min-h-[250px] flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 leading-[1.08] tracking-tight text-balance">
                  {heroSlides[currentSlide].titlePart1}
                  <br />
                  <span className="text-zinc-400">{heroSlides[currentSlide].titlePart2}</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicator Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-2" aria-label="Hero carousel navigation">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800 ${
                  idx === currentSlide
                    ? "w-8 bg-zinc-900"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#demo"
              id="hero-cta-demo"
              onClick={(e) => scrollToElement("demo", e)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-all duration-200 shadow-sm group"
            >
              Book a Shop Walkthrough
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#modules"
              id="hero-cta-features"
              onClick={(e) => scrollToElement("modules", e)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zinc-700 text-sm font-semibold rounded-md border border-zinc-300 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200"
            >
              <Play size={14} className="fill-zinc-500 text-zinc-500" />
              Explore Platform Modules
            </a>
          </motion.div>

          {/* Trust markers */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <Award size={13} className="text-slate-500" />
              AISC 303 &amp; AWS D1.1 Ready
            </span>
            <span className="w-px h-3 bg-zinc-300 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <QrCode size={13} className="text-slate-500" />
              Offline Mobile Shop Traveler
            </span>
            <span className="w-px h-3 bg-zinc-300 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-slate-500" />
              Tekla &amp; SDS/2 CSV Intake
            </span>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 border border-zinc-200 rounded-xl bg-white shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200 divide-y md:divide-y-0">
            {stats.map((stat, i) => (
              <div key={i} className="px-4 sm:px-6 py-6 text-center group hover:bg-zinc-50 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-zinc-900 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 relative"
        >
          <div className="rounded-xl border border-zinc-200 bg-white shadow-xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 bg-zinc-50">
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
              <div className="flex-1 mx-4">
                <div className="w-72 mx-auto h-5 bg-zinc-200 rounded-full text-[11px] font-mono text-zinc-500 flex items-center justify-center">
                  app.fabsimple.io/dashboard/PRJ-2026-0001
                </div>
              </div>
            </div>

            {/* Dashboard UI */}
            <div className="bg-zinc-50 p-6">
              <div className="grid grid-cols-12 gap-4 min-h-[360px]">
                {/* Sidebar */}
                <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-zinc-900 rounded-lg p-3 space-y-1.5 text-left">
                  <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest px-2 py-1">
                    Novus Steel Demo
                  </div>
                  {[
                    { name: "Live Activity", active: false },
                    { name: "Projects", active: false },
                    { name: "Tekla BOM Intake", active: false },
                    { name: "Cut List & Nesting", active: false },
                    { name: "Shop Traveler", active: true },
                    { name: "QC & Weld Log", active: false },
                    { name: "Heat Traceability", active: false },
                    { name: "AIA G702 Billing", active: false },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                        item.active
                          ? "bg-zinc-800 text-white font-semibold"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-4 text-left">
                  {/* Top KPIs */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { label: "Active Project", value: "320 Tons", sub: "Dallas Skyline Tower", highlight: "PRJ-2026-0001" },
                      { label: "Piece Marks In Shop", value: "214 Pcs", sub: "148 Passed QC", highlight: "69% Complete" },
                      { label: "MTR Heat Coverage", value: "100%", sub: "A992 / A500-C / A36", highlight: "Zero Missing Heats" },
                      { label: "AIA G702 Draw #3", value: "$612,000", sub: "Contract Value $1.2M", highlight: "Approved by GC" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="bg-white rounded-lg p-3.5 border border-zinc-200">
                        <div className="text-[11px] text-zinc-400 font-medium">{kpi.label}</div>
                        <div className="text-xl font-bold text-zinc-900 mt-1 font-mono">{kpi.value}</div>
                        <div className="text-[11px] text-zinc-500 mt-1 flex justify-between">
                          <span>{kpi.sub}</span>
                          <span className="text-slate-600 font-mono font-medium">{kpi.highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Production Station Pipeline */}
                  <div className="bg-white rounded-lg border border-zinc-200 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="text-xs font-semibold text-zinc-800">Shop Floor Station Flow — Phase 2 Release</div>
                        <div className="text-[11px] text-zinc-400">Tekla Model Rev D · 48 assemblies releasing to fit-up</div>
                      </div>
                      <div className="flex gap-1.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-zinc-900 text-white text-[11px]">Dallas Tower</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 text-[11px]">320.5 Tons</span>
                      </div>
                    </div>

                    {/* Work Center Station Progress */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                      {[
                        { station: "Beam Line / CNC", count: "90 / 214 pcs", pct: 100, status: "Complete" },
                        { station: "Fit-Up & Tack", count: "68 / 214 pcs", pct: 75, status: "In Progress" },
                        { station: "AWS D1.1 Weld", count: "52 / 214 pcs", pct: 58, status: "Active" },
                        { station: "SSPC Blast/Paint", count: "48 / 214 pcs", pct: 53, status: "4.2 mils DFT" },
                        { station: "Staging / Ship", count: "20 / 214 pcs", pct: 22, status: "Load #4" },
                      ].map((st) => (
                        <div key={st.station} className="bg-zinc-50 rounded-md p-2.5 border border-zinc-100">
                          <div className="text-[11px] font-semibold text-zinc-700 truncate">{st.station}</div>
                          <div className="text-xs font-mono font-bold text-zinc-900 mt-1">{st.count}</div>
                          <div className="w-full bg-zinc-200 rounded-full h-1.5 mt-2">
                            <div className="bg-zinc-800 h-1.5 rounded-full" style={{ width: `${st.pct}%` }} />
                          </div>
                          <div className="text-[10px] text-zinc-400 mt-1.5 font-mono">{st.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Piece Marks Live Traveler Table */}
                  <div className="bg-white rounded-lg border border-zinc-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold text-zinc-800">Live Piece Mark Travelers (QR Verified)</div>
                      <span className="text-[11px] text-slate-600 font-mono">3-Tap Mobile Sync Active</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { mark: "W14x82-1044", asm: "A-204 Column", grade: "A992", heat: "HT-23845", length: "24'-6\"", station: "AWS D1.1 Weld", status: "CWI Pass" },
                        { mark: "HSS6x6-0312", asm: "B-108 Brace", grade: "A500-C", heat: "HT-23846", length: "18'-0\"", station: "SSPC Paint", status: "4.1 mils DFT" },
                        { mark: "PL 1\"x12\"-BP", asm: "BP-12 Base Plt", grade: "A36", heat: "HT-24109", length: "2'-4\"", station: "CNC Plate Table", status: "Cut Ready" },
                      ].map((item) => (
                        <div key={item.mark} className="flex flex-wrap items-center justify-between gap-2 p-2 rounded bg-zinc-50 border border-zinc-100 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-zinc-900">{item.mark}</span>
                            <span className="text-zinc-400">({item.asm})</span>
                          </div>
                          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-600">
                            <span>{item.grade}</span>
                            <span className="text-zinc-400">Heat: {item.heat}</span>
                            <span>{item.length}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-zinc-200 text-zinc-700 text-[10px] font-medium">{item.station}</span>
                            <span className="px-2 py-0.5 rounded bg-zinc-900 text-white text-[10px] font-mono">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
