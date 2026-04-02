"use client"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { useRef, useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { personalInfo } from "@/data/portfolio"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setLoading(true)

    emailjs
      .sendForm(
        'service_nq7qiet',
        'template_3u0e5fd',
        formRef.current,
        'v15FOpzmUHC5_jhlK'
      )
      .then(
        () => {
          setStatus("success")
          setLoading(false)
          formRef.current?.reset()
        },
        () => {
          setStatus("error")
          setLoading(false)
        }
      )
  }

  return (
    <section id="contact" className="relative w-full bg-background px-4 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-primary">Contact</p>
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">Get in Touch</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              If you would like to discuss a project or just say hi, I&apos;m always down to chat.
            </p>

            <div className="mt-10 space-y-4">
              <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary">{personalInfo.email}</p>
                </div>
              </Link>

              <Link href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground group-hover:text-primary">{personalInfo.phone}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (Form OR Result) */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex items-center justify-center">

            {/* ✅ FORM */}
            {!status && (
              <form ref={formRef} className="space-y-6 w-full" onSubmit={handleSubmit}>
                
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" name="user_name" placeholder="Your name" className="bg-secondary" />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" name="user_email" type="email" placeholder="your@email.com" className="bg-secondary" />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} className="resize-none bg-secondary" />
                  </Field>
                </FieldGroup>

                <Button type="submit" size="lg" className="w-full font-semibold" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </form>
            )}

            {/* ✅ RESULT CARD */}
            {status && (
              <div className="text-center flex flex-col items-center justify-center">

                {status === "success" && (
                  <>
                    <h3 className="text-2xl font-bold text-green-500">
                      Message Sent 🎉
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      Thanks for reaching out. I’ll get back to you soon.
                    </p>
                  </>
                )}

                {status === "error" && (
                  <>
                    <h3 className="text-2xl font-bold text-red-500">
                      Something went wrong
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      Please try again later.
                    </p>
                  </>
                )}

                <Button
                  className="mt-6"
                  onClick={() => setStatus(null)}
                >
                  Send Another Message
                </Button>

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}