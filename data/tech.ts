
export const techStack = {
    frontend: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "HTML",
      "CSS"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "Flask",
      "Prisma ORM",
      "PostgreSQL",
      "MySQL"
    ],
    mobile: [
      "React Native",
      "Expo"
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Figma",
      "VS Code"
    ],
    devFocus: [
      "UI/UX",
      "Full-Stack Development",
      "Developer Tools",
      "Micro-SaaS",
      "Automation"
    ],
    other: [
      "Open Source Contribution",
      "YouTube Content Creation",
      "API Integration",
      "OAuth"
    ]
  } as const;

  export type TechStack = typeof techStack;
  