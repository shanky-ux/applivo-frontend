import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Star, Sparkles } from "lucide-react";

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
        background: "linear-gradient(135deg, #1d4ed8, #4f46e5)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.size} rounded-full bg-white`}
            style={{ left: p.left, top: p.top, opacity: 0.3 }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.7, 0.2],
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
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Start Automating Your
            <br />
            Job Search Today
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Free. Open source. Runs entirely on your machine.
          </p>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="shimmer-btn inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-blue-700 font-extrabold text-xl shadow-2xl hover:shadow-white/20"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Download className="w-6 h-6" />
            Download Applivo for Windows
          </motion.a>

          <p className="mt-6 text-blue-200 text-sm">
            Windows 10/11 · OpenAI API Key required · ~150MB · Python runtime bundled
          </p>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-semibold transition-colors group"
            whileHover={{ scale: 1.03 }}
          >
            <Star className="w-4 h-4 group-hover:fill-yellow-300 group-hover:text-yellow-300 transition-colors" />
            Star on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
