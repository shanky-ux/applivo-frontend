import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Is Applivo really free?",
    a: "Yes! Applivo is open source and completely free. You only pay for your own OpenAI API usage, which is typically just a few dollars per month — far cheaper than any subscription-based job board service.",
  },
  {
    q: "Do I need technical knowledge to set it up?",
    a: "Basic comfort with command line is helpful, but the installer guides you through everything. You'll need to enter your OpenAI API key and LinkedIn credentials — the whole setup takes under 5 minutes.",
  },
  {
    q: "Is it safe? What about my credentials?",
    a: "Your credentials are encrypted with AES-256 and stored only on your local machine — never transmitted to any cloud server. Applivo runs entirely on your PC, so you maintain full control.",
  },
  {
    q: "Which job platforms does it support?",
    a: "Currently LinkedIn, Indeed, Internshala, and Wellfound. More platforms are being added in upcoming releases. Because it's open source, you can also contribute your own scrapers.",
  },
  {
    q: "Will LinkedIn flag my account?",
    a: "Applivo uses polite rate limiting, mimics human-like browsing patterns, and operates from your home IP address — the same IP you normally use. This makes it indistinguishable from regular browser activity.",
  },
  {
    q: "Can I control which jobs it applies to?",
    a: "Absolutely. By default, auto-apply is disabled. You can enable a Telegram approval gate so every application requires your explicit thumbs up before it's submitted. You set the match score threshold and job filters.",
  },
];

function FAQItem({ faq, i }: { faq: typeof FAQS[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.4 }}
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid #21262d" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{
          background: open ? "rgba(16,185,129,0.04)" : "#161B22",
          color: "#C9D1D9",
        }}
      >
        <span className="font-semibold pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ color: "#10B981" }}
        >
          <ChevronDown className="w-5 h-5 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="overflow-hidden"
            style={{ background: "#0D1117", borderTop: "1px solid #21262d" }}
          >
            <p className="px-5 pb-5 pt-4 leading-relaxed text-sm" style={{ color: "#8B949E" }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24" style={{ background: "#161B22" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: "#E6EDF3" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: "#8B949E" }}>Everything you need to know about Applivo</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
