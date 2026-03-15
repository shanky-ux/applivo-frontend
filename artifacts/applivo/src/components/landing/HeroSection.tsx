import { motion } from "framer-motion";
import { Download, Github, Lock, Zap, Monitor, Globe, Mail } from "lucide-react";
import Terminal from "./Terminal";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const trustBadges = [
  { icon: Lock, label: "AES-256 Encrypted" },
  { icon: Zap, label: "GPT-4o Powered" },
  { icon: Monitor, label: "Runs Locally" },
  { icon: Globe, label: "Open Source" },
  { icon: Mail, label: "Auto-Applies" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            top: "-100px",
            left: "-100px",
          }}
        />
        <div
          className="blob-2 absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
            top: "30%",
            right: "-80px",
          }}
        />
        <div
          className="blob-3 absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
            bottom: "0",
            left: "30%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                <span className="text-blue-500">✦</span> Powered by GPT-4o
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6"
            >
              {["Your Personal", "AI Applies to Jobs", "While You Sleep."].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                >
                  {line === "Your Personal" && line}
                  {line === "AI Applies to Jobs" && (
                    <>
                      <span
                        style={{
                          background: "linear-gradient(135deg, #2563eb, #6366f1)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        AI
                      </span>{" "}
                      Applies to Jobs
                    </>
                  )}
                  {line === "While You Sleep." && (
                    <>
                      <span
                        style={{
                          background: "linear-gradient(135deg, #2563eb, #6366f1)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        While You Sleep.
                      </span>
                    </>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              {...fadeUp(0.55)}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              Applivo runs quietly on your Windows PC — scraping 4 job platforms, scoring every listing with GPT-4o, writing your resume, and auto-submitting applications. Zero cloud. Zero subscription. 100% yours.
            </motion.p>

            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#download"
                className="shimmer-btn flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-base shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #6366f1)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-5 h-5" />
                Download for Windows — Free
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-blue-200 text-blue-600 font-bold text-base bg-white hover:border-blue-400 transition-colors group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>

            <motion.div {...fadeUp(0.85)} className="flex flex-wrap gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-slate-500 text-sm">
                  <Icon className="w-4 h-4 text-blue-500" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
