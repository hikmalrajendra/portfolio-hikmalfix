"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "@/public/images/hikmal.png";

export function RoboticCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md select-none">
      {/* outer rotating ring */}
      <svg
        viewBox="0 0 400 400"
        className="animate-spin-slow absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="40 400"
        />
      </svg>

      {/* inner counter-rotating ring */}
      <svg
        viewBox="0 0 400 400"
        className="animate-spin-slow-reverse absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="var(--color-silver)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const round = (n: number) => Math.round(n * 100) / 100;
          const angle = (i / 12) * Math.PI * 2;
          const x1 = round(200 + Math.cos(angle) * 134);
          const y1 = round(200 + Math.sin(angle) * 134);
          const x2 = round(200 + Math.cos(angle) * 146);
          const y2 = round(200 + Math.sin(angle) * 146);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--color-accent)"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* hexagonal chassis */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full drop-shadow-[0_0_30px_rgba(79,214,255,0.25)]"
        aria-hidden="true"
      >
        <polygon
          points="200,90 300,145 300,255 200,310 100,255 100,145"
          fill="rgba(20,23,31,0.7)"
          stroke="var(--color-silver)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <polygon
          points="200,120 275,160 275,240 200,280 125,240 125,160"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[55%] w-[50%] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] drop-shadow-[0_0_30px_rgba(79,214,255,0.35)]"
        >
          <Image
            src={profileImage}
            alt="Foto profil Hikmal Rajendra Zulfa"
            fill
            sizes="(max-width: 768px) 45vw, 224px"
            priority
            className="object-cover object-[5%_5%]"
          />
        </motion.div>
      </div>

      {/* scanning line */}
      <div className="absolute inset-8 overflow-hidden rounded-full">
        <div
          className="h-1/3 w-full bg-gradient-to-b from-transparent via-accent/25 to-transparent"
          style={{ animation: "scan-line 3.2s linear infinite" }}
        />
      </div>

      {/* small floating fragments */}
      <div className="animate-drift absolute -top-2 right-6 h-3 w-3 rotate-45 border border-accent/60" />
      <div
        className="animate-drift absolute bottom-4 -left-4 h-2 w-2 rounded-full bg-silver/60"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        className="animate-drift absolute top-1/4 -left-6 h-2 w-6 border border-amber/50"
        style={{ animationDelay: "2.1s" }}
      />
    </div>
  );
}