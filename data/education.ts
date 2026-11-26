export interface EducationEntry {
  id: string;
  year: string;
  institution: string;
  program: string;
}

export const education: EducationEntry[] = [
  {
    id: "edu-01",
    year: "2023 - 2026",
    institution: "Universitas Brawijaya",
    program: "D3 Teknologi Informasi, Fakultas Vokasi",
    
  },
  {
    id: "edu-02",
    year: "2020 - 2023",
    institution: "MAN 2 Ponorogo",
    program: "MIPA",
  },
];
