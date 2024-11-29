import { Hero } from '@/app/components/indexsections/Hero'
import { About } from '@/app/components/indexsections/About'
import { Experience } from '@/app/components/indexsections/Experience'
import { Education } from '@/app/components/indexsections/Education'
import Projects from '@/app/components/indexsections/Projects'
import Courses from '@/app/components/indexsections/Courses'
import Skills from '@/app/components/indexsections/Skills'

export default function Home() {
  return (
    <div className="flex mt-40">
      <div className="max-w-screen-lg">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Courses />
        <Skills />
      </div>
    </div>
  )
}