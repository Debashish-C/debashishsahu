import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Debashish Sahu - Software Engineer & Full Stack Developer",
  description: "Get in touch with Debashish Sahu, software engineer and MCA student at NIT Bhopal. Available for freelance work, collaborations, and full-time opportunities. Contact me to discuss your next project.",
  keywords: [
    "Contact Debashish Sahu",
    "Hire Debashish Sahu",
    "Software Engineer Contact",
    "Full Stack Developer Hire",
    "MCA Student NIT Bhopal",
    "Freelance Developer",
    "Web Developer Contact",
    "Collaboration Opportunities"
  ],
  alternates: {
    canonical: 'https://debashishsahu.in/contact',
  },
  openGraph: {
    title: "Contact Debashish Sahu - Software Engineer",
    description: "Reach out to Debashish Sahu for software development projects, collaborations, and career opportunities. MCA student at NIT Bhopal with expertise in full-stack development.",
    url: "https://debashishsahu.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Debashish Sahu - Software Engineer",
    description: "Connect with Debashish Sahu for your next software development project or collaboration opportunity.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}