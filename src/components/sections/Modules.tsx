"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  DollarSign,
  Package,
  Factory,
  ShoppingCart,
  Smartphone,
  BarChart3,
  GitBranch,
} from "lucide-react";

const modules = [
  {
    id: "estimating",
    icon: Calculator,
    label: "Estimating",
    tagline: "Win more bids without sacrificing margins.",
    description:
      "Build precise takeoffs from 3D models or 2D drawings, apply real-time material pricing, and generate professional quotes in minutes — not days.",
    features: [
      "Model-based takeoff from Tekla Structures & SDS/2",
      "Real-time material price integration",
      "Labor rate templates by work center",
      "Revision tracking & bid history",
      "Quote-to-job conversion in one click",
    ],
    preview: {
      title: "Estimate #EST-2841",
      items: [
        { label: "W-Shapes (A992)", qty: "142 pcs", weight: "48,220 lbs", cost: "$72,330" },
        { label: "HSS Columns", qty: "38 pcs", weight: "9,118 lbs", cost: "$16,890" },
        { label: "Base Plates", qty: "38 pcs", weight: "2,204 lbs", cost: "$5,510" },
        { label: "Bolts & Hardware", qty: "—", weight: "—", cost: "$4,200" },
        { label: "Fabrication Labor", qty: "—", weight: "—", cost: "$38,600" },
      ],
      total: "$137,530",
    },
  },
  {
    id: "jobcosting",
    icon: DollarSign,
    label: "Job Costing",
    tagline: "Know exactly where every dollar goes.",
    description:
      "Track estimated vs. actual costs at the job, phase, or operation level. Catch margin bleed early — not after the job ships.",
    features: [
      "Estimated vs. actual variance dashboard",
      "Per-operation labor cost tracking",
      "Material usage vs. purchased reconciliation",
      "Overhead allocation rules",
      "Profitability forecasting",
    ],
    preview: {
      title: "Job Cost Summary — JB-4821",
      items: [
        { label: "Material (Est)", qty: "—", weight: "—", cost: "$98,730" },
        { label: "Material (Act)", qty: "—", weight: "—", cost: "$94,210" },
        { label: "Labor (Est)", qty: "—", weight: "—", cost: "$38,600" },
        { label: "Labor (Act)", qty: "—", weight: "—", cost: "$41,850" },
        { label: "Overhead", qty: "—", weight: "—", cost: "$12,400" },
      ],
      total: "$148,460 / $149,330 est.",
    },
  },
  {
    id: "production",
    icon: Factory,
    label: "Production Control",
    tagline: "Orchestrate the shop floor with precision.",
    description:
      "Sequence fabrication work by work center, assign tasks to crews, and track real-time progress against your production schedule.",
    features: [
      "Visual Gantt production schedule",
      "Work center capacity planning",
      "Operation routing templates",
      "Piece mark status tracking",
      "Drawing & revision management",
    ],
    preview: {
      title: "Production Schedule — Week 38",
      items: [
        { label: "Cutting", qty: "Complete", weight: "48,220 lbs", cost: "100%" },
        { label: "Fitting & Assembly", qty: "In Progress", weight: "32,100 lbs", cost: "67%" },
        { label: "Welding", qty: "In Progress", weight: "18,440 lbs", cost: "38%" },
        { label: "Painting", qty: "Queued", weight: "0 lbs", cost: "0%" },
        { label: "Shipping", qty: "Queued", weight: "—", cost: "0%" },
      ],
      total: "Overall: 61% Complete",
    },
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory & Material",
    tagline: "Zero stock-outs. Full traceability.",
    description:
      "Manage heat numbers, remnant tracking, and material reservations across multiple storage locations with AISC-compliant traceability.",
    features: [
      "Heat number & MTR tracking",
      "Remnant (drop) inventory management",
      "Material reservations by job",
      "Multi-location warehouse support",
      "Cycle count & physical inventory",
    ],
    preview: {
      title: "Material Inventory Snapshot",
      items: [
        { label: "W8x31 (A992)", qty: "24 pcs", weight: "6,024 lbs", cost: "Heat: 4A8221" },
        { label: "W12x53 (A992)", qty: "18 pcs", weight: "9,504 lbs", cost: "Heat: 4B1102" },
        { label: "HSS 6x6x1/2", qty: "36 pcs", weight: "7,956 lbs", cost: "Heat: 5C0381" },
        { label: "PL 1\" x 12\"", qty: "Remnant", weight: "248 lbs", cost: "Drop #1042" },
        { label: "A325 Bolts 3/4\"", qty: "4,800", weight: "—", cost: "In Stock" },
      ],
      total: "Total Inventory: $284,420",
    },
  },
  {
    id: "purchasing",
    icon: ShoppingCart,
    label: "Purchasing",
    tagline: "Buy smarter, receive faster.",
    description:
      "Generate material requisitions automatically from job requirements, manage vendor quotes, and streamline PO approval workflows.",
    features: [
      "Auto-requisition from job BOM",
      "Vendor quote comparison",
      "PO approval workflows",
      "Receiving & inspection logging",
      "Vendor performance tracking",
    ],
    preview: {
      title: "Purchase Orders — Open",
      items: [
        { label: "Nucor Skyline — Steel", qty: "PO-8821", weight: "68,000 lbs", cost: "$108,000" },
        { label: "Harris Supply — Bolts", qty: "PO-8822", weight: "—", cost: "$6,400" },
        { label: "Sherwin-Williams — Paint", qty: "PO-8823", weight: "—", cost: "$4,200" },
        { label: "Ridge Tool — Hardware", qty: "PO-8824", weight: "—", cost: "$2,100" },
        { label: "State Steel — Plate", qty: "PO-8825", weight: "12,000 lbs", cost: "$18,600" },
      ],
      total: "Total Open: $139,300",
    },
  },
  {
    id: "shopfloor",
    icon: Smartphone,
    label: "Shop Floor Mobile",
    tagline: "Real-time updates from the shop floor.",
    description:
      "Give your welders, fitters, and QC inspectors a tablet-friendly interface to clock operations, scan piece marks, and log QC results — all offline-capable.",
    features: [
      "Tablet & mobile optimized UI",
      "Barcode / QR piece mark scanning",
      "Operation time clock",
      "QC inspection checklists",
      "Offline sync capability",
    ],
    preview: {
      title: "Shop Floor — Live Status",
      items: [
        { label: "Bay 1 — Fitting", qty: "3 ops active", weight: "Crew: J. Morris", cost: "On time" },
        { label: "Bay 2 — Welding", qty: "5 ops active", weight: "Crew: T. Reeves", cost: "On time" },
        { label: "Bay 3 — Paint Booth", qty: "2 ops active", weight: "Crew: D. Lopez", cost: "Behind 2hr" },
        { label: "CNC Plate Table", qty: "1 op active", weight: "Operator: R. Kim", cost: "On time" },
        { label: "Overhead Crane", qty: "Available", weight: "—", cost: "—" },
      ],
      total: "4 of 5 Work Centers On Schedule",
    },
  },
];

