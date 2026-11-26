import { cn } from "@/lib/utils";

interface MechanicalBorderProps {
  children: React.ReactNode;
  className?: string;
  code?: string;
}

/**
 * Wraps content with thin HUD-style corner brackets and an optional
 * small system code label in the top-left corner.
 */
export function MechanicalBorder({
  children,
  className,
  code,
}: MechanicalBorderProps) {
  return (
    <div className={cn("relative", className)}>
      <span className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t border-l border-accent/50" />
      <span className="pointer-events-none absolute -top-px -right-px h-4 w-4 border-t border-r border-accent/50" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b border-l border-accent/50" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b border-r border-accent/50" />
      {code && (
        <span className="pointer-events-none absolute -top-3 left-4 bg-bg px-1.5 font-mono-sys text-[10px] tracking-[0.2em] text-text-muted">
          {code}
        </span>
      )}
      {children}
    </div>
  );
}
