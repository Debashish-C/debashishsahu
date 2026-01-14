import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills & Expertise - Debashish Sahu | Full Stack Developer",
  description: "Explore Debashish Sahu's technical skills and expertise in full-stack development. Proficient in React, Next.js, TypeScript, Node.js, databases, and modern web technologies. MCA student at NIT Bhopal.",
  keywords: [
    "Debashish Sahu Skills",
    "Full Stack Developer Skills",
    "React Developer",
    "Next.js Skills",
    "TypeScript Expert",
    "Node.js Developer",
    "Web Development Skills",
    "Software Engineer Expertise",
    "Programming Skills",
    "Tech Stack"
  ],
  alternates: {
    canonical: 'https://debashishsahu.in/skills',
  },
  openGraph: {
    title: "Skills & Expertise - Debashish Sahu | Full Stack Developer",
    description: "Discover Debashish Sahu's comprehensive skill set in full-stack development, including React, Next.js, TypeScript, and modern web technologies.",
    url: "https://debashishsahu.in/skills",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Skills & Expertise - Debashish Sahu",
    description: "Explore the technical skills and expertise of Debashish Sahu, full-stack developer and MCA student at NIT Bhopal.",
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}