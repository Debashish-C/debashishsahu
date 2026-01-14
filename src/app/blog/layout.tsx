import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Debashish Sahu | Software Development Insights",
  description: "Read Debashish Sahu's blog posts on software development, full-stack engineering, startup experiences, and insights from an MCA student at NIT Bhopal. Learn about React, Next.js, and modern web technologies.",
  keywords: [
    "Debashish Sahu Blog",
    "Software Development Blog",
    "Full Stack Development",
    "React Blog",
    "Next.js Tutorials",
    "MCA Student Blog",
    "Tech Insights",
    "Programming Blog",
    "Web Development Articles"
  ],
  alternates: {
    canonical: 'https://debashishsahu.in/blog',
  },
  openGraph: {
    title: "Blog - Debashish Sahu | Software Development Insights",
    description: "Explore Debashish Sahu's thoughts on software engineering, full-stack development, and technology trends from his perspective as an MCA student at NIT Bhopal.",
    url: "https://debashishsahu.in/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog - Debashish Sahu | Tech Insights",
    description: "Read articles by Debashish Sahu on software development, React, Next.js, and full-stack engineering experiences.",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}