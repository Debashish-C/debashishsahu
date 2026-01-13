export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  category: "web" | "backend" | "startup" | "open-source"
  featured: boolean
  image?: string
}

export const projects: Project[] = [
  {
    id: "referx",
    title: "ReferX",
    description: "A referral management system for colleges and universities to streamline student referrals and placements.",
    longDescription: "ReferX is a comprehensive referral management platform designed specifically for educational institutions. It helps colleges manage student referrals, track placement opportunities, and connect students with potential employers through a streamlined referral process.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js"],
    githubUrl: "https://github.com/debashishsahu/referx",
    liveUrl: "https://referx.vercel.app",
    category: "web",
    featured: true,
  },
  {
    id: "edustreamify",
    title: "EduStreamify",
    description: "An educational streaming platform for live classes and recorded lectures with real-time collaboration.",
    longDescription: "EduStreamify provides a complete solution for educational institutions to host live classes, record lectures, and enable real-time collaboration between teachers and students. Features include video streaming, chat, screen sharing, and interactive whiteboards.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "WebRTC"],
    githubUrl: "https://github.com/debashishsahu/edustreamify",
    liveUrl: "https://edustreamify.vercel.app",
    category: "web",
    featured: true,
  },
  {
    id: "campusbazaar",
    title: "CampusBazaar",
    description: "A marketplace platform for college students to buy and sell goods within their campus community.",
    longDescription: "CampusBazaar is a peer-to-peer marketplace designed exclusively for college students. It allows students to buy and sell books, electronics, furniture, and other items within their campus community, making it easier to find deals and connect with fellow students.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/debashishsahu/campusbazaar",
    liveUrl: "https://campusbazaar.vercel.app",
    category: "startup",
    featured: true,
  },
  {
    id: "skillchain",
    title: "SkillChain",
    description: "A blockchain-based skill verification and certification platform for professionals.",
    longDescription: "SkillChain leverages blockchain technology to create immutable records of professional skills and certifications. Employers can verify candidate credentials instantly, and professionals have full control over their skill data.",
    techStack: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "Node.js"],
    githubUrl: "https://github.com/debashishsahu/skillchain",
    liveUrl: "https://skillchain.vercel.app",
    category: "web",
    featured: false,
  },
  {
    id: "task-glow",
    title: "Task Glow",
    description: "A productivity app with smart task management, time tracking, and habit building features.",
    longDescription: "Task Glow is a comprehensive productivity application that helps users manage tasks, track time, build habits, and maintain focus. It includes features like Pomodoro timers, habit streaks, and detailed analytics.",
    techStack: ["React Native", "TypeScript", "AsyncStorage", "React Navigation"],
    githubUrl: "https://github.com/debashishsahu/task-glow",
    category: "web",
    featured: false,
  },
]

export const featuredProjects = projects.filter(project => project.featured)
export const allProjects = projects