"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Tekla Structures", category: "3D Modeling" },
  { name: "SDS/2", category: "3D Modeling" },
  { name: "Trimble Connect", category: "Collaboration" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Sage 100", category: "Accounting" },
  { name: "COINS", category: "ERP" },
  { name: "ProEst", category: "Estimating" },
  { name: "Procore", category: "Project Mgmt" },
  { name: "BlueBeam", category: "Document Mgmt" },
  { name: "Xero", category: "Accounting" },
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
          <div className="badge mb-4 mx-auto">Integrations</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Works with the tools
            <span className="text-zinc-400"> you already use.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            FabSimple connects to your existing 3D modeling, accounting, and project management
            tools — no rip-and-replace required.
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
              {/* Placeholder logo — letter avatar */}
              <div className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center mx-auto mb-3 group-hover:bg-zinc-900 transition-colors duration-300">
                <span className="text-sm font-bold text-zinc-600 group-hover:text-white transition-colors duration-300">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div className="text-xs font-semibold text-zinc-800 leading-tight">{integration.name}</div>
              <div className="text-xs text-zinc-400 mt-1">{integration.category}</div>
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
              <span className="text-xs font-bold text-zinc-300 font-mono">API</span>
            </div>
            <div className="text-xs font-semibold text-white leading-tight">Open API</div>
            <div className="text-xs text-zinc-400 mt-1">Build your own</div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-zinc-400 mt-8"
        >
          Don&apos;t see your tool?{" "}
          <a href="#contact" className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900">
            Contact us about custom integrations
          </a>
        </motion.p>
      </div>
    </section>
  );
}
