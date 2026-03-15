import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOG_LINES = [
  { time: "06:00", icon: "🔍", text: "Scraping LinkedIn...", result: "52 jobs found", color: "text-blue-400" },
  { time: "06:01", icon: "🔍", text: "Scraping Indeed...", result: "38 jobs found", color: "text-slate-400" },
  { time: "06:02", icon: "🤖", text: "AI Scoring batch...", result: "GPT-4o-mini", color: "text-indigo-400" },
  { time: "06:03", icon: "✓", text: "Match 94%", result: "ML Engineer @ Stripe", color: "text-green-400" },
  { time: "06:03", icon: "✓", text: "Match 89%", result: "AI Engineer @ Notion", color: "text-green-400" },
  { time: "06:04", icon: "📄", text: "Generating tailored resume...", result: "", color: "text-blue-400" },
  { time: "06:05", icon: "✍️", text: "Writing cover letter...", result: "", color: "text-blue-400" },
  { time: "06:06", icon: "🚀", text: "Applied!", result: "Stripe ML Engineer", color: "text-emerald-400", bold: true },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setVisibleLines(0);
      setTyping(true);
      let i = 0;
      const addLine = () => {
        if (i < LOG_LINES.length) {
          setVisibleLines(i + 1);
          i++;
          setTimeout(addLine, 600);
        } else {
          setTyping(false);
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl transform scale-105" />
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="ml-2 text-xs text-slate-500 font-mono font-medium">applivo — agent running</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-600 font-medium">live</span>
          </div>
        </div>

        <div className="p-4 font-mono text-xs space-y-1.5 min-h-[260px] bg-slate-950">
          <AnimatePresence mode="sync">
            {LOG_LINES.slice(0, visibleLines).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex gap-2 ${line.bold ? "font-bold" : ""}`}
              >
                <span className="text-slate-500 shrink-0">[{line.time}]</span>
                <span className={`${line.color} shrink-0`}>{line.icon}</span>
                <span className={line.color}>{line.text}</span>
                {line.result && (
                  <span className={`${line.color} opacity-80`}>{line.result}</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {visibleLines > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-slate-500">[{LOG_LINES[Math.min(visibleLines - 1, LOG_LINES.length - 1)].time}]</span>
              <span className="text-blue-400 cursor-blink">▋</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
