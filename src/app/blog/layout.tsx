import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Debashish Sahu",
  description: "Thoughts on software development, technology trends, and personal insights from my journey as a developer.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}