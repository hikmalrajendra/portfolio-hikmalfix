import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  label: string;
  tone?: "accent" | "amber" | "silver";
  className?: string;
}

const toneMap = {
  accent: "bg-accent shadow-[0_0_10px_2px_var(--color-accent)]",
  amber: "bg-amber shadow-[0_0_10px_2px_var(--color-amber)]",
  silver: "bg-silver shadow-[0_0_8px_1px_var(--color-silver)]",
};

export function StatusIndicator({
  label,
  tone = "accent",
  className,
}: StatusIndicatorProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-3 py-1.5 backdrop-blur-sm",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
            toneMap[tone]
          )}
        />
        <span
          className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", toneMap[tone])}
        />
      </span>
      <span className="font-mono-sys text-[11px] tracking-[0.2em] text-text-secondary">
        {label}
      </span>
    </div>
  );
}
