"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, AlertTriangle, Clock, TrendingDown, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    problem: "Spreadsheets & Siloed Data",
    description:
      "Your estimator works in Excel, the shop floor uses paper travelers, and the PM can't see live job status. Nobody has the same numbers.",
    solution: "One connected system — estimates, POs, production sequences, and billing all in sync.",
  },
  {
    icon: AlertTriangle,
    problem: "Material Traceability Gaps",
    description:
      "Lost heat numbers, unknown remnant inventory, and last-minute material shortages delay jobs and put quality certifications at risk.",
    solution: "Full material lineage from purchase order to finished part — heat numbers, grades, and drop tracking built in.",
  },
  {
    icon: Clock,
    problem: "Missed Deadlines & Cost Overruns",
    description:
      "Without real-time shop floor data, you discover a job is behind schedule only after a deadline is already missed.",
    solution: "Live WIP tracking and automated scheduling alerts keep every stakeholder ahead of the problem.",
  },
  {
    icon: TrendingDown,
    problem: "Margin Erosion on Every Job",
    description:
      "Generic ERPs don't understand fabrication routing, so your true labor and material costs stay hidden until the job is over.",
    solution: "Per-operation job costing with estimated vs. actual variance reporting — catch margin bleed before it hurts.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function PainPoints() {
  return (
    <section id="features" className="section-padding bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <div className="badge mb-4">Why FabSimple</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Generic ERP wasn't built
            <span className="text-zinc-400"> for the shop floor.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            FabSimple is engineered from the ground up for structural steel fabricators — not
            adapted from a generic manufacturing template.
          </p>
        </motion.div>

        {/* Pain / Solution grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {pains.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative bg-zinc-50 border border-zinc-200 rounded-xl p-8 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300"
              >
                {/* Problem */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-zinc-300 transition-colors">
                    <Icon size={18} className="text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">{item.problem}</h3>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-zinc-200" />
                  <ArrowRight size={14} className="text-zinc-400" />
                  <div className="flex-1 h-px bg-zinc-200" />
                </div>

                {/* Solution */}
                <div className="bg-zinc-900 rounded-lg px-5 py-4">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    <span className="text-white font-semibold">FabSimple: </span>
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
