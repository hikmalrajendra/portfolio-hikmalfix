export interface ExperienceEntry {
  id: string;
  missionCode: string;
  position: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-01",
    missionCode: "MISSION_01",
    position: "SOC Analyst L1",
    organization: "DefendIT 360",
    period: "Juni 2026 - Present",
    description:
      "Memantau aktivitas keamanan secara real-time, melakukan triase alert, dan mengeskalasi insiden yang valid sesuai prosedur Security Operations Center.",
    responsibilities: [
      "Memantau dan menganalisis alert keamanan dari SIEM untuk mendeteksi aktivitas mencurigakan",
      "Melakukan triase alert, membedakan true positive dan false positive, serta mengeskalasi insiden ke tier berikutnya",
      "Menganalisis log (Windows Event ID, jaringan, dan aplikasi) untuk menelusuri sumber dan dampak insiden",
      "Memetakan temuan ke teknik MITRE ATT&CK dan mengikuti playbook incident response",
      "Menyusun laporan insiden dan dashboard monitoring untuk komunikasi ke tim dan klien",
    ],
    technologies: [
      "SIEM (Fortisiem)",
      "Log Analysis",
      "MITRE ATT&CK",
      "Incident Response",
    ],
  },
  {
    id: "exp-02",
    missionCode: "MISSION_02",
    position: "HR Admin & Marketing Intern",
    organization: "PT Veolia Services Indonesia",
    period: "September 2025 - Maret 2026",
    description:
      "Mendukung operasional administrasi HR dan kegiatan pemasaran perusahaan, mulai dari pengelolaan data karyawan",
    responsibilities: [
      "Mengelola administrasi HR: pendataan karyawan, arsip dokumen, dan kelengkapan berkas kepegawaian",
      "Merekap data absensi dan menyusun laporan HR secara berkala",
      "Berkoordinasi dengan tim internal untuk mendukung kebutuhan administrasi dan pencatatan penjualan produk",
    ],
    technologies: ["Sphredseet", "Locker Studio"],
  },
  {
    id: "exp-03",
    missionCode: "MISSION_03",
    position: "Freelance Developer",
    organization: "Joki Proyek",
    period: "2025 - 2026",
    description:
      "Membantu mahasiswa menyelesaikan tugas dan proyek perkuliahan di bidang pengembangan website, aplikasi mobile, dan kecerdasan buatan (AI) sesuai kebutuhan dan tenggat waktu.",
    responsibilities: [
      "Membangun aplikasi web full-stack untuk studi kasus perkuliahan",
      "Mengembangkan aplikasi mobile sesuai spesifikasi tugas dan kebutuhan klien",
      "Mengerjakan proyek AI/machine learning, mulai dari pengolahan data hingga pembuatan dan evaluasi model",
      "Menganalisis kebutuhan klien dan menyelesaikan pekerjaan sesuai tenggat waktu",
      "Menyusun dokumentasi teknis dan laporan proyek",
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "Mobile Development",
      "Python",
      "Machine Learning",
      "Git",
    ],
  },
];