"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990",
    period: "/month",
    description: "For smaller shops getting off spreadsheets.",
    seats: "Up to 15 users",
    highlight: false,
    features: [
      "Estimating module",
      "Job costing",
      "Basic purchasing",
      "5 concurrent active jobs",
      "Email support",
      "QuickBooks integration",
    ],
  },
  {
    name: "Professional",
    price: "2,490",
    period: "/month",
    description: "The full platform for growing fabricators.",
    seats: "Up to 50 users",
    highlight: true,
    features: [
      "Everything in Starter",
      "Production control & scheduling",
      "Full inventory & MTR tracking",
      "Shop floor mobile app",
      "Unlimited active jobs",
      "Priority support + onboarding",
      "All integrations included",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Multi-location shops & custom requirements.",
    seats: "Unlimited users",
    highlight: false,
    features: [
      "Everything in Professional",
      "Multi-location & multi-entity",
      "Custom workflows",
      "Dedicated account manager",
      "SLA guarantees",
      "On-premise option available",
      "Custom integrations",
      "SSO / SAML",
    ],
  },
];

const faqItems = [
  {
    q: "How long does onboarding take?",
    a: "Most shops are fully live within 4–8 weeks. Our implementation team handles data migration, training, and go-live support. You'll have a dedicated implementation manager from day one.",
  },
  {
    q: "Can I import my existing job data?",
    a: "Yes. We support imports from Excel, CSV, and most common estimating tools. For structured data migrations from other ERP systems, our team handles the migration as part of onboarding.",
  },
  {
    q: "Does FabSimple work offline on the shop floor?",
    a: "The shop floor mobile app (iOS and Android) supports offline mode with automatic sync when connectivity is restored — essential for shops with spotty wifi in the fabrication bay.",
  },
  {
    q: "Is my data secure?",
    a: "FabSimple is SOC 2 Type II certified. All data is encrypted at rest and in transit. We offer 99.9% uptime SLA and daily backups. Enterprise customers can opt for private cloud or on-premise deployment.",
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
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            No per-seat surprises. No module add-on fees. Choose the plan that fits your shop.
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
                  Most Popular
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
                className={`block text-center py-3 rounded-md text-sm font-semibold transition-colors mb-8 ${
                  plan.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.price === "Custom" ? "Talk to Sales" : "Start Free Trial"}
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
