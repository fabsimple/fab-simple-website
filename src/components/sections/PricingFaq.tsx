"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const plans = [
  {
    name: "Fabricator Starter",
    price: "990",
    period: "/month",
    description: "For regional shops modernizing off spreadsheets and paper travelers.",
    seats: "Up to 15 users · 5 active projects",
    highlight: false,
    features: [
      "Tekla Structures & SDS/2 CSV BOM intake",
      "Piece mark & drawing register with revision control",
      "Linear saw cut list & 1D nesting exports",
      "Daily station logs by work center & shift",
      "Purchase order receiving & inventory tracking",
      "QuickBooks Online accounting sync",
      "Email & phone support during shop hours",
    ],
  },
  {
    name: "Fabricator Professional",
    price: "2,490",
    period: "/month",
    description: "The complete operations system for commercial & industrial steel shops.",
    seats: "Up to 50 users · Unlimited active projects",
    highlight: true,
    features: [
      "Everything in Starter",
      "Offline Mobile Shop Traveler PWA (QR scanning)",
      "Hard-locked Heat Number & Mill Test Report (MTR) vault",
      "AISC 303 & AWS D1.1 QC Queue with auto-NCR creation",
      "SSPC Paint dry film thickness (DFT mils) inspection logs",
      "AIA G702 / G703 progress billing & retainage",
      "Trailer load staging & crane pick sequencing",
      "Real-time Job Cost tracker with man-hour variance",
      "AI Copilot grounded in shop KPIs & open NCRs",
      "Priority onboarding & live shop floor training",
    ],
  },
  {
    name: "Enterprise Fabrication",
    price: "Custom",
    period: "",
    description: "Multi-plant operations, heavy structural, and high-tonnage fabricators.",
    seats: "Unlimited users · Multi-facility",
    highlight: false,
    features: [
      "Everything in Professional",
      "Multi-plant operations & inter-yard material transfers",
      "Custom ERP integration (Sage 100/300, Viewpoint, COINS)",
      "Dedicated AISC & CWI compliance onboarding manager",
      "Enterprise SLA guarantees & 24/7 emergency support",
      "SSO / SAML & custom RBAC role configurations",
      "Direct CNC saw & plate burning machine API feeds",
      "Annual on-site process optimization review",
    ],
  },
];

const faqItems = [
  {
    q: "How does FabSimple handle Tekla Structures and SDS/2 drawing revisions?",
    a: "FabSimple imports standard CSV exports from Tekla Structures, SDS/2, and KISS formats. When detailers issue a new revision (e.g. Rev C to Rev D), FabSimple automatically diffs added, removed, and modified piece marks. It supersedes older drawings, flags geometry or mill-length differences, and halts work on changed items before bad cuts reach the beam line.",
  },
  {
    q: "Does the Shop Floor Traveler PWA work without Wi-Fi in steel fabrication bays?",
    a: "Yes. Steel bays are notorious Faraday cages for Wi-Fi and cellular reception. The FabSimple Worker PWA is built offline-first. Workers can scan piece mark QR codes, verify drawings, clock operations, and photograph defects with zero network connection. Everything syncs automatically the moment the device reconnects.",
  },
  {
    q: "How does FabSimple ensure AISC 303 and AWS D1.1 audit compliance?",
    a: "Material traceability is enforced at receiving: every inbound delivery logs discrete heat splits and attached MTR PDFs before material can be issued to piece marks. On the floor, AWS D1.1 weld inspections record welder stencils, and paint bays log SSPC DFT mils. When an auditor arrives, you can export a complete, verifiable project quality binder in under 60 seconds.",
  },
  {
    q: "Can FabSimple generate official AIA G702 and G703 billing applications?",
    a: "Yes. FabSimple connects your contract Schedule of Values directly to completed shop fabrication and erected tonnage. It automatically calculates retainage, approved change orders, and stored materials, generating print-ready AIA G702 and G703 payment applications backed by real shop output.",
  },
  {
    q: "How long does implementation take for a typical fabrication shop?",
    a: "Most fabricators are live within 3 to 6 weeks. Our team configures your work centers, imports your active Tekla BOMs, sets up user roles (Owner, PM, Estimator, Foreman, QC, Worker, Accounting), and provides dedicated training for both office staff and shop floor crews.",
  },
];

export default function PricingFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="section-padding bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="badge mb-4 mx-auto">Pricing</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Transparent pricing for steel shops.
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            No per-ton hidden taxes. No expensive module add-on fees. Select the plan designed for your fabrication volume.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border p-8 flex flex-col ${
                plan.highlight
                  ? "bg-zinc-900 border-zinc-800 shadow-xl"
                  : "bg-white border-zinc-200"
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-700 text-xs font-semibold text-zinc-300 mb-4 w-fit">
                  Most Popular for Fab Shops
                </div>
              )}
              <div className={`text-sm font-semibold mb-2 ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1">
                {plan.price !== "Custom" && (
                  <span className={`text-2xl font-semibold ${plan.highlight ? "text-zinc-400" : "text-zinc-400"}`}>$</span>
                )}
                <span className={`text-4xl font-bold font-mono ${plan.highlight ? "text-white" : "text-zinc-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-zinc-500" : "text-zinc-400"}`}>{plan.period}</span>
              </div>
              <div className={`text-xs mt-1.5 mb-1 ${plan.highlight ? "text-zinc-500" : "text-zinc-400"}`}>
                {plan.seats}
              </div>
              <p className={`text-sm mt-2 mb-6 ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                {plan.description}
              </p>

              <a
                href="#demo"
                onClick={(e) => scrollToElement("demo", e)}
                className={`block text-center py-3 rounded-md text-sm font-semibold transition-colors mb-8 ${
                  plan.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.price === "Custom" ? "Contact Enterprise Sales" : "Schedule a Live Demo"}
              </a>

              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? "bg-zinc-700" : "bg-zinc-100"
                    }`}>
                      <Check size={9} className={plan.highlight ? "text-zinc-300" : "text-zinc-600"} />
                    </div>
                    <span className={plan.highlight ? "text-zinc-400" : "text-zinc-600"}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-zinc-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-zinc-200 rounded-xl bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-zinc-900">{item.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-zinc-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-zinc-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
