import { motion } from "framer-motion";
import { Download, Github, Lock, Zap, Monitor, Globe, Mail } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(160deg, #0D1117 60%, #0A1F14 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            top: "-200px",
            right: "-100px",
          }}
        />
        <div
          className="blob-2 absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-100px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
              <Zap className="w-4 h-4" />
              AI-Powered Job Automation
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: "#E6EDF3" }}>
              Apply to 100+
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #10B981, #34D399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Jobs Daily
              </span>
            </h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-xl mb-8 max-w-lg"
              style={{ color: "#8B949E" }}
            >
              Stop manually applying to jobs. Let Applivo automatically find, tailor, and apply to relevant positions across all platforms — while you focus on interviews.
            </motion.p>

            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="/pricing"
                className="shimmer-btn flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-base shadow-lg cursor-pointer"
                style={{ background: "#10B981" }}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-5 h-5" />
                Get Started — Just ₹99
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-base transition-colors group"
                style={{
                  border: "2px solid rgba(33,110,85,0.5)",
                  color: "#2563eb",
                  background: "rgba(16,185,129,0.04)",
                }}
                whileHover={{ scale: 1.04, borderColor: "rgba(16,185,129,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>

            <motion.div {...fadeUp(0.85)} className="flex flex-wrap gap-4">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm" style={{ color: "#6E7681" }}>
                  <Icon className="w-4 h-4" style={{ color: "#10B981" }} />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="hidden lg:block">
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: "#161B22",
        border: "1px solid #30363d",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#21262d", borderBottom: "1px solid #30363d" }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: "#f85149" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#f0883e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#3fb950" }} />
        <span className="ml-2 text-sm" style={{ color: "#8b949e" }}>
          applivo — powered by GPT-4o
        </span>
      </div>
      <div className="p-6 font-mono text-sm">
        <div className="mb-4" style={{ color: "#8b949e" }}>
          <span style={{ color: "#10B981" }}>applivo</span>:<span style={{ color: "#79c0ff" }}>~</span>$
          <span className="ml-2" style={{ color: "#e6edf3" }}>applivo search "react developer" --location=remote</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
          style={{ color: "#7ee787" }}
        >
          <div>✓ Searching across 12 platforms...</div>
          <div>✓ Found 247 matching jobs</div>
          <div>✓ Filtering by criteria...</div>
          <div>✓ 89 jobs match your profile</div>
          <div>✓ Tailoring resumes...</div>
          <div>✓ Applying to top 50 jobs...</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4"
          style={{ color: "#79c0ff" }}
        >
          🎉 Successfully applied to 23 jobs today!
        </motion.div>
      </div>
    </div>
  );
}
