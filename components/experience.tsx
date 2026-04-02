"use client"

import { HoverEffect } from "@/components/ui/hover-effect"
import { experience, education } from "@/data/portfolio"

export function Experience() {
  const items = [
    ...experience.map((exp, index) => ({
      title: exp.title,
      description: `${exp.company} (${exp.period}) - ${exp.description}`,
      link: `#experience-${index}`,
    })),
    ...education.map((edu, index) => ({
      title: edu.degree,
      description: `${edu.institution} (${edu.period})`,
      link: `#education-${index}`,
    })),
  ]

  return (
    <section id="experience" className="relative w-full bg-background px-4 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            My Journey
          </h2>
        </div>

        <HoverEffect items={items} />
      </div>
    </section>
  )
}
