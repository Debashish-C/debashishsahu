"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const blogPosts = [
  {
    id: "full-stack-approach",
    title: "How I Approach Full Stack Projects",
    excerpt: "A deep dive into my methodology for building scalable web applications from concept to deployment.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Full Stack", "Methodology", "Best Practices"],
  },
  {
    id: "lessons-from-campusbazaar",
    title: "Lessons from Building CampusBazaar",
    excerpt: "Key insights and technical challenges I faced while developing a marketplace platform for college students.",
    date: "2024-01-08",
    readTime: "7 min read",
    tags: ["Startup", "E-commerce", "React"],
  },
  {
    id: "competitive-programming-journey",
    title: "From Competitive Programming to Web Development",
    excerpt: "How competitive programming shaped my problem-solving skills and influenced my approach to software engineering.",
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["Career", "Problem Solving", "Growth"],
  },
]

export default function BlogPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-muted-foreground">
              Thoughts on software development, technology, and my journey as a developer
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.length > 0 ? (
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl hover:text-primary transition-colors">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button variant="ghost" asChild className="p-0 h-auto">
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-primary hover:text-primary/80"
                        >
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="text-muted-foreground">
                <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
                <p className="text-lg mb-6">
                  I'm currently working on my first blog posts. Check back soon for insights on
                  software development, technology trends, and my personal experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-secondary rounded-full">Full Stack Development</span>
                  <span className="px-3 py-1 bg-secondary rounded-full">Startup Journey</span>
                  <span className="px-3 py-1 bg-secondary rounded-full">Tech Insights</span>
                  <span className="px-3 py-1 bg-secondary rounded-full">Career Advice</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Section>

      {/* Newsletter/CTA Section */}
      <Section>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Stay Updated</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground">
              Get notified when I publish new articles about software development,
              technology trends, and insights from my journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="outline" disabled>
              Newsletter Coming Soon
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">
                Get in touch instead
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}