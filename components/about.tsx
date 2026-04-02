"use client"

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { personalInfo, skills } from "@/data/portfolio"

const skillCategories = [
  { category: "Frontend", items: skills.frontend },
  { category: "Backend", items: skills.backend },
  { category: "Database", items: skills.database },
  { category: "Design", items: skills.design },
]

export function About() {
  return (
    <section id="about" className="relative w-full bg-background px-4 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">About</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Who I Am</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.summary}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.shortBio}
            </p>
          </div>

          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-border bg-card p-6 sm:w-[30rem]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground"
              >
                Tech Stack
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-muted-foreground"
              >
                Technologies I work with daily
              </CardItem>
              <CardItem translateZ="100" className="mt-6 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {skillCategories.map((skill) => (
                    <div key={skill.category}>
                      <h4 className="mb-2 font-semibold text-primary">{skill.category}</h4>
                      <ul className="space-y-1">
                        {skill.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}
