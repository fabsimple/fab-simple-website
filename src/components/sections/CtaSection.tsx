"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="section-padding bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6">
              Get Started
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              See FabSimple running
              <span className="text-zinc-400"> in your shop.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Book a personalized 45-minute demo with one of our fabrication specialists. We&apos;ll walk through your specific workflow and show you exactly how FabSimple fits your operation.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Live walkthrough tailored to your shop size & processes",
                "See real data — we'll load a sample job similar to yours",
                "Q&A with a fabrication industry specialist, not a generic sales rep",
                "No pressure — take your time to evaluate",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <ArrowRight size={16} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Mail size={16} className="text-zinc-600" />
                <span>hello@fabsimple.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Phone size={16} className="text-zinc-600" />
                <span>+1 (800) 322-7475</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-zinc-600" />
                <span>Available for shops in the US & Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-zinc-700" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">You&apos;re on the list!</h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  A FabSimple specialist will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Book a Free Demo</h3>
                <form id="demo-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-name">
                        Full Name *
                      </label>
                      <input
                        id="demo-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
                        placeholder="Marcus Webb"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-email">
                        Work Email *
                      </label>
                      <input
                        id="demo-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
                        placeholder="marcus@meridiansteel.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-company">
                      Company Name *
                    </label>
                    <input
                      id="demo-company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
                      placeholder="Meridian Steel Fabricators"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="demo-size">
                      Shop Size
                    </label>
                    <select
                      id="demo-size"
                      value={form.size}
                      onChange={(e) => setForm({ ...form, size: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-zinc-300 rounded-md bg-zinc-50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
                    >
                      <option value="">Select shop size</option>
                      <option value="under25">Under 25 employees</option>
                      <option value="25-75">25–75 employees</option>
                      <option value="75-200">75–200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    id="demo-submit"
                    className="w-full py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Request My Demo
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-xs text-zinc-400">
                    No spam. No pressure. Just a focused look at what FabSimple can do for your shop.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