export default function Modules() {
  const [active, setActive] = useState(0);
  const mod = modules[active];
  const Icon = mod.icon;

  return (
    <section id="modules" className="section-padding bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <div className="badge mb-4">Core Modules</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Every tool your shop needs,
            <span className="text-zinc-400"> fully connected.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            Six integrated modules that cover the complete fabrication lifecycle — from first quote to final delivery.
          </p>
        </motion.div>

        {/* Module tabs + content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tab list */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {modules.map((m, i) => {
              const MIcon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    active === i
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <MIcon size={16} className={active === i ? "text-zinc-300" : "text-slate-500"} />
                  <span className="text-sm font-medium whitespace-nowrap">{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Description */}
                <div className="bg-white border border-zinc-200 rounded-xl p-8 flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-zinc-100 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-slate-600" />
                  </div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                    {mod.label}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{mod.tagline}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{mod.description}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {mod.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <div className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preview panel */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                    <span className="ml-2 text-xs text-zinc-500 font-mono">{mod.preview.title}</span>
                  </div>
                  <div className="flex-1 p-5 flex flex-col gap-3">
                    {/* Table header */}
                    <div className="grid grid-cols-4 gap-2 px-2">
                      {["Item", "Qty", "Weight", "Value"].map((h) => (
                        <div key={h} className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          {h}
                        </div>
                      ))}
                    </div>
                    {/* Rows */}
                    {mod.preview.items.map((row, i) => (
                      <div key={i} className="grid grid-cols-4 gap-2 bg-zinc-800/60 rounded-md px-2 py-2.5">
                        <div className="text-xs text-zinc-300 font-medium truncate">{row.label}</div>
                        <div className="text-xs text-zinc-400 font-mono">{row.qty}</div>
                        <div className="text-xs text-zinc-400 font-mono">{row.weight}</div>
                        <div className="text-xs text-zinc-300 font-mono font-medium">{row.cost}</div>
                      </div>
                    ))}
                    {/* Total */}
                    <div className="mt-auto pt-3 border-t border-zinc-800 flex justify-between items-center">
                      <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Total</span>
                      <span className="text-sm font-bold text-white font-mono">{mod.preview.total}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
