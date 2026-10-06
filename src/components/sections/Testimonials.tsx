"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "When detailers issued Rev D while Rev B was already on the saw, we used to lose tens of thousands in scrapped wide-flange beams. FabSimple's automated Tekla CSV diffing halts bad cuts instantly, supersedes drawings, and keeps our shop floor working only to current revisions.",
    author: "Marcus Webb",
    role: "VP of Operations",
    company: "Meridian Steel Fabricators",
    size: "120-person shop · 1,400 tons/mo · Pacific Northwest",
    metric: "$180k+",
    metricLabel: "Scrap steel avoided annually",
  },
  {
    quote:
      "Preparing our AISC 303 audit binder used to mean two frantic weeks of searching file cabinets for Mill Test Reports and matching unreadable heat stamps on drops. With FabSimple, every piece mark is locked to its MTR from receiving. Our auditor reviewed the full electronic binder in under five minutes.",
    author: "Linda Chen",
    role: "Quality Director & CWI",
    company: "Iron Ridge Structural",
    size: "85-person shop · AISC Certified · Texas",
    metric: "2 wks → 5 min",
    metricLabel: "AISC audit binder assembly",
  },
  {
    quote:
      "Our PMs, shop foremen, and accounting team finally work off the exact same numbers. Outbound trailer loads are staged to legal axle limits by crane pick sequence, and our AIA G702 / G703 payment applications go out on the 25th with zero pushback from GCs.",
    author: "Derek Callahan",
    role: "President & Owner",
    company: "Callahan Steel & Erection",
    size: "200+ person shop & field erector · Midwest",
    metric: "18 Days",
    metricLabel: "Faster monthly GC billing cycle",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="badge mb-4 mx-auto">Customer Stories</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
            Fabricators who made the switch
            <span className="text-zinc-400"> don&apos;t look back.</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed">
            See how owners, quality directors, and operations managers transformed their steel fabrication shops with FabSimple.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Metric side */}
                <div className="bg-zinc-900 p-10 flex flex-col justify-center text-center md:text-left">
                  <Quote size={28} className="text-zinc-600 mb-6 mx-auto md:mx-0" />
                  <div className="text-4xl font-bold text-white font-mono">{t.metric}</div>
                  <div className="text-sm text-zinc-400 mt-2">{t.metricLabel}</div>
                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <div className="font-semibold text-white text-sm">{t.author}</div>
                    <div className="text-zinc-400 text-xs mt-1">{t.role}</div>
                    <div className="text-zinc-500 text-xs mt-0.5 font-medium">{t.company}</div>
                    <div className="text-zinc-600 text-xs mt-2 italic">{t.size}</div>
                  </div>
                </div>

                {/* Quote side */}
                <div className="md:col-span-2 p-10 flex flex-col justify-between">
                  <blockquote className="text-zinc-700 text-lg leading-relaxed font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-10">
                    {/* Dots */}
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === current ? "bg-zinc-900 w-6" : "bg-zinc-300 w-1.5 hover:bg-zinc-400"
                          }`}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-2">
                      <button
                        onClick={prev}
                        className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={16} className="text-zinc-500" />
                      </button>
                      <button
                        onClick={next}
                        className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={16} className="text-zinc-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
