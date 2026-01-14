import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com/Debashish-C",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/debashishtest",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/its_developer",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "mailto:contact@debashishsahu.in",
    icon: Mail,
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="w-full max-w-screen-2xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js, TypeScript, and Tailwind CSS. © {new Date().getFullYear()} Debashish Sahu.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}