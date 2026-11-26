"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { AnimatedText } from "./ui/AnimatedText";
import { RoboticCore } from "./ui/RoboticCore";
import { StatusIndicator } from "./ui/StatusIndicator";

export function Hero() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 120,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <StatusIndicator
              label={booted ? "SYSTEM ONLINE" : "INITIALIZING..."}
              tone={booted ? "accent" : "amber"}
            />
          </motion.div>

          <h1 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            <AnimatedText text="Hi, I'm" delay={0.15} className="block text-text-secondary" />
            <AnimatedText
              text="Hikmal Rajendra Zulfa"
              delay={0.3}
              className="text-gradient-accent block"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-3 font-mono-sys text-sm tracking-[0.2em] text-accent"
          >
            CYBERSECURITY ANALYST
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-5 max-w-md text-text-secondary"
          >
            Berfokus pada bidang cybersecurity dengan minat pada security monitoring, threat analysis, incident investigation, 
            dan penetration testing. Dengan latar belakang di web development, saya memiliki ketertarikan dalam memahami bagaimana 
            sistem dan aplikasi dapat dibangun secara efektif sekaligus diuji dan diamankan dari berbagai potensi ancaman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-[#04141a] transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="/files/cv.pdf"
              download="Hikmal-Rajendra-Zulfa-CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-medium text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{ rotateX: rx, rotateY: ry }}
          className="relative [perspective:1000px]"
        >
          <RoboticCore />
        </motion.div>
      </div>
    </section>
  );
}
