import { ParticleBackground } from "./ParticleBackground";

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-silver/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-amber/5 blur-[130px]" />

      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
