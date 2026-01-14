import { Metadata } from "next"
import { ProjectsClient } from "./projects-client"
import { allProjects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects by Debashish Sahu - Full Stack Development Portfolio",
  description: "Explore Debashish Sahu's portfolio of full-stack development projects. View React, Next.js, TypeScript applications, and innovative solutions built by MCA student at NIT Bhopal.",
  keywords: [
    "Debashish Sahu Projects",
    "Full Stack Projects",
    "React Projects",
    "Next.js Portfolio",
    "TypeScript Applications",
    "Web Development Projects",
    "Software Engineer Portfolio",
    "MCA Student Projects"
  ],
  alternates: {
    canonical: 'https://debashishsahu.in/projects',
  },
  openGraph: {
    title: "Projects by Debashish Sahu - Full Stack Development Portfolio",
    description: "Discover innovative web applications and projects built by Debashish Sahu, software engineer and NIT Bhopal MCA student.",
    url: "https://debashishsahu.in/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects by Debashish Sahu - Development Portfolio",
    description: "Explore full-stack development projects by Debashish Sahu, featuring React, Next.js, and modern web technologies.",
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}