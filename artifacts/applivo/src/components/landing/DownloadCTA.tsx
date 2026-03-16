import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Star, Zap } from "lucide-react";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 3,
  size: Math.random() > 0.5 ? "w-1 h-1" : "w-1.5 h-1.5",
}));

export default function DownloadCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="download"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1F14 0%, #0D2818 50%, #0A1F14 100%)",
        borderTop: "1px solid rgba(16,185,129,0.15)",
        borderBottom: "1px solid rgba(16,185,129,0.1)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.size} rounded-full`}
            style={{ left: p.left, top: p.top, background: "#10B981", opacity: 0.2 }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              <Zap className="w-8 h-8" style={{ color: "#10B981" }} />
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight" style={{ color: "#E6EDF3" }}>
            Start Automating Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10B981, #34D399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Job Search Today
            </span>
          </h2>
          <p className="text-xl mb-10" style={{ color: "#6EE7B7" }}>
            One-time payment. Lifetime access. Runs entirely on your machine.
          </p>

          <motion.a
            href="/pricing"
            className="shimmer-btn inline-flex items-center gap-3 px-10 py-5 rounded-full font-extrabold text-xl text-white shadow-2xl cursor-pointer"
            style={{
              background: "#10B981",
              boxShadow: "0 0 60px rgba(16,185,129,0.25)",
            }}
            whileHover={{ scale: 1.06, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Download className="w-6 h-6" />
            Get Started - Just ₹99
          </motion.a>

          <p className="mt-6 text-sm" style={{ color: "#6E7681" }}>
            Windows 10/11 · OpenAI API Key required · ~150MB · Python runtime bundled
          </p>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
            style={{ color: "#8B949E" }}
            whileHover={{ scale: 1.03, color: "#10B981" }}
          >
            <Star className="w-4 h-4 group-hover:fill-current transition-colors" style={{ color: "#10B981" }} />
            Star on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
