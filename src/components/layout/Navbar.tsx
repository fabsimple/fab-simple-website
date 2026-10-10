"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { scrollToElement } from "@/lib/utils";

const navLinks = [
  { label: "Why FabSimple", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Dark hero is min-h-screen; switch to light header after scrolling past ~70% of hero
      const heroThreshold = window.innerHeight * 0.7;
      setIsPastHero(window.scrollY > heroThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : "bg-[#070A0F]/75 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="FabSimple Home">
          <div
            className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${
              isPastHero ? "bg-zinc-900" : "bg-zinc-800/90 border border-zinc-700/80 shadow-sm"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="6" height="6" fill="white" opacity="0.9" />
              <rect x="10" y="2" width="6" height="6" fill="white" opacity="0.5" />
              <rect x="2" y="10" width="6" height="6" fill="white" opacity="0.5" />
              <rect x="10" y="10" width="6" height="6" fill="white" opacity="0.9" />
            </svg>
          </div>
          <span
            className={`font-semibold text-lg tracking-tight transition-colors ${
              isPastHero ? "text-zinc-900" : "text-white"
            }`}
          >
            Fab<span className={isPastHero ? "text-zinc-500" : "text-zinc-400"}>Simple</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToElement(link.href.replace("#", ""), e)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                  isPastHero
                    ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.fabsimpleus.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${
              isPastHero ? "text-zinc-600 hover:text-zinc-900" : "text-zinc-300 hover:text-white"
            }`}
          >
            Sign in
          </a>
          <a
            href="#demo"
            onClick={(e) => scrollToElement("demo", e)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md transition-colors shadow-sm ${
              isPastHero
                ? "bg-zinc-900 text-white hover:bg-zinc-700"
                : "bg-white text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            Book a Demo
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            isPastHero ? "text-zinc-600 hover:bg-zinc-100" : "text-zinc-200 hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b transition-colors ${
              isPastHero
                ? "bg-white border-zinc-200"
                : "bg-[#0B1120]/95 backdrop-blur-xl border-zinc-800"
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    scrollToElement(link.href.replace("#", ""), e);
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isPastHero
                      ? "text-zinc-700 hover:bg-zinc-50"
                      : "text-zinc-200 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div
                className={`pt-3 border-t mt-3 flex flex-col gap-2 ${
                  isPastHero ? "border-zinc-100" : "border-zinc-800"
                }`}
              >
                <a
                  href="https://app.fabsimpleus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium ${
                    isPastHero ? "text-zinc-600" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  Sign in
                </a>
                <a
                  href="#demo"
                  onClick={(e) => {
                    setMobileOpen(false);
                    scrollToElement("demo", e);
                  }}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-md text-center transition-colors ${
                    isPastHero
                      ? "bg-zinc-900 text-white"
                      : "bg-white text-zinc-950 hover:bg-zinc-100"
                  }`}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

