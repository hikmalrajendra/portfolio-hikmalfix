export interface AchievementEntry {
  id: string;
  code: string;
  title: string;
  organization: string;
  date: string;
//   description: string;
  rank?: string;
  team?: string;
  categories?: string[];
  link?: string;
  // Path gambar bukti sertifikat dari folder public/, contoh: "/images/achievements/ctf-01.png"
  image?: string;
}


export const achievements: AchievementEntry[] = [
  {
    id: "ach-01",
    code: "ACH_01",
    title: "Meta4Sec 3.0",
    organization: "Redlimit",
    date: "2026",
    rank: "Peringkat 48 dari 100+ tim",
    team: "NantiJugaSolve",
    categories: ["Web", "Forensics", "Crypto", "Reverse Engineering", "Pwn", "Misc", "OSINT", "Forensics"],
    image: "/images/achievements/achiev1.png",
  },
  {
    id: "ach-02",
    code: "ACH_02",
    title: "Rise The Ranger 2 Cybersecurity Competition 2026",
    organization: "Satsiber TNI AD",
    date: "2026",
    rank: "Peserta",
    team: "BentwitchSukakSalto",
    categories: ["Network", "Log Analysis", "Forensics", "Incident Response"],
    image: "/images/achievements/achiev2.png",
  },
  {
    id: "ach-03",
    code: "ACH_03",
    title: "UI/UX Competition EXPLORE AH! 2025",
    organization: "HIMAPRO TI SAKTI ITB ASIA MALANG",
    date: "2025",
    rank: "Juara 1",
    team: "SatuRasa",
    categories: ["User Experience", "User Interface", "Prototyping"],
    image: "/images/achievements/achiev3.png",
  },
 
];