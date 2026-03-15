import { Zap, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="text-white font-bold text-lg">Applivo</span>
            <span className="text-slate-500 text-sm ml-2">· AI Job Application Automation</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Applivo. Open Source. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
