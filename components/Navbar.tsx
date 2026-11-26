"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex items-center gap-2 font-mono-sys text-sm tracking-widest text-text-primary"
        >
          <Hexagon className="h-5 w-5 text-accent" strokeWidth={1.5} />
          HRZ
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "relative px-4 py-2 font-mono-sys text-xs tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary",
                  active === item.id && "text-accent"
                )}
              >
                {item.label.toUpperCase()}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-4 right-4 h-px bg-accent shadow-[0_0_8px_var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="text-text-primary md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
           className="overflow-hidden border-b border-white/10 bg-bg/90 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full py-3 text-left font-mono-sys text-sm tracking-[0.15em] text-text-secondary",
                      active === item.id && "text-accent"
                    )}
                  >
                    {item.label.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}