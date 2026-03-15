import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const JOBS = [
  {
    company: "Stripe",
    initial: "S",
    initBg: "bg-violet-600",
    title: "ML Engineer",
    location: "Remote",
    remote: true,
    score: 94,
    applied: true,
    skills: ["Python", "PyTorch", "MLOps"],
  },
  {
    company: "Notion",
    initial: "N",
    initBg: "bg-slate-800",
    title: "AI Engineer",
    location: "San Francisco",
    remote: false,
    score: 89,
    applied: false,
    skills: ["LLMs", "LangChain", "FastAPI"],
  },
  {
    company: "Vercel",
    initial: "V",
    initBg: "bg-black",
    title: "Backend Engineer",
    location: "Remote",
    remote: true,
    score: 85,
    applied: true,
    skills: ["FastAPI", "PostgreSQL", "Redis"],
  },
  {
    company: "Linear",
    initial: "L",
    initBg: "bg-blue-600",
    title: "Computer Vision",
    location: "Berlin",
    remote: false,
    score: 81,
    applied: false,
    skills: ["OpenCV", "YOLO", "Python"],
  },
  {
    company: "Figma",
    initial: "F",
    initBg: "bg-pink-500",
    title: "Data Scientist",
    location: "Remote",
    remote: true,
    score: 78,
    applied: false,
    skills: ["PyTorch", "ChromaDB", "SQL"],
  },
];

function JobCard({ job, delay }: { job: typeof JOBS[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(37,99,235,0.12)" }}
      className="flex-shrink-0 w-72 bg-white rounded-2xl p-5 shadow-md border border-slate-100 cursor-default group"
      style={{ transition: "box-shadow 0.25s, transform 0.25s" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl ${job.initBg} flex items-center justify-center text-white font-bold text-lg`}
          >
            {job.initial}
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">{job.company}</p>
          </div>
        </div>
        {job.applied ? (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            Applied ✓
          </span>
        ) : (
          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
            Easy Apply
          </span>
        )}
      </div>

      <h3 className="font-bold text-slate-900 mb-2">{job.title}</h3>

      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center gap-1 text-slate-400 text-xs">
          <MapPin className="w-3 h-3" /> {job.location}
        </span>
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            job.remote ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600"
          }`}
        >
          {job.remote ? "Remote" : "On-site"}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-slate-500 font-medium">AI Match Score</span>
          <span className="text-sm font-bold text-blue-600">{job.score}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #2563eb, #6366f1)" }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${job.score}%` } : { width: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.map((skill) => (
          <span key={skill} className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>

      <button className="w-full text-center text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:underline">
        View Details →
      </button>
    </motion.div>
  );
}

export default function JobCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            See What Applivo Finds For You
          </h2>
          <p className="text-lg text-slate-500">Sample jobs discovered and scored by the AI agent</p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-5 min-w-max px-2">
            {JOBS.map((job, i) => (
              <JobCard key={job.company} job={job} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
