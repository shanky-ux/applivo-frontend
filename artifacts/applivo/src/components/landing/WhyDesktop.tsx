import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check, Cloud, Monitor } from "lucide-react";

const CLOUD_CONS = [
  "LinkedIn & Indeed block cloud server IPs",
  "Playwright can't run in serverless containers",
  "Background Celery workers killed on free tiers",
  "Your credentials stored on a stranger's server",
  "Monthly subscription fees",
];

const DESKTOP_PROS = [
  "Runs from your home IP — never flagged",
  "Full Playwright browser automation, locally",
  "Celery workers run 24/7 on your machine",
  "All data encrypted and stored only on your PC",
  "Completely free forever",
];

export default function WhyDesktop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-desktop" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why a Desktop App, Not a Cloud Service?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8 border border-red-100 bg-red-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">☁ Cloud Hosted</h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold mt-1">
                  Doesn't Work
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {CLOUD_CONS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 text-slate-600 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8 border-2 border-blue-200 bg-blue-50"
            style={{ boxShadow: "0 0 40px rgba(37,99,235,0.08)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">🖥 Applivo Desktop</h3>
                <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mt-1">
                  Works Perfectly
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {DESKTOP_PROS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 text-slate-700 text-sm font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
