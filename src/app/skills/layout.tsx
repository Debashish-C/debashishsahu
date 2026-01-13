import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills & Expertise - Debashish Sahu",
  description: "Explore my technical skills and expertise in frontend, backend, databases, and development tools.",
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}