export interface Skill {
  name: string
  level: "beginner" | "intermediate" | "advanced" | "expert"
  category: "frontend" | "backend" | "database" | "tools" | "languages"
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: "advanced", category: "frontend" },
  { name: "Next.js", level: "advanced", category: "frontend" },
  { name: "TypeScript", level: "advanced", category: "languages" },
  { name: "JavaScript", level: "expert", category: "languages" },
  { name: "Tailwind CSS", level: "advanced", category: "frontend" },
  { name: "HTML5", level: "expert", category: "frontend" },
  { name: "CSS3", level: "advanced", category: "frontend" },
  { name: "Framer Motion", level: "intermediate", category: "frontend" },

  // Backend
  { name: "Node.js", level: "advanced", category: "backend" },
  { name: "Express.js", level: "advanced", category: "backend" },
  { name: "Python", level: "intermediate", category: "languages" },
  { name: "REST APIs", level: "advanced", category: "backend" },
  { name: "GraphQL", level: "intermediate", category: "backend" },

  // Databases
  { name: "PostgreSQL", level: "advanced", category: "database" },
  { name: "MongoDB", level: "advanced", category: "database" },
  { name: "Prisma", level: "advanced", category: "database" },
  { name: "Supabase", level: "intermediate", category: "database" },

  // Tools
  { name: "Git", level: "advanced", category: "tools" },
  { name: "Docker", level: "intermediate", category: "tools" },
  { name: "AWS", level: "intermediate", category: "tools" },
  { name: "Vercel", level: "advanced", category: "tools" },
  { name: "Figma", level: "intermediate", category: "tools" },
  { name: "VS Code", level: "expert", category: "tools" },
]

export const skillsByCategory = {
  frontend: skills.filter(skill => skill.category === "frontend"),
  backend: skills.filter(skill => skill.category === "backend"),
  database: skills.filter(skill => skill.category === "database"),
  tools: skills.filter(skill => skill.category === "tools"),
  languages: skills.filter(skill => skill.category === "languages"),
}