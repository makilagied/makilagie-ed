"use client"

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import { referees } from "@/data/portfolio"

export function Referees() {
  return (
    <section id="referees" className="relative w-full bg-background px-4 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-widest text-primary">
            References
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Referees
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {referees.map((referee) => (
            <CardContainer key={referee.name} className="inter-var w-full">
              <CardBody className="group/card relative h-auto w-full rounded-xl border border-border bg-card p-6">
                <CardItem translateZ="50" className="w-full">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{referee.name}</h3>
                </CardItem>
                <CardItem translateZ="60" className="mt-2 w-full">
                  <p className="text-sm font-medium text-primary">{referee.title}</p>
                  <p className="text-sm text-muted-foreground">{referee.organization}</p>
                </CardItem>
                <CardItem translateZ="80" className="mt-4 w-full space-y-1">
                  {referee.email && (
                    <Link
                      href={`mailto:${referee.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {referee.email}
                    </Link>
                  )}
                  <Link
                    href={`tel:${referee.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {referee.phone}
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
