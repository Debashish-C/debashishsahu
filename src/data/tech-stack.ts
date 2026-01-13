export interface TechItem {
  name: string
  icon: string
  color?: string
}

export const techStack: TechItem[] = [
  { name: "JavaScript", icon: "⚡", color: "text-yellow-500" },
  { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "Next.js", icon: "▲", color: "text-black dark:text-white" },
  { name: "Node.js", icon: "🟢", color: "text-green-600" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
  { name: "Prisma", icon: "⚪", color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-500" },
]