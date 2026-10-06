"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  Scissors,
  Truck,
} from "lucide-react";

const modules = [
  {
    id: "bom-intake",
    icon: GitBranch,
    label: "BOM & Drawing Control",
    tagline: "Automated Tekla & SDS/2 intake with revision diffing.",
    description:
      "Import CSV model exports directly from Tekla Structures and SDS/2. FabSimple automatically parses piece marks, profiles (W-shapes, HSS, channels, plates), flags mill length overruns, and manages drawing revisions so you never cut to superseded plans.",
    features: [
      "Tekla Structures, SDS/2, and KISS CSV import",
      "Automated revision diffing (Rev A vs Rev B additions & edits)",
      "Drawing register with auto-superseding logic",
      "Mill length overrun (e.g. 60ft limit) & weight checks",
      "Assembly and sub-part mark hierarchy breakdown",
    ],
    preview: {
      title: "Tekla Model BOM Intake — Rev D",
      items: [
        { label: "W14x82 (A992)", qty: "48 pcs", weight: "24.5 ft", cost: "Validated" },
        { label: "HSS6x6x3/8", qty: "36 pcs", weight: "18.0 ft", cost: "Validated" },
        { label: "PL 1\"x12\" Base", qty: "36 pcs", weight: "2.3 ft", cost: "2D CNC Plasma" },
        { label: "Splice Plate SP-1", qty: "72 pcs", weight: "1.1 ft", cost: "Rev D Added" },
        { label: "W12x26 Mill Check", qty: "12 pcs", weight: "62.0 ft", cost: "Splice Flag" },
      ],
      total: "214 Lines Parsed · 0 Fatal Errors",
    },
  },
  {
    id: "traceability",
    icon: ShieldCheck,
    label: "Material & Heat Traceability",
    tagline: "AISC 303 compliance from receiving to erection.",
    description:
      "Lock mill heat numbers, vendor purchase orders, and Mill Test Report (MTR) documents directly to piece marks. Handle multi-heat shipment splits and remnant drops with zero gaps in your material genealogy.",
    features: [
      "Hard-locked heat number to piece mark linkage",
      "Receiving heat splits (multiple heats per PO delivery)",
      "Indexed Mill Test Report (MTR) document vault",
      "ASTM grades: A992, A500 Gr B/C, A36, A572 Gr 50",
      "1-click AISC 303 quality audit binder export",
    ],
    preview: {
      title: "Material Receiving & Heat Split #REC-409",
      items: [
        { label: "Heat #A1123456", qty: "22,000 lbs", weight: "Yard-B4", cost: "MTR Attached" },
        { label: "Heat #A1123890", qty: "12,500 lbs", weight: "Yard-B4", cost: "MTR Attached" },
        { label: "Heat #A1124017", qty: "5,500 lbs", weight: "Yard-B2", cost: "MTR Attached" },
        { label: "Drop #D-1042 (Remnant)", qty: "248 lbs", weight: "Rack-01", cost: "A992 Logged" },
        { label: "PO-4471 Steel Delivery", qty: "40,000 lbs", weight: "Nucor", cost: "PO Matched" },
      ],
      total: "100% Heats Matched · Zero Missing MTRs",
    },
  },
  {
    id: "shopfloor",
    icon: Smartphone,
    label: "Shop Floor Worker PWA",
    tagline: "Rugged 3-tap mobile routing that works offline.",
    description:
      "Equip sawyers, fitters, welders, and painters with an offline-first mobile app. Scan piece mark QR codes on shop tables to verify drawings, view weld symbols, and advance station travelers without touching paper.",
    features: [
      "Runs offline in steel bays with automatic background sync",
      "High-contrast QR barcode scanner on any tablet or phone",
      "Work centers: Beam Line/Saw, Fit-up, Weld, Paint, Staging",
      "On-device photo capture for quality exceptions and punch items",
      "No paper travelers lost or damaged on the floor",
    ],
    preview: {
      title: "Shop Floor Station Scan — Traveler B12",
      items: [
        { label: "Piece Mark B12-1", qty: "W14x82", weight: "2,009 lbs", cost: "Scanned QR" },
        { label: "Drawing DS-101", qty: "Rev D", weight: "Approved", cost: "Active Rev" },
        { label: "Fit-Up & Tack", qty: "Completed", weight: "M. Smith", cost: "Passed" },
        { label: "AWS D1.1 Welding", qty: "In Progress", weight: "R. Torres", cost: "Stencil RT04" },
        { label: "Next: CWI Inspection", qty: "Hold Point", weight: "Station 3", cost: "Queued" },
      ],
      total: "Sync Status: Connected · Live WIP Active",
    },
  },
  {
    id: "quality",
    icon: CheckCircle,
    label: "QC, Weld Log & AISC",
    tagline: "Automated NCR creation and CWI inspection hold points.",
    description:
      "Enforce rigorous quality gates before steel leaves the yard. Track AWS D1.1 structural weld logs with welder stencil stamps, SSPC paint dry film thickness (DFT) gauge readings, and trigger automatic Non-Conformance Reports on failures.",
    features: [
      "AWS D1.1 structural welding log with welder stencil tracking",
      "SSPC / NACE paint dry film thickness (DFT mils) records",
      "Automated NCR generation with disposition workflows",
      "AISC 303 quality checklist tied to project milestones",
      "Certified Welding Inspector (CWI) digital sign-off gates",
    ],
    preview: {
      title: "QC Queue & Hold Point — PRJ-2026-0001",
      items: [
        { label: "Asm A-204 (Column)", qty: "Visual Weld", weight: "AWS D1.1", cost: "CWI Pass" },
        { label: "Welder Stencil #RT-04", qty: "FCAW Grade", weight: "E71T-1M", cost: "Cert Current" },
        { label: "Primer Blast Profile", qty: "SSPC-SP10", weight: "2.5 mils", cost: "Verified" },
        { label: "Paint DFT Reading", qty: "3 Spots", weight: "Avg 4.2 mils", cost: "Spec Met" },
        { label: "Open NCRs", qty: "0 Active", weight: "Disposition", cost: "Clear to Ship" },
      ],
      total: "Quality Hold Gate: 100% Cleared for Staging",
    },
  },
  {
    id: "cut-list",
    icon: Scissors,
    label: "Cut List & Saw Optimization",
    tagline: "Linear 1D nesting that saves up to 18% in bar scrap.",
    description:
      "Optimize mill stock lengths and usable drops across all active jobs. Generate linear saw cut lists with kerf compensation, stock drop tagging, and clean separation between saw cuts and 2D CNC plasma burning plates.",
    features: [
      "1D linear bar nesting for W-shapes, tubes, and channels",
      "Usable remnant drop inventory tracking with barcode tags",
      "Plate separation routed directly to 2D CNC plasma/oxy table",
      "Kerf width and clamp grip allowance adjustments",
      "Exports saw cut lists and CNC push feed files",
    ],
    preview: {
      title: "1D Linear Nesting Run — Saw Line 1",
      items: [
        { label: "Stock: 60'-0\" W12x26", qty: "Bar #1", weight: "1,560 lbs", cost: "Heat A1120099" },
        { label: "Piece B12 (24'-6\")", qty: "Cut #1", weight: "637 lbs", cost: "Dallas Tower" },
        { label: "Piece B14 (22'-0\")", qty: "Cut #2", weight: "572 lbs", cost: "Dallas Tower" },
        { label: "Piece K02 (8'-4\")", qty: "Cut #3", weight: "216 lbs", cost: "Refinery Job" },
        { label: "Drop: 4'-8\" Remnant", qty: "Drop Saved", weight: "121 lbs", cost: "Rack-D1" },
      ],
      total: "Nest Yield: 97.4% · Scrap: 0.8% (Kerf 5/8\")",
    },
  },
  {
    id: "billing-erection",
    icon: Truck,
    label: "Erection & AIA G702 Billing",
    tagline: "Trailer load staging and automated progress draws.",
    description:
      "Stage outbound piece marks by crane erection sequence and legal trailer weight limits. When steel reaches the jobsite, confirm bolt-up and generate AIA G702 / G703 progress billing backed by real erected tonnage.",
    features: [
      "Shipping tickets with automated trailer axle weight checks",
      "Erection sequence & crane pick prioritization",
      "Automated AIA G702 / G703 schedule of values draw requests",
      "Retainage calculations, change orders, and stored materials",
      "Live General Contractor portal for submittals and deliveries",
    ],
    preview: {
      title: "AIA G702 Application for Payment #03",
      items: [
        { label: "Original Contract Sum", qty: "Lump Sum", weight: "320 Tons", cost: "$612,000" },
        { label: "Approved Change Orders", qty: "CO #1 & #2", weight: "14.5 Tons", cost: "$42,800" },
        { label: "Total Completed to Date", qty: "64.2%", weight: "214.8 Tons", cost: "$420,380" },
        { label: "Less Retainage (10%)", qty: "Retention", weight: "Standard", cost: "-$42,038" },
        { label: "Trailer Load #4 Staged", qty: "20 Pieces", weight: "41,200 lbs", cost: "Ready to Roll" },
      ],
      total: "Current Payment Due: $148,460",
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
            Six purpose-built modules that cover the complete structural steel lifecycle — from Tekla BOM import to field erection and AIA G702 draws.
          </p>
        </motion.div>

        {/* Module tabs + content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tab list */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
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
          <div className="lg:col-span-8">
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
                    <span className="ml-2 text-xs text-zinc-400 font-mono truncate">{mod.preview.title}</span>
                  </div>
                  <div className="flex-1 p-5 flex flex-col gap-3">
                    {/* Table header */}
                    <div className="grid grid-cols-4 gap-2 px-2">
                      {["Item / Line", "Spec", "Param", "Status"].map((h) => (
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
                      <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Summary</span>
                      <span className="text-xs font-bold text-white font-mono">{mod.preview.total}</span>
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
