"use client";

import { motion, type Variants } from "framer-motion";
import { GitCompare, ShieldAlert, Smartphone, DollarSign, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: GitCompare,
    problem: "Detailer Revision Whiplash",
    description:
      "When the engineer issues Rev D while Rev B is already on the beam line, manual drawing comparisons fail. Fabricating to superseded drawings causes tons of scrap steel and painful back charges.",
    solution:
      "Automated Tekla & SDS/2 CSV intake with instant revision diffing. Automatically supersedes older drawings, locks changed piece marks, and halts bad cuts before they happen.",
  },
  {
    icon: ShieldAlert,
    problem: "Lost Heats & AISC Audit Panic",
    description:
      "Loose Mill Test Reports (MTRs), unrecorded heat numbers on drops, and frantic binder preparation before an AISC or AWS audit put your shop certification and project retainage at risk.",
    solution:
      "Full material genealogy from PO receiving to erection. Heat splits, ASTM grades (A992, A500, A36), and MTR PDFs hard-locked to piece marks — exportable audit binders in under 60 seconds.",
  },
  {
    icon: Smartphone,
    problem: "Paper Travelers & Shop Floor Blindspots",
    description:
      "Foremen spend half their shift walking the bay looking for piece marks, while PMs constantly call to ask if assembly A-204 is welded or through the paint booth.",
    solution:
      "Offline-first mobile PWA for shop workers. 3-tap QR barcode updates at Beam Line/CNC, Fit-up, AWS D1.1 Welding, and Paint Inspection — live WIP visible across the company.",
  },
  {
    icon: DollarSign,
    problem: "Margin Slippage & Delayed AIA G702 Draws",
    description:
      "Manual weight takeoffs delay monthly GC payment applications. Uncaptured change orders and unmonitored shop labor hours erode your margins before anyone notices.",
    solution:
      "Continuous job costing by work center. Compare estimated vs. actual man-hours and generate AIA G702 / G703 schedule of values draw requests backed by real shop progress.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const } },
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
            Generic ERP wasn&apos;t built
            <span className="text-zinc-400"> for the steel shop floor.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            Standard manufacturing software doesn&apos;t understand piece marks, heat numbers, or Tekla revisions.
            FabSimple is engineered specifically for structural and miscellaneous steel fabrication.
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
