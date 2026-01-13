import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Debashish Sahu",
  description: "Learn more about Debashish Sahu - MCA student at NIT Bhopal, passionate about full-stack development and building real-world products.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}