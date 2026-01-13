import { Metadata } from "next"
import { ProjectsClient } from "./projects-client"
import { allProjects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects - Debashish Sahu",
  description: "Explore my portfolio of projects including web applications, backend systems, and startup initiatives.",
}

export default function ProjectsPage() {
  return <ProjectsClient />
}