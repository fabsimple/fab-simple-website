"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Settings, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Import & Estimate",
    description:
      "Connect your CAD model or import a bill of materials. FabSimple builds a detailed estimate with real material costs and labor rates — ready to send in minutes.",
    detail: "Supports Tekla Structures, SDS/2, and Excel BOM imports",
  },
  {
    number: "02",
    icon: Settings,
    title: "Plan & Purchase",
    description:
      "Win the job, convert to a live project. Auto-generate material requisitions, compare vendor quotes, and issue POs with one approval workflow.",
    detail: "Typical PO cycle reduced from 3 days to same-day",
  },
  {
    number: "03",
    icon: Zap,
    title: "Fabricate & Track",
    description:
      "Sequence the shop floor, assign work to crews, and watch real-time progress update as workers scan piece marks on the floor. No paperwork.",
    detail: "Live WIP visible to everyone — PM, foreman, and client",
  },
  {
    number: "04",
    icon: Truck,
    title: "Ship & Invoice",
    description:
      "Generate shipping lists, packing slips, and Mill Cert packages automatically. Close out the job and export final cost reports for accounting.",
    detail: "Integrates with QuickBooks, Sage 100, and COINS",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="badge mb-4 mx-auto">How It Works</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            From quote to delivery,
            <span className="text-zinc-400"> one platform.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            FabSimple follows your natural workflow — it doesn&apos;t force you to change how you work, it makes what you already do dramatically faster.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 left-0 right-0 h-px bg-zinc-200 hidden lg:block" style={{ zIndex: 0 }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="group flex flex-col"
                >
                  {/* Step icon circle */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-zinc-900 flex flex-col items-center justify-center mx-auto border-4 border-white shadow-md group-hover:bg-zinc-700 transition-colors duration-300">
                      <StepIcon size={24} className="text-zinc-300" />
                      <span className="text-zinc-500 text-xs font-mono mt-1">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-zinc-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                      <div className="w-1 h-1 rounded-full bg-slate-400" />
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-16 bg-zinc-50 border border-zinc-200 rounded-xl px-8 py-10 text-center"
        >
          <h3 className="text-2xl font-bold text-zinc-900">Ready to see it in action?</h3>
          <p className="mt-2 text-zinc-500">
            Join 500+ fabricators who have modernized their operations with FabSimple.
          </p>
          <a
            href="#demo"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-colors"
          >
            Schedule a Live Walkthrough
          </a>
        </motion.div>
      </div>
    </section>
  );
}
