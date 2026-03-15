import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Cpu, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Download,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Download & Configure",
    desc: "Install the .exe. Enter your OpenAI API key, LinkedIn credentials, and target job roles. Takes under 5 minutes.",
    number: "01",
  },
  {
    icon: Cpu,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "AI Discovers & Scores Jobs",
    desc: "Every 6 hours, Applivo scrapes 4 platforms and runs a dual GPT-4o pipeline — filtering hundreds of listings down to only your best matches.",
    number: "02",
  },
  {
    icon: Rocket,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Applies While You Sleep",
    desc: "Playwright browser automation fills forms, uploads your tailored resume, and submits. You get a Telegram ping for every application sent.",
    number: "03",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Set It Once. Let It Run.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Install Applivo, configure your profile, and your personal AI agent handles the rest — automatically.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+80px)] right-[calc(16.67%+80px)] h-px">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0" y1="0.5" x2="100" y2="0.5"
                stroke="#2563eb"
                strokeWidth="1"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.18, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(37,99,235,0.12)" }}
                  className="relative bg-white rounded-2xl p-8 shadow-md border border-slate-100 cursor-default"
                  style={{
                    borderTop: "3px solid #2563eb",
                    transition: "box-shadow 0.25s, transform 0.25s",
                  }}
                >
                  <div className="absolute top-4 right-5 text-5xl font-black text-slate-50 select-none">
                    {step.number}
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
