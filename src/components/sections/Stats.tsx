"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 75, suffix: "%", label: "Reduction in BOM intake & revision diffing time", prefix: "" },
  { value: 500, suffix: "+", label: "Structural & misc steel fabricators nationwide", prefix: "" },
  { value: 2.4, suffix: "M", label: "Tons of structural steel tracked from mill to site", prefix: "" },
  { value: 100, suffix: "%", label: "AISC 303 & AWS D1.1 material & weld traceability", prefix: "" },
  { value: 18, suffix: "%", label: "Reduction in bar scrap via 1D cut-list nesting", prefix: "" },
  { value: 4, suffix: "x", label: "Faster generation of AIA G702 / G703 payment apps", prefix: "" },
];

function AnimatedNumber({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const end = target;
    const duration = 1600;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * ease;
      setCount(parseFloat(current.toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Proven Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Results that speak to steel fabricators.
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Real metrics measured across commercial, industrial, and bridge fabrication shops using FabSimple.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 px-8 py-10 text-center hover:bg-zinc-800/50 transition-colors"
            >
              <div className="text-4xl font-bold text-white font-mono tracking-tight">
                <AnimatedNumber
                  target={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />
              </div>
              <div className="mt-2 text-sm text-zinc-400 leading-snug">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
