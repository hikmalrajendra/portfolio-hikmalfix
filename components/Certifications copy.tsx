"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          code="SYS://CREDENTIALS"
          title="Verified Credentials"
          description="Sertifikasi yang telah saya selesaikan sebagai bukti kompetensi teknis."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-full h-1/2 bg-gradient-to-b from-transparent via-accent/15 to-transparent transition-transform duration-700 group-hover:translate-y-[200%]" />

              <div className="mb-4 flex items-center justify-between">
                <BadgeCheck className="h-6 w-6 text-accent" strokeWidth={1.6} />
                <span className="font-mono-sys text-[10px] tracking-[0.15em] text-text-muted">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-medium text-text-primary">{cert.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{cert.issuer}</p>

              {cert.credentialId && (
                <p className="mt-3 font-mono-sys text-[10px] tracking-[0.1em] text-text-muted">
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono-sys text-xs tracking-[0.1em] text-accent hover:text-accent-strong"
                >
                  VERIFY
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
