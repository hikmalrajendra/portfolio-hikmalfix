"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Terminal, Briefcase, MapPin, Radio } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { MechanicalBorder } from "./ui/MechanicalBorder";

type TransmissionState = "idle" | "sending" | "sent";

const channels = [
  { icon: Mail, label: "Email", value: "hikmaljr15@gmail.com", href: "mailto:hikmaljr15@gmail.com" },
  { icon: Briefcase, label: "LinkedIn", value: "Hikmal Rajendra Zulfa", href: "https://www.linkedin.com/in/hikmalrajendrazulfa/" },
  { icon: Terminal, label: "GitHub", value: "@hikmalrz", href: "https://github.com/hikmalrajendra" },
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<TransmissionState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;          // ← simpan referensinya duluan
    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 1400));

    setStatus("sent");
    form.reset();                          // ← pakai variabel, bukan e.currentTarget lagi
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          code="SYS://CONTACT"
          title="Establish Connection"
          description="Punya proyek atau ingin berdiskusi? Kirimkan pesan melalui terminal di bawah ini."
        />

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:col-span-2"
          >
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-surface/50 p-4"
              >
                <channel.icon className="mt-0.5 h-5 w-5 text-accent" strokeWidth={1.6} />
                <div>
                  <p className="font-mono-sys text-[10px] tracking-[0.2em] text-text-muted">
                    {channel.label.toUpperCase()}
                  </p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="text-text-primary hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-text-primary">{channel.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <MechanicalBorder
              code="TERMINAL // v1.0"
              className="rounded-lg border border-white/10 bg-surface/60 p-6 backdrop-blur-sm sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono-sys text-[10px] tracking-[0.2em] text-text-muted"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-white/10 bg-bg/60 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono-sys text-[10px] tracking-[0.2em] text-text-muted"
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-white/10 bg-bg/60 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                    placeholder="anda@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono-sys text-[10px] tracking-[0.2em] text-text-muted"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-md border border-white/10 bg-bg/60 px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-accent"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-[#04141a] transition-opacity disabled:opacity-70"
                >
                  <Radio className={status === "sending" ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
                  {status === "idle" && "INITIATE TRANSMISSION"}
                  {status === "sending" && "TRANSMITTING..."}
                  {status === "sent" && "MESSAGE SENT"}
                </button>
              </form>
            </MechanicalBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
