"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { allProjects, Project } from "@/data/projects"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "backend", label: "Backend" },
  { id: "startup", label: "Startup" },
  { id: "open-source", label: "Open Source" },
]

export function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = selectedCategory === "all"
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground">
              A showcase of applications, systems, and solutions I've built
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Filter Section */}
      <Section className="py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 mr-4 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">No projects found</p>
                <p className="text-sm">Try selecting a different category</p>
              </div>
            </motion.div>
          )}
        </div>
      </Section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                project.category === 'web' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                project.category === 'backend' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                project.category === 'startup' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                project.category === 'open-source' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
              }`}>
                {project.category.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild className="flex-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}