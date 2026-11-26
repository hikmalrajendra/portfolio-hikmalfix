export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cybersecurity"
  | "Tools";

export interface Technology {
  name: string;
  category: TechCategory;
  level: number; // 0-100, used for the small proficiency ring
}

export const technologies: Technology[] = [
  {
    name: "HTML",
    category: "Frontend",
    level: 95,
  },
  {
    name: "CSS",
    category: "Frontend",
    level: 90,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 80,
  },
  {
    name: "React",
    category: "Frontend",
    level: 70,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 65,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 90,
  },
  {
    name: "PHP",
    category: "Backend",
    level: 70,
  },
  {
    name: "Laravel",
    category: "Backend",
    level: 80,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 72,
  },
  {
    name: "REST API",
    category: "Backend",
    level: 78,
  },
  {
    name: "MySQL",
    category: "Database",
    level: 75,
  },
  {
    name: "Wireshark",
    category: "Cybersecurity",
    level: 70,
  },
  {
    name: "Nmap",
    category: "Cybersecurity",
    level: 72,
  },
  {
    name: "Wazuh",
    category: "Cybersecurity",
    level: 75,
  },
  {
    name: "Forti SIEM",
    category: "Cybersecurity",
    level: 80,
  },
  {
    name: "Burp Suite",
    category: "Cybersecurity",
    level: 68,
  },
  {
    name: "Metasploit",
    category: "Cybersecurity",
    level: 62,
  },
  {
    name: "Dirbuster",
    category: "Cybersecurity",
    level: 65,
  },
  {
    name: "FFUF",
    category: "Cybersecurity",
    level: 65,
  },
  {
    name: "Hydra",
    category: "Cybersecurity",
    level: 65,
  },
  {
    name: "Kali Linux",
    category: "Cybersecurity",
    level: 70,
  },
  {
    name: "Git",
    category: "Tools",
    level: 85,
  },
  {
    name: "GitHub",
    category: "Tools",
    level: 85,
  },
  {
    name: "Postman",
    category: "Tools",
    level: 80,
  },
  {
    name: "Figma",
    category: "Tools",

    level: 75,
  },
];

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Cybersecurity",
  "Tools",
];