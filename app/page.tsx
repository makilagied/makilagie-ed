import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Referees } from "@/components/referees"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Referees /> */}
      <Contact />
      <Footer />
    </main>
  )
}
