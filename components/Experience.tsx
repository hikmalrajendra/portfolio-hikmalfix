"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { MechanicalBorder } from "./ui/MechanicalBorder";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          code="SYS://MISSIONS"
          title="Mission Log"
          description="Pengalaman kerja dan proyek yang telah saya jalankan, dicatat sebagai briefing misi."
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <MechanicalBorder
                code={exp.missionCode}
                className="rounded-lg border border-white/10 bg-surface/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/40 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {exp.position}
                    </h3>
                    <p className="text-silver">{exp.organization}</p>
                  </div>
                  <span className="font-mono-sys text-xs tracking-[0.2em] text-accent">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 text-text-secondary">{exp.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono-sys text-[10px] tracking-[0.1em] text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </MechanicalBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
