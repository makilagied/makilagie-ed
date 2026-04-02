"use client"

import { ArrowLeft, Download } from "lucide-react"
import {
  education,
  experience,
  languages,
  personalInfo,
  projects,
  referees,
  skills,
} from "@/data/portfolio"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Print controls - hidden when printing */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background px-4 py-3 print:hidden">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <Button onClick={handlePrint} size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      {/* Resume content - optimized for printing */}
      <main className="mx-auto max-w-[8.5in] bg-white px-8 py-20 text-black print:px-0 print:py-0">
        {/* Header */}
        <header className="mb-6 border-b-2 border-teal-600 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name.toUpperCase()}</h1>
          <p className="mt-1 text-lg font-medium text-teal-700">
            {personalInfo.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {personalInfo.linkedin.replace("https://www.", "")}
            </span>
             <span className="flex items-center gap-1">
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {personalInfo.github.replace("https://www.", "")}
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {personalInfo.summary}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
            <div>
              <span className="font-semibold text-gray-800">Frontend:</span>
              <span className="text-gray-600"> {skills.frontend.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Backend:</span>
              <span className="text-gray-600"> {skills.backend.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Database:</span>
              <span className="text-gray-600"> {skills.database.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Design:</span>
              <span className="text-gray-600"> {skills.design.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Other:</span>
              <span className="text-gray-600"> {skills.other.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Soft Skills:</span>
              <span className="text-gray-600"> {skills.softSkills.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.title + exp.company} className="mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm font-medium text-teal-600">{exp.company} - {exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-gray-700">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Education</h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.degree} className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm font-medium text-teal-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Key Projects</h2>
          <div className="space-y-4 text-sm">
            {projects.map((project) => (
              <div key={project.title} className="space-y-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <span className="text-gray-500">{project.period}</span>
                </div>
                <p className="text-gray-700">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline text-sm"
                  >
                   {project.link.replace("", "")}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Languages</h2>
          <div className="flex gap-8 text-sm">
            {languages.map((lang) => (
              <div key={lang.name}>
                <span className="font-semibold text-gray-800">{lang.name}:</span>
                <span className="text-gray-600"> {lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Referees */}
        <section className="mb-4">
          <h2 className="mb-2 text-lg font-bold uppercase text-teal-700">Referees</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            {referees.map((referee) => (
              <div key={referee.name}>
                <h3 className="font-bold text-gray-900">{referee.name}</h3>
                <p className="text-gray-700">{referee.title}</p>
                <p className="text-gray-600">{referee.organization}</p>
                {referee.email && <p className="text-teal-600">{referee.email}</p>}
                <p className="text-teal-600">{referee.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0.4in;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  )
}
