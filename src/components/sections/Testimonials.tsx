"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  FileSpreadsheet,
  ListChecks,
  Thermometer,
  Scissors,
  QrCode,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: "gc-portal",
    number: "01",
    icon: MonitorSmartphone,
    title: "GC Project Portal",
    tagline: "Live visibility — no phone calls.",
    body: "Your General Contractor can see live fabrication status — pieces cut, welded, inspected, shipped — without calling your office. Every QR scan on the shop floor instantly updates the GC's view.",
    cta: "Stop losing bids because the other shop gives better visibility.",
    accent: "from-sky-500 to-indigo-600",
    accentLight: "from-sky-500/10 to-indigo-600/10",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    pillColor: "bg-sky-100 text-sky-700",
  },
  {
    id: "bom-import",
    number: "02",
    icon: FileSpreadsheet,
    title: "BOM Import",
    tagline: "Tekla · SDS/2 · KISS · CSV",
    body: "Drag-and-drop your detailer's export file — KISS, EJE, CSV, or XLSX — and FabSimple parses every member, plate, and bolt automatically.",
    cta: "Versioned revisions with diff comparison so you see exactly what changed between Rev 2 and Rev 3.",
    accent: "from-violet-500 to-purple-600",
    accentLight: "from-violet-500/10 to-purple-600/10",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    pillColor: "bg-violet-100 text-violet-700",
  },
  {
    id: "parts-tracking",
    number: "03",
    icon: ListChecks,
    title: "Parts List & Tracking",
    tagline: "12-stage pipeline, zero guesswork.",
    body: "Every piece mark in your job — from planned to erected — tracked with a 12-stage status pipeline. Bulk status updates, QR code generation, and real-time piece counts.",
    cta: "Know exactly how many of your 500 pieces are cut, welded, painted, and shipped at any moment.",
    accent: "from-emerald-500 to-teal-600",
    accentLight: "from-emerald-500/10 to-teal-600/10",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    pillColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "heat-tracking",
    number: "04",
    icon: Thermometer,
    title: "Heat Number Tracking",
    tagline: "Dock to erected — full chain of custody.",
    body: "First-class heat number management from receiving dock to erected piece. Every heat is a separate record that never gets merged or collapsed.",
    cta: "When the AISC auditor asks, you pull up the full chain of custody in five seconds.",
    accent: "from-orange-500 to-red-600",
    accentLight: "from-orange-500/10 to-red-600/10",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    pillColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "cut-optimizer",
    number: "05",
    icon: Scissors,
    title: "Cut List Optimizer",
    tagline: "Minimize drop. Save material.",
    body: "Given your available stock lengths and the pieces you need to cut, FabSimple calculates optimal nesting to minimize drop and waste.",
    cta: "Save 3–5% on material costs by cutting smarter instead of letting the saw operator eyeball it.",
    accent: "from-yellow-500 to-amber-600",
    accentLight: "from-yellow-500/10 to-amber-600/10",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    pillColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "qr-codes",
    number: "06",
    icon: QrCode,
    title: "QR Code Generation",
    tagline: "Print. Scan. Done.",
    body: "Generate and print QR code tags for every piece mark in your job. Workers scan the code with their phone and instantly see the piece status, assembly, heat number, and next station.",
    cta: "No typing, no looking things up — scan and go.",
    accent: "from-zinc-600 to-zinc-900",
    accentLight: "from-zinc-600/10 to-zinc-900/10",
    iconBg: "bg-zinc-100",
    iconColor: "text-zinc-700",
    pillColor: "bg-zinc-100 text-zinc-700",
  },
  {
    id: "mobile-pwa",
    number: "07",
    icon: Smartphone,
    title: "Worker Mobile View",
    tagline: "Shop Floor PWA — offline-ready.",
    body: "A phone-sized, glove-friendly interface designed for saw operators, fitters, welders, and painters. Scan a QR code, tap a giant button to update status, move to the next piece.",
    cta: "Works offline. Installs to the home screen. No app store, no training manual.",
    accent: "from-pink-500 to-rose-600",
    accentLight: "from-pink-500/10 to-rose-600/10",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    pillColor: "bg-pink-100 text-pink-700",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    const idx = (current - 1 + features.length) % features.length;
    setDirection(-1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    const idx = (current + 1) % features.length;
    setDirection(1);
    setCurrent(idx);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % features.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, current]);

  const f = features[current];
  const Icon = f.icon;

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-white border-t border-zinc-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="badge mb-4 mx-auto">How FabSimple Works</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Every manual process,{" "}
            <span className="text-zinc-400">solved.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            From detailer export to GC billing — here&apos;s exactly what
            FabSimple replaces in your shop.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={f.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="grid grid-cols-1 md:grid-cols-[280px_1fr]"
              >
                {/* Left accent panel */}
                <div
                  className={`relative flex flex-col justify-between p-8 bg-gradient-to-br ${f.accentLight} border-b md:border-b-0 md:border-r border-zinc-200`}
                >
                  {/* Number watermark */}
                  <span className="absolute top-5 right-6 text-7xl font-black text-zinc-900/5 select-none leading-none">
                    {f.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center shadow-sm`}
                  >
                    <Icon size={26} className={f.iconColor} />
                  </div>

                  {/* Title block */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-zinc-900 leading-tight">
                      {f.title}
                    </h3>
                    <span
                      className={`inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full ${f.pillColor}`}
                    >
                      {f.tagline}
                    </span>
                  </div>

                  {/* Gradient accent bar at bottom */}
                  <div
                    className={`mt-8 h-1 rounded-full bg-gradient-to-r ${f.accent}`}
                  />
                </div>

                {/* Right content panel */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    {f.body}
                  </p>

                  {/* CTA callout */}
                  <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div
                      className={`mt-0.5 w-2 h-2 rounded-full bg-gradient-to-br ${f.accent} flex-shrink-0`}
                    />
                    <p className="text-sm font-medium text-zinc-700 leading-relaxed">
                      {f.cta}
                    </p>
                  </div>

                  {/* Navigation row */}
                  <div className="mt-8 flex items-center justify-between">
                    {/* Dot indicators */}
                    <div className="flex items-center gap-1.5">
                      {features.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => go(i)}
                          aria-label={`Go to feature ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === current
                              ? `w-6 bg-gradient-to-r ${f.accent}`
                              : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Counter + arrows */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-400 tabular-nums">
                        {String(current + 1).padStart(2, "0")} /{" "}
                        {String(features.length).padStart(2, "0")}
                      </span>
                      <div className="flex gap-1.5">
                        <button
                          onClick={prev}
                          aria-label="Previous"
                          className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
                        >
                          <ChevronLeft size={15} className="text-zinc-500" />
                        </button>
                        <button
                          onClick={next}
                          aria-label="Next"
                          className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
                        >
                          <ChevronRight size={15} className="text-zinc-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-5 grid grid-cols-7 gap-2">
            {features.map((feat, i) => {
              const ThumbIcon = feat.icon;
              const isActive = i === current;
              return (
                <button
                  key={feat.id}
                  onClick={() => go(i)}
                  aria-label={feat.title}
                  className={`group relative flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition-all duration-250 ${
                    isActive
                      ? `border-transparent bg-gradient-to-br ${feat.accentLight} shadow-sm`
                      : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {/* Active top bar */}
                  {isActive && (
                    <motion.div
                      layoutId="thumb-bar"
                      className={`absolute top-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r ${feat.accent}`}
                    />
                  )}
                  <ThumbIcon
                    size={18}
                    className={`transition-colors ${
                      isActive ? feat.iconColor : "text-zinc-400"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-semibold text-center leading-tight transition-colors hidden sm:block ${
                      isActive ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    {feat.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
