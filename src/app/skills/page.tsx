"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Wrench, Palette, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { skillsByCategory, Skill } from "@/data/skills"

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Wrench,
  languages: Palette,
}

const categoryTitles = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  database: "Databases & Storage",
  tools: "Tools & Technologies",
  languages: "Programming Languages",
}

const categoryDescriptions = {
  frontend: "Building responsive and interactive user interfaces",
  backend: "Developing robust server-side applications and APIs",
  database: "Designing and managing data storage solutions",
  tools: "Development tools, platforms, and infrastructure",
  languages: "Programming languages and scripting",
}

function getLevelColor(level: Skill["level"]) {
  switch (level) {
    case "beginner":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "advanced":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "expert":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

function getLevelWidth(level: Skill["level"]) {
  switch (level) {
    case "beginner":
      return "w-1/4"
    case "intermediate":
      return "w-1/2"
    case "advanced":
      return "w-3/4"
    case "expert":
      return "w-full"
    default:
      return "w-0"
  }
}

export default function SkillsPage() {
  const categories = Object.keys(skillsByCategory) as Array<keyof typeof skillsByCategory>

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground">
              My technical toolkit and areas of specialization
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((categoryKey, categoryIndex) => {
            const category = skillsByCategory[categoryKey]
            const IconComponent = categoryIcons[categoryKey]

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{categoryTitles[categoryKey]}</CardTitle>
                        <CardDescription className="text-base">
                          {categoryDescriptions[categoryKey]}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {category.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className={`px-2 py-1 text-xs rounded-full capitalize ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </span>
                          </div>

                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "var(--width)" }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                              style={{ "--width": getLevelWidth(skill.level) } as React.CSSProperties}
                              className="bg-primary h-2 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Additional Info */}
      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Always Learning</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. I'm always exploring
              new frameworks, tools, and methodologies to stay at the forefront of software development.
              My goal is to build efficient, scalable, and maintainable solutions using the best tools available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-secondary rounded-full">Problem Solver</span>
              <span className="px-3 py-1 bg-secondary rounded-full">Team Player</span>
              <span className="px-3 py-1 bg-secondary rounded-full">Open Source Contributor</span>
              <span className="px-3 py-1 bg-secondary rounded-full">Agile Methodology</span>
              <span className="px-3 py-1 bg-secondary rounded-full">Clean Code Advocate</span>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}