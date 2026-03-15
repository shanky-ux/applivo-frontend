import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Bot, FileText, Pen, Shield, Mic } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    iconBg: "rgba(16,185,129,0.1)",
    iconColor: "#10B981",
    title: "Multi-Platform Scraping",
    desc: "LinkedIn, Indeed, Internshala & Wellfound — scraped simultaneously every 6 hours with polite rate limiting and automatic deduplication.",
  },
  {
    icon: Bot,
    iconBg: "rgba(16,185,129,0.08)",
    iconColor: "#34D399",
    title: "Dual GPT-4o Pipeline",
    desc: "GPT-4o-mini filters at scale. GPT-4o goes deep — extracting ATS keywords, skill gaps, match scores, and seniority signals for every job.",
  },
  {
    icon: FileText,
    iconBg: "rgba(16,185,129,0.12)",
    iconColor: "#6EE7B7",
    title: "ATS Resume Tailoring",
    desc: "Your resume is rewritten per job. Keywords injected, bullet points tuned, ATS score estimated. Rendered to PDF via WeasyPrint.",
  },
  {
    icon: Pen,
    iconBg: "rgba(16,185,129,0.1)",
    iconColor: "#10B981",
    title: "Cover Letter Generation",
    desc: "Company-specific cover letters crafted by GPT-4o — with role alignment, company context, and configurable tone.",
  },
  {
    icon: Shield,
    iconBg: "rgba(16,185,129,0.08)",
    iconColor: "#34D399",
    title: "Human-in-the-Loop",
    desc: "Auto-apply is off by default. Enable with a Telegram approval gate — every application needs your thumbs up before it's sent.",
  },
  {
    icon: Mic,
    iconBg: "rgba(16,185,129,0.12)",
    iconColor: "#6EE7B7",
    title: "Interview Prep Engine",
    desc: "Company intelligence report, GPT-4o question bank, and mock AI interviews with scores on technical depth, communication & confidence.",
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-24" style={{ background: "#161B22" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "#E6EDF3" }}>
            Everything Your Job Search Needs
          </h2>
          <p className="text-lg" style={{ color: "#8B949E" }}>One tool. Fully automated. Entirely local.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 8px 32px rgba(16,185,129,0.12)",
                  borderColor: "#10B981",
                }}
                className="rounded-2xl p-7 cursor-default group relative overflow-hidden"
                style={{
                  background: "#0D1117",
                  border: "1px solid #21262d",
                  transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: feature.iconBg, border: "1px solid rgba(16,185,129,0.15)" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#E6EDF3" }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B949E" }}>{feature.desc}</p>
                <div
                  className="absolute left-0 top-8 bottom-8 w-0.5 opacity-0 group-hover:opacity-100 rounded-full"
                  style={{ background: "#10B981", transition: "opacity 0.25s" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
