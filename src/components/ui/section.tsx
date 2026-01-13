import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

interface SectionProps {
  container?: boolean
  animate?: boolean
  className?: string
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, animate = false, children, ...props }, ref) => {
    const sectionProps = {
      ref,
      className: cn(
        container && "w-full max-w-screen-2xl mx-auto px-4 py-16 md:py-24",
        className
      ),
      ...props
    }

    if (animate) {
      return (
        <motion.section
          {...(sectionProps as HTMLMotionProps<"section">)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.section>
      )
    }

    return (
      <section {...sectionProps}>
        {children}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }