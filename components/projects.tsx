"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

import { projects } from "@/data/portfolio"

const projectIcons = [
  <svg key="1" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="3" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="4" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
]

interface HeaderVariant {
  (key: number): React.ReactNode;
}

const headerVariants: HeaderVariant[] = [
  (key) => (
    <div
      key={key}
      className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-secondary/50"
    >
      <div className="flex gap-3 items-end">
        <div className="h-16 w-10 rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-1 p-2">
          <div className="h-1 w-6 rounded bg-primary/40" />
          <div className="h-6 w-6 rounded-full bg-primary/30" />
          <div className="h-1 w-4 rounded bg-muted" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-3 w-8 rounded bg-primary/30" />
          <div className="h-2 w-6 rounded bg-muted" />
        </div>
      </div>
    </div>
  ),
  (key) => (
    <div
      key={key}
      className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-secondary via-secondary/80 to-primary/10 p-4"
    >
      <div className="flex flex-col gap-2 w-full max-w-[120px]">
        <div className="h-3 w-full rounded bg-primary/30" />
        <div className="h-2 w-3/4 rounded bg-muted" />
        <div className="h-2 w-1/2 rounded bg-muted/70" />
        <div className="mt-2 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-primary/40" />
        </div>
      </div>
    </div>
  ),
  (key) => (
    <div
      key={key}
      className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-secondary to-secondary/80"
    >
      <div className="grid h-16 w-24 grid-cols-3 gap-1 rounded-md border border-border bg-card p-1">
        <div className="col-span-3 rounded-sm bg-primary/30" />
        <div className="rounded-sm bg-muted" />
        <div className="col-span-2 rounded-sm bg-muted/50" />
      </div>
    </div>
  ),
  (key) => (
    <div
      key={key}
      className="flex h-full min-h-[6rem] w-full flex-1 items-end justify-center gap-2 rounded-xl bg-gradient-to-br from-secondary via-secondary/80 to-primary/20 p-4"
    >
      <div className="h-12 w-6 rounded-t-md bg-primary/30" />
      <div className="h-16 w-6 rounded-t-md bg-primary/40" />
      <div className="h-8 w-6 rounded-t-md bg-primary/20" />
      <div className="h-20 w-6 rounded-t-md bg-primary/50" />
      <div className="h-14 w-6 rounded-t-md bg-primary/35" />
    </div>
  ),
];

// Generate a header for each project dynamically
const projectHeaders = projects.map((_, index) =>
  headerVariants[index % headerVariants.length](index)
);

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-background px-4 py-20 md:px-10">
     <div className="mx-auto max-w-7xl">
  <div className="mb-12">
    <p className="mb-2 text-sm uppercase tracking-widest text-primary">
      Projects
    </p>
    <h2 className="text-3xl font-bold text-foreground md:text-5xl">
      Featured Work
    </h2>
  </div>

  <BentoGrid className="md:auto-rows-[20rem]">
    {projects.map((project, i) => (
      <BentoGridItem
        key={project.title}
        title={project.title}
        description={
          <>
            <span>{`${project.description} (${project.period})`}</span>
            {project.link && (
              <div className="mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Project
                </a>
              </div>
            )}
          </>
        }
        header={projectHeaders[i]}
        icon={projectIcons[i]}
        className={project.className}
      />
    ))}
  </BentoGrid>
</div>
    </section>
  )
}
