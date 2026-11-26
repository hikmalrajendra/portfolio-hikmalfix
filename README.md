# Portfolio — Hikmal Rajendra Zulfa

Website portfolio personal dengan tema **Futuristic Robotic / Transforming Machine**.
Dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

Visual robot/mekanik pada Hero sepenuhnya original (SVG buatan sendiri) dan
**tidak menggunakan aset, logo, atau karakter berhak cipta dari Transformers**.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Build production

```bash
npm run build
npm run start
```

## Struktur proyek

```
app/                  Root layout, halaman utama, global styles
components/           Komponen tiap section (Navbar, Hero, About, dst)
components/ui/        Komponen reusable (GlowCard, StatusIndicator, dst)
data/                 Data konten (experience, education, certifications, technologies)
lib/                  Utility helper (cn)
```

## Mengedit konten

Edit data pengalaman kerja, pendidikan, sertifikasi, dan tech stack di folder
`data/` — tidak perlu menyentuh komponen. Nomor telepon/email dummy pada
`components/Contact.tsx` dan `components/Footer.tsx` juga bisa diganti di sana.

## Mengganti foto profil di bagian Hero

Foto di dalam mechanical core pada Hero diambil lewat **import statis di
kode** (bukan upload lewat website), supaya Next.js bisa mengoptimasi
gambarnya (resize, format modern, tanpa layout shift):

1. Timpa file `public/images/profile.png` dengan fotomu sendiri
   (nama file boleh berbeda, format `.jpg`/`.png`/`.webp` semua bisa).
2. Kalau nama/ekstensi filenya kamu ubah, update baris import di
   `components/ui/RoboticCore.tsx`:
   ```ts
   import profileImage from "@/public/images/profile.png";
   ```
   sesuaikan path-nya dengan nama file barumu.

## Catatan

- Form kontak saat ini memakai placeholder handler (mensimulasikan status
  "TRANSMITTING..." → "MESSAGE SENT" tanpa mengirim data ke server manapun).
  Sambungkan ke endpoint API atau layanan email sungguhan saat backend siap.
- Font (Sora, Inter, JetBrains Mono) di-self-host lewat paket `@fontsource/*`
  agar build tidak bergantung pada koneksi ke Google Fonts saat proses build.
- Animasi menghormati `prefers-reduced-motion`.
