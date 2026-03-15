import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOG_LINES = [
  { time: "06:00", icon: "🔍", text: "Scraping LinkedIn...", result: "52 jobs found", color: "#10B981" },
  { time: "06:01", icon: "🔍", text: "Scraping Indeed...", result: "38 jobs found", color: "#6E7681" },
  { time: "06:02", icon: "🤖", text: "AI Scoring batch...", result: "GPT-4o-mini", color: "#34D399" },
  { time: "06:03", icon: "✓", text: "Match 94%", result: "— ML Engineer @ Stripe", color: "#10B981" },
  { time: "06:03", icon: "✓", text: "Match 89%", result: "— AI Engineer @ Notion", color: "#10B981" },
  { time: "06:04", icon: "📄", text: "Generating tailored resume...", result: "", color: "#34D399" },
  { time: "06:05", icon: "✍️", text: "Writing cover letter...", result: "", color: "#34D399" },
  { time: "06:06", icon: "🚀", text: "Applied!", result: "— Stripe ML Engineer", color: "#10B981", bold: true },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setVisibleLines(0);
      let i = 0;
      const addLine = () => {
        if (i < LOG_LINES.length) {
          setVisibleLines(i + 1);
          i++;
          setTimeout(addLine, 600);
        } else {
          setTimeout(cycle, 4000);
        }
      };
      setTimeout(addLine, 400);
    };
    cycle();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto"
    >
      <div
        className="absolute inset-0 rounded-2xl blur-2xl transform scale-105"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "#010409",
          border: "1px solid rgba(16,185,129,0.2)",
          boxShadow: "0 0 40px rgba(16,185,129,0.08)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "#0D1117", borderBottom: "1px solid rgba(16,185,129,0.15)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
          </div>
          <span className="ml-2 text-xs font-mono font-medium" style={{ color: "#6E7681" }}>
            applivo — agent running
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10B981" }} />
            <span className="text-xs font-medium" style={{ color: "#10B981" }}>live</span>
          </div>
        </div>

        <div className="p-4 font-mono text-xs space-y-1.5 min-h-[260px]" style={{ background: "#010409" }}>
          <AnimatePresence mode="sync">
            {LOG_LINES.slice(0, visibleLines).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex gap-2 ${line.bold ? "font-bold" : ""}`}
              >
                <span style={{ color: "#3d444d" }}>[{line.time}]</span>
                <span style={{ color: line.color }}>{line.icon}</span>
                <span style={{ color: line.color }}>{line.text}</span>
                {line.result && (
                  <span style={{ color: line.bold ? "#34D399" : "#6E7681" }}>{line.result}</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {visibleLines > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <span style={{ color: "#3d444d" }}>
                [{LOG_LINES[Math.min(visibleLines - 1, LOG_LINES.length - 1)].time}]
              </span>
              <span className="cursor-blink" style={{ color: "#10B981" }}>▋</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
