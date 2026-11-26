"use client";

import { useState } from "react";
import {
  FileCode,
  Palette,
  Braces,
  Atom,
  Layers,
  Wind,
  Code2,
  Server,
  Network,
  Database,
  GitBranch,
  Terminal,
  Send,
  PenTool,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Bug,
  LockKeyhole,
  ScanSearch,
  FolderSearch,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { GlowCard } from "./ui/GlowCard";
import { technologies, techCategories, type TechCategory } from "@/data/technologies";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  HTML: FileCode,
  CSS: Palette,
  JavaScript: Braces,
  React: Atom,
  "Next.js": Layers,
  "Tailwind CSS": Wind,
  PHP: Code2,
  Laravel: Server,
  "Node.js": Server,
  "REST API": Network,
  MySQL: Database,
  Wireshark: Network,
  Nmap: Radar,
  Wazuh: ShieldAlert,
  "Burp Suite": Bug,
  Metasploit: Terminal,
  "Forti SIEM": ShieldAlert,
  "Kali Linux": Terminal,
  Hydra: LockKeyhole,
  Dirbuster: FolderSearch,
  FFUF: ScanSearch,
  Git: GitBranch,
  GitHub: Terminal,
  Postman: Send,
  Figma: PenTool,
};

export function TechStack() {
  const [filter, setFilter] = useState<TechCategory | "All">("All");

  const filtered =
    filter === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === filter);

  return (
    <section id="tech-stack" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          code="SYS://STACK"
          title="Tech Arsenal"
          description="Kumpulan teknologi dan tools yang saya gunakan, mulai dari pengembangan aplikasi web hingga security monitoring dan penetration testing."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {(["All", ...techCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono-sys text-xs tracking-[0.15em] transition-colors",
                filter === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-text-secondary hover:border-white/25 hover:text-text-primary"
              )}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((tech, i) => {
            const Icon = iconMap[tech.name] ?? Code2;
            return (
              <GlowCard key={tech.name} delay={i * 0.04} className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
                  <span className="font-mono-sys text-[10px] text-text-muted">
                    {tech.level}%
                  </span>
                </div>
                <h3 className="font-medium text-text-primary">{tech.name}</h3>
                {/* <p className="text-xs text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {tech.description}
                </p> */}
                <div className="mt-auto h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-silver"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}