"use client";

import { motion } from "framer-motion";
import { UploadCloud, Scissors, QrCode, FileSpreadsheet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UploadCloud,
    title: "Tekla & SDS/2 Intake",
    description:
      "Upload your detailer CSV model export and drawing packages. FabSimple parses piece marks, validates mill lengths, checks weight variances, and auto-supersedes old revisions.",
    detail: "Native Tekla Structures, SDS/2 & KISS BOM support",
  },
  {
    number: "02",
    icon: Scissors,
    title: "Nesting & Heat Sourcing",
    description:
      "Run 1D linear cut nesting to maximize yield from mill stock and remnant drops. Generate POs and log discrete inbound deliveries with multi-heat splits and attached MTRs.",
    detail: "Cuts scrap by up to 18% with drop recovery",
  },
  {
    number: "03",
    icon: QrCode,
    title: "Shop Floor & Quality Gates",
    description:
      "Workers scan piece mark QR codes on tablets at Beam Line, Fit-up, AWS D1.1 Welding, and Paint Booth. CWI inspectors sign off hold points and auto-generate NCRs if defects occur.",
    detail: "Works 100% offline in steel bays with instant sync",
  },
  {
    number: "04",
    icon: FileSpreadsheet,
    title: "Staging, Erection & AIA Billing",
    description:
      "Sequence loads by crane pick priorities, print trailer manifests, and generate AIA G702 / G703 progress payment applications tied directly to validated erected tonnage.",
    detail: "1-click export of complete AISC MTR audit packets",
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
            From detailer model to jobsite erection,
            <span className="text-zinc-400"> one connected flow.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            FabSimple mirrors the actual workflow of a structural steel shop — eliminating spreadsheets, paperwork, and disconnected communication.
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
          <h3 className="text-2xl font-bold text-zinc-900">Ready to see it run with your shop&apos;s data?</h3>
          <p className="mt-2 text-zinc-500">
            Send us a sample Tekla BOM or drawing package and we&apos;ll show you your exact parts live on FabSimple.
          </p>
          <a
            href="#demo"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-colors"
          >
            Schedule a Custom Shop Walkthrough
          </a>
        </motion.div>
      </div>
    </section>
  );
}
