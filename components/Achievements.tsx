"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Trophy, X, ZoomIn } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { MechanicalBorder } from "./ui/MechanicalBorder";
import { achievements } from "@/data/achievement";

export function Achievements() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(
    null
  );

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          code="SYS://ACHIEVEMENTS"
          title="Achievement Unlocked"
          description="Prestasi dan penghargaan yang pernah saya raih selama perjalanan belajar dan berkarier."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <MechanicalBorder
                code={item.code}
                className="h-full rounded-lg border border-white/10 bg-surface/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Trophy className="h-6 w-6 text-amber" strokeWidth={1.6} />
                  <span className="font-mono-sys text-[10px] tracking-[0.15em] text-text-muted">
                    {item.date}
                  </span>
                </div>

                {item.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({ src: item.image!, title: item.title })
                    }
                    aria-label={`Lihat bukti sertifikat: ${item.title}`}
                    className="group relative mb-4 block aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 bg-bg-secondary"
                  >
                    <Image
                      src={item.image}
                      alt={`Bukti sertifikat ${item.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <ZoomIn className="h-6 w-6 text-accent" />
                    </span>
                  </button>
                )}

                <h3 className="font-medium text-text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-silver">{item.organization}</p>

                {(item.rank || item.team) && (
                  <p className="mt-3 font-mono-sys text-[10px] tracking-[0.15em] text-accent">
                    {[item.rank, item.team].filter(Boolean).join(" // ")}
                  </p>
                )}

                {/* <p className="mt-3 text-sm text-text-secondary">
                  {item.description}
                </p> */}

                {item.categories && item.categories.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono-sys text-[10px] tracking-[0.1em] text-text-secondary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono-sys text-xs tracking-[0.1em] text-accent hover:text-accent-strong"
                  >
                    VIEW
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </MechanicalBorder>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Bukti sertifikat: ${preview.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Tutup pratinjau"
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-surface/80 p-2 text-text-primary transition-colors hover:border-accent/40 hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={preview.src}
                alt={`Bukti sertifikat ${preview.title}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}