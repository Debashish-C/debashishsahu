"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { featuredProjects } from "@/data/projects"
import { techStack } from "@/data/tech-stack"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="flex items-center justify-center min-h-[80vh]">
        <motion.div
          className="text-center space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Debashish Sahu
              </span>
            </h1>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer | Full Stack Developer
            </h2>
          </div>

          <div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building scalable, user-focused web applications. MCA student at NIT Bhopal passionate about full-stack development and startups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Tech Stack Section */}
      <Section animate={true}>
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <p className="text-muted-foreground mt-2">
              Technologies I work with to build amazing products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Featured Projects Section */}
      <Section animate={true}>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              Some of my recent work that I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* About Preview Section */}
      <Section animate={true}>
        <motion.div
          className="text-center space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software engineer currently pursuing my MCA at NIT Bhopal.
              With a strong foundation in full-stack development, I love building products that
              solve real-world problems and make a positive impact. When I'm not coding, you'll
              find me contributing to open-source projects or exploring new technologies.
            </p>
          </div>

          <div>
            <Button variant="outline" asChild>
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
