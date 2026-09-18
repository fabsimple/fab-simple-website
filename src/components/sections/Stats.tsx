"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 37, suffix: "%", label: "Average reduction in estimating time", prefix: "" },
  { value: 500, suffix: "+", label: "Structural steel fabricators", prefix: "" },
  { value: 2.4, suffix: "M", label: "Tons of steel tracked annually", prefix: "" },
  { value: 94, suffix: "%", label: "Customer on-time delivery improvement", prefix: "" },
  { value: 28, suffix: "%", label: "Reduction in material waste", prefix: "" },
  { value: 99.9, suffix: "%", label: "Platform uptime SLA guaranteed", prefix: "" },
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
            By the Numbers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Results that speak for themselves.
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Measured outcomes from real fabricators after 12 months on FabSimple.
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
