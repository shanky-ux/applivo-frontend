import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 4, suffix: "", label: "Job Platforms" },
  { value: 94, suffix: "%", label: "Avg Match Score Accuracy" },
  { value: 14, suffix: "", label: "Application Lifecycle Stages" },
  { value: 100, suffix: "%", label: "Runs On Your Machine" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: "#10B981" }}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16" style={{ background: "#161B22", borderTop: "1px solid #21262d", borderBottom: "1px solid #21262d" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ background: "#21262d" }}
                />
              )}
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium" style={{ color: "#6E7681" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
