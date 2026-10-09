"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Play, Award, QrCode, CheckCircle2 } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const heroBackgrounds = [
  {
    id: "bay",
    name: "Steel Bay",
    src: "/images/hero/steel-bay.jpg",
    description: "Modern industrial fabrication shop floor bay",
  },
  {
    id: "welding",
    name: "Welding Sparks",
    src: "/images/hero/welding-sparks.jpg",
    description: "Industrial AWS D1.1 welding sparks and dark steel atmosphere",
  },
  {
    id: "framework",
    name: "Framework",
    src: "/images/hero/structural-framework.jpg",
    description: "Geometric structural steel framework construction beams",
  },
  {
    id: "coils",
    name: "Mill Stock",
    src: "/images/hero/steel-coils.jpg",
    description: "Heavy industrial steel coils and mill material storage",
  },
];

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
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-rotate text slides every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-rotate backdrops every 5 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  const activeBg = heroBackgrounds[currentBgIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#070A0F]">
      {/* Background Image with Smooth Cross-Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.88, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={activeBg.src}
            alt={activeBg.description}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-100 contrast-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Balanced Vignette & Overlay (enhances backdrop vibrancy while preserving crisp text readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A0F]/65 via-[#070A0F]/45 to-[#070A0F]/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F]/75 via-transparent to-[#070A0F]/75 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-950/80 text-xs font-medium text-zinc-200 uppercase tracking-widest shadow-md backdrop-blur-md mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight text-balance drop-shadow-md">
                  {heroSlides[currentSlide].titlePart1}
                  <br />
                  <span className="text-zinc-300 drop-shadow-md">{heroSlides[currentSlide].titlePart2}</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
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
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${idx === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zinc-950 text-sm font-semibold rounded-md hover:bg-zinc-200 transition-all duration-200 shadow-lg group"
            >
              Book a Shop Walkthrough
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#modules"
              id="hero-cta-features"
              onClick={(e) => scrollToElement("modules", e)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900/90 text-zinc-200 text-sm font-semibold rounded-md border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-200 backdrop-blur-sm"
            >
              <Play size={14} className="fill-zinc-400 text-zinc-400" />
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
              <Award size={13} className="text-emerald-400" />
              AISC 303 &amp; AWS D1.1 Ready
            </span>
            <span className="w-px h-3 bg-zinc-800 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <QrCode size={13} className="text-emerald-400" />
              Offline Mobile Shop Traveler
            </span>
            <span className="w-px h-3 bg-zinc-800 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              Tekla &amp; SDS/2 CSV Intake
            </span>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 border border-zinc-800/80 rounded-xl bg-zinc-900/80 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800 divide-y md:divide-y-0">
            {stats.map((stat, i) => (
              <div key={i} className="px-4 sm:px-6 py-6 text-center group hover:bg-zinc-800/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real FabSimple Dashboard Preview (Replacing simulated mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 relative"
        >
          {/* Subtle glow behind preview */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-emerald-500/20 to-indigo-600/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

          <div className="relative rounded-2xl border border-zinc-800 bg-[#0B1120] shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Window chrome header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/90">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto h-6 bg-zinc-900 rounded-md text-[11px] font-mono text-zinc-400 flex items-center justify-center border border-zinc-800/80 gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  app.fabsimpleus.com/dashboard — Live MES Command Center
                </div>
              </div>
            </div>

            {/* Actual Dashboard Screenshot */}
            <div className="relative w-full overflow-hidden bg-[#0F172A]">
              <Image
                src="/images/dashboard-preview.png"
                alt="FabSimple MES Operating System — Owner & CEO Executive Control Center Dashboard"
                width={1024}
                height={541}
                className="w-full h-auto block select-none"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
