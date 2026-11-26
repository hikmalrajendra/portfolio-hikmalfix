import type { NextConfig } from "next";

const securityHeaders = [
  // Clickjacking protection: this site should never be embedded in a frame
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from MIME-sniffing a response away from its declared type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak the full referring URL to other origins
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // This site doesn't need camera/mic/location — deny by default
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  experimental: {
    // Only bundle the specific icons actually imported instead of the
    // whole lucide-react / framer-motion package in each chunk.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
