"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          code="SYS://LOG"
          title="System Development Log"
          description="Jejak pendidikan yang membentuk cara saya berpikir dan bekerja hari ini."
        />

        <div className="relative pl-8">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />

          <ol className="space-y-12">
            {education.map((entry, i) => (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="animate-pulse-glow absolute top-1.5 -left-8 h-3.5 w-3.5 rounded-full border border-accent bg-bg shadow-[0_0_12px_2px_var(--color-accent)]" />

                <div className="mb-1 font-mono-sys text-xs tracking-[0.2em] text-accent">
                  {entry.year}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {entry.institution}
                </h3>
                <p className="text-sm text-silver">{entry.program}</p>
                {/* <p className="mt-2 max-w-xl text-text-secondary">
                  {entry.description}
                </p> */}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
