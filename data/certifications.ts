export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export const certifications: CertificationEntry[] = [
  {
    id: "cred-01",
    title: "Cybersecurity Engineer Bootcamp",
    issuer: "Merdeka Siber",
    date: "2026",
    credentialId: "4045aa68-aed5-478d-95cb-31c344f2f95a",
    verifyUrl: "https://portal.merdekasiber.com/verify/4045aa68-aed5-478d-95cb-31c344f2f95a",
  },
  {
    id: "cred-02",
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "2026",
    credentialId: "4699728586HZ",
    verifyUrl: "https://www.fortinet.com/certification/verify?certId=4699728586HZ",
  },
  {
    id: "cred-03",
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    date: "2026 - 2028",
    credentialId: "1919011547HZ",
    verifyUrl: "https://www.fortinet.com/certification/verify?certId=1919011547HZ",
  },
  {
    id: "cred-04",
    title: "Junior Mobile Programming",
    issuer: "BNSP",
    date: "2026 - 2029",
    credentialId: "620192514301633302026",
    verifyUrl: "https://sertifikat.bnsppolri.id/sertifikat/620192514301633302026",
  },
  {
    id: "cred-05",
    title: "Cyber Security Analyst",
    issuer: "CyberWarFare",
    date: "2026",
    credentialId: "6ae4cc68f88c7cc4d40556e7",
    verifyUrl: "https://labs.cyberwarfare.live/credential/achievement/6ae4cc68f88c7cc4d40556e7",
  },
  {
    id: "cred-06",
    title: "Cloud Security Fundamentals",
    issuer: "CyberWarFare",
    date: "2026",
    credentialId: "6b07d7f1ad503cfdbcd0daa1",
    verifyUrl: "https://labs.cyberwarfare.live/credential/achievement/6b07d7f1ad503cfdbcd0daa1",
  },
];
