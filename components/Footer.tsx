import { Hexagon, Terminal, Briefcase, Mail } from "lucide-react";
import { StatusIndicator } from "./ui/StatusIndicator";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono-sys text-sm tracking-widest text-text-primary">
          <Hexagon className="h-5 w-5 text-accent" strokeWidth={1.5} />
          HRZ
          <span className="ml-2 hidden text-xs text-text-muted sm:inline">
            / Cybersecurity Enthusiast     
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:hikmaljr15@gmail.com" aria-label="Email" className="text-text-secondary hover:text-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/hikmalrajendra" aria-label="GitHub" className="text-text-secondary hover:text-accent">
            <Terminal className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-accent">
            <Briefcase className="h-5 w-5" />
          </a>
        </div>

        <StatusIndicator label="SYSTEM STATUS: ONLINE" />
      </div>

      <p className="mt-6 text-center font-mono-sys text-[10px] tracking-[0.15em] text-text-muted">
        © {new Date().getFullYear()} HIKMAL RAJENDRA ZULFA — ALL SYSTEMS OPERATIONAL
      </p>
    </footer>
  );
}
