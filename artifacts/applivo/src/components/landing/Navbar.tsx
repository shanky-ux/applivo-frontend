import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Desktop", href: "#why-desktop" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,17,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16,185,129,0.12)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/applivo-logo.png"
            alt="Applivo"
            className="h-10 w-auto object-contain"
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#8B949E" }}
              whileHover={{ y: -1, color: "#10B981" }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <motion.a
            href="#download"
            className="shimmer-btn flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md transition-all"
            style={{ background: "#10B981" }}
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-4 h-4" />
            Download Free
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#8B949E" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-4"
            style={{ background: "#161B22", borderTop: "1px solid #21262d" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium"
                style={{ color: "#8B949E", borderBottom: "1px solid #21262d" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-3 flex items-center justify-center gap-2 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "#10B981" }}
              onClick={() => setMobileOpen(false)}
            >
              <Download className="w-4 h-4" /> Download Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
