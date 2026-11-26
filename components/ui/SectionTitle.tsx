"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  code: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  code,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3 font-mono-sys text-xs tracking-[0.3em] text-accent",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-6 bg-accent/60" />
        {code}
      </div>
      <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-text-secondary">{description}</p>
      )}
    </motion.div>
  );
}
