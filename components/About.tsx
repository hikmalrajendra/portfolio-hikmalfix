"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { MechanicalBorder } from "./ui/MechanicalBorder";

const profileFields = [
  { label: "NAME", value: "Hikmal Rajendra Zulfa" },
  { label: "ROLE", value: "Cybersecurity Enthusiast" },
  { label: "SPECIALIZATION", value: "SOC ANALYST" },
  { label: "STATUS", value: "CURENTLY EMPLOYED // DEFENDIT 360" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          code="SYS://ABOUT"
          title="System Profile"
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-text-secondary"
          >
            <p>
              Saya adalah seorang fresh graduate bidang Teknologi Informasi yang saat ini bekerja sebagai SOC Analyst 
              di DefendIT 360, dengan ketertarikan dan pengalaman di bidang Cybersecurity, Web Development, dan UI/UX Design.
            </p>
            <p>
              Dalam peran sebagai SOC Analyst, saya berfokus pada security monitoring, analisis aktivitas suspicious, 
              serta memahami dan merespons berbagai potensi ancaman terhadap lingkungan digital.
            </p>
            <p>
              Di sisi lain, saya memiliki latar belakang pengembangan aplikasi web menggunakan teknologi seperti 
              React, JavaScript, PHP, Laravel, Node.js, Tailwind CSS, MySQL, dan Git. Kombinasi antara development 
              dan cybersecurity membuat saya terbiasa melihat sebuah sistem tidak hanya dari sisi fungsionalitas, 
              tetapi juga dari sisi keamanan, efisiensi, dan user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <MechanicalBorder
              code="MODULE_01 // CORE SYSTEM"
              className="rounded-lg border border-white/10 bg-surface/60 p-6 backdrop-blur-sm"
            >
              <dl className="divide-y divide-white/10">
                {profileFields.map((field) => (
                  <div key={field.label} className="grid grid-cols-3 gap-4 py-3">
                    <dt className="font-mono-sys text-xs tracking-[0.2em] text-text-muted">
                      {field.label}
                    </dt>
                    <dd className="col-span-2 text-text-primary">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </MechanicalBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
