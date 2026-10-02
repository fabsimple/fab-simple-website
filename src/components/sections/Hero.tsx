"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Play, Shield, Zap, TrendingUp } from "lucide-react";

const stats = [
  { value: "500+", label: "Fabricators" },
  { value: "2.4M+", label: "Tons Tracked" },
  { value: "37%", label: "Avg. Efficiency Gain" },
  { value: "99.9%", label: "Uptime SLA" },
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
            Built for Structural Steel Fabricators
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.08] tracking-tight text-balance"
          >
            Run Your Fab Shop
            <br />
            <span className="text-zinc-400">Without the Chaos.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
          >
            FabSimple connects your estimating, purchasing, production, and shop floor
            into one intelligent system — so your team spends less time chasing
            information and more time fabricating steel.
          </motion.p>

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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-all duration-200 shadow-sm group"
            >
              Book a Free Demo
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              id="hero-cta-features"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-zinc-700 text-sm font-semibold rounded-md border border-zinc-300 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200"
            >
              <Play size={14} className="fill-zinc-500 text-zinc-500" />
              See How It Works
            </a>
          </motion.div>

          {/* Trust markers */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <Shield size={12} className="text-zinc-400" />
              No credit card required
            </span>
            <span className="w-px h-3 bg-zinc-300" />
            <span className="flex items-center gap-1.5">
              <Zap size={12} className="text-zinc-400" />
              14-day free trial
            </span>
            <span className="w-px h-3 bg-zinc-300" />
            <span className="flex items-center gap-1.5">
              <TrendingUp size={12} className="text-zinc-400" />
              SOC 2 compliant
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
              <div key={i} className="px-8 py-6 text-center group hover:bg-zinc-50 transition-colors">
                <div className="text-3xl font-bold text-zinc-900 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1 font-medium">{stat.label}</div>
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
                <div className="w-48 mx-auto h-5 bg-zinc-200 rounded-full text-xs text-zinc-400 flex items-center justify-center">
                  app.fabsimple.io/dashboard
                </div>
              </div>
            </div>

            {/* Fake dashboard UI */}
            <div className="bg-zinc-50 p-6">
              <div className="grid grid-cols-12 gap-4 min-h-[340px]">
                {/* Sidebar */}
                <div className="col-span-2 bg-zinc-900 rounded-lg p-3 space-y-2">
                  {["Dashboard", "Jobs", "Estimating", "Purchasing", "Production", "Inventory", "Reports"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`px-2 py-1.5 rounded text-xs font-medium ${
                          i === 0 ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                {/* Main content */}
                <div className="col-span-10 space-y-4">
                  {/* Top KPIs */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Active Jobs", value: "47", change: "+3" },
                      { label: "WIP Value", value: "$2.4M", change: "+12%" },
                      { label: "On-Time Rate", value: "94.2%", change: "+2.1%" },
                      { label: "Open POs", value: "128", change: "-8" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="bg-white rounded-lg p-3 border border-zinc-200">
                        <div className="text-xs text-zinc-400 font-medium">{kpi.label}</div>
                        <div className="text-lg font-bold text-zinc-900 mt-0.5 font-mono">{kpi.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{kpi.change} this week</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-white rounded-lg border border-zinc-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold text-zinc-700">Production Output — Last 12 Weeks</div>
                      <div className="flex gap-2">
                        {["Week", "Month", "Quarter"].map((t) => (
                          <span
                            key={t}
                            className={`text-xs px-2 py-0.5 rounded ${
                              t === "Week"
                                ? "bg-zinc-900 text-white"
                                : "text-zinc-400"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Bar chart */}
                    <div className="flex items-end gap-1.5 h-24">
                      {[40, 65, 55, 80, 72, 90, 68, 85, 78, 92, 88, 95].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className={`rounded-t ${i === 11 ? "bg-slate-600" : "bg-zinc-200"}`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job list */}
                  <div className="bg-white rounded-lg border border-zinc-200 p-4">
                    <div className="text-xs font-semibold text-zinc-700 mb-2">Recent Jobs</div>
                    <div className="space-y-2">
                      {[
                        { id: "JB-4821", name: "Riverside Bridge — Phase 2", status: "In Production", pct: 68 },
                        { id: "JB-4820", name: "Westfield Tower — Structural", status: "Estimating", pct: 20 },
                        { id: "JB-4819", name: "Harbor Terminal Expansion", status: "Purchasing", pct: 45 },
                      ].map((job) => (
                        <div key={job.id} className="flex items-center gap-4">
                          <div className="text-xs font-mono text-zinc-400 w-14">{job.id}</div>
                          <div className="flex-1 text-xs text-zinc-700 truncate">{job.name}</div>
                          <div className="text-xs text-zinc-400 w-20 text-right">{job.status}</div>
                          <div className="w-16 bg-zinc-100 rounded-full h-1.5">
                            <div className="bg-zinc-600 h-1.5 rounded-full" style={{ width: `${job.pct}%` }} />
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
