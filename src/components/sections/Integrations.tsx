"use client";

import { motion } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

const integrations = [
  { name: "Tekla Structures", category: "BOM & 3D Detailing" },
  { name: "SDS/2", category: "Structural Detailing" },
  { name: "Trimble Connect", category: "Model Status & BIM" },
  { name: "FabTrol / KISS", category: "Legacy BOM Import" },
  { name: "Procore", category: "Project Management" },
  { name: "Bluebeam Revu", category: "Shop Drawings & QA" },
  { name: "QuickBooks", category: "Accounting & AP/AR" },
  { name: "Sage 100 Contractor", category: "Construction ERP" },
  { name: "Sage 300 CRE", category: "Job Costing" },
  { name: "Viewpoint / COINS", category: "Enterprise ERP" },
];

export default function Integrations() {
  return (
    <section className="section-padding bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="badge mb-4 mx-auto">Ecosystem</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Connects with your steel
            <span className="text-zinc-400"> detailing &amp; accounting stack.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            FabSimple works alongside your existing 3D detailing packages, nesting software, and accounting systems — no costly rip-and-replace.
          </p>
        </motion.div>

        {/* Integration grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-center hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Badge avatar */}
              <div className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center mx-auto mb-3 group-hover:bg-zinc-900 transition-colors duration-300">
                <span className="text-sm font-bold text-zinc-600 group-hover:text-white transition-colors duration-300">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div className="text-xs font-semibold text-zinc-800 leading-tight">{integration.name}</div>
              <div className="text-[11px] text-zinc-400 mt-1">{integration.category}</div>
            </motion.div>
          ))}

          {/* API card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="group bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center col-span-2 sm:col-span-1 hover:bg-zinc-800 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center mx-auto mb-3">
              <span className="text-xs font-bold text-zinc-300 font-mono">REST</span>
            </div>
            <div className="text-xs font-semibold text-white leading-tight">Open REST API</div>
            <div className="text-[11px] text-zinc-400 mt-1">Webhooks &amp; Edge Sync</div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-zinc-400 mt-8"
        >
          Have proprietary CNC saw machinery or custom accounting?{" "}
          <a
            href="#demo"
            onClick={(e) => scrollToElement("demo", e)}
            className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900 font-medium"
          >
            Ask our engineering team about direct machinery &amp; API integrations
          </a>
        </motion.p>
      </div>
    </section>
  );
}
