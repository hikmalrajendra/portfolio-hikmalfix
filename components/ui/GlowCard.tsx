"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-lg border border-white/10 bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 shadow-[0_0_30px_-5px_var(--color-accent)] transition-opacity duration-300 group-hover:opacity-30" />
      {children}
    </motion.div>
  );
}
