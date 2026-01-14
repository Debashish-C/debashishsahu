import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Debashish Sahu - Software Engineer & MCA Student at NIT Bhopal",
  description: "Learn about Debashish Sahu, a passionate software engineer and MCA student at NIT Bhopal. Discover my journey, skills, and passion for full-stack development, startups, and building scalable web applications.",
  keywords: [
    "Debashish Sahu",
    "About Debashish Sahu",
    "Software Engineer",
    "MCA Student NIT Bhopal",
    "Full Stack Developer",
    "Developer Journey",
    "NIT Bhopal Student",
    "Software Engineering Career",
    "Tech Portfolio"
  ],
  alternates: {
    canonical: 'https://debashishsahu.in/about',
  },
  openGraph: {
    title: "About Debashish Sahu - Software Engineer & MCA Student",
    description: "Discover Debashish Sahu's journey as a software engineer and MCA student at NIT Bhopal. Learn about my passion for full-stack development and building scalable applications.",
    url: "https://debashishsahu.in/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Debashish Sahu - Software Engineer & MCA Student",
    description: "Learn about Debashish Sahu's journey in software engineering and MCA studies at NIT Bhopal.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}