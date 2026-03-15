import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12" style={{ background: "#010409", borderTop: "1px solid #21262d" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/applivo-logo.png" alt="Applivo" className="h-8 w-auto object-contain" />
            <span className="text-sm" style={{ color: "#30363d" }}>· AI Job Application Automation</span>
          </div>

          <div className="flex items-center gap-6 text-sm" style={{ color: "#6E7681" }}>
            <a href="#features" className="hover:text-emerald-400 transition-colors" style={{ color: "#6E7681" }}>Features</a>
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors" style={{ color: "#6E7681" }}>How It Works</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors" style={{ color: "#6E7681" }}>FAQ</a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
              style={{ color: "#6E7681" }}
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          <p className="text-sm" style={{ color: "#30363d" }}>
            © {new Date().getFullYear()} Applivo. Open Source. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
