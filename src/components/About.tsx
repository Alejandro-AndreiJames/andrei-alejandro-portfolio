import { Award, Briefcase, GraduationCap } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ size?: number; className?: string }>

type Highlight = {
  label: string
  value: string
  detail: string
  Icon: IconComponent
}

const highlights: Highlight[] = [
  {
    label: 'Current role',
    value: 'Software Developer',
    detail: 'Xtreme Offshore Outsourcing Inc. · Since March 2025',
    Icon: Briefcase,
  },
  {
    label: 'Education',
    value: 'BS Information Technology',
    detail: 'Magna Cum Laude · PUP Taguig · 2025',
    Icon: GraduationCap,
  },
  {
    label: 'Scholarship',
    value: 'DOST-SEI Scholar',
    detail: 'RA 7687 · 2021–2025',
    Icon: Award,
  },
]

function About() {
  return (
    <section id="about" className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          About me
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Building useful software with thoughtful experiences.
          </h2>

          <div className="space-y-5 leading-7 text-muted">
            <p>
              I’m a software developer focused on building accessible web and
              mobile applications that are practical, maintainable, and easy to
              use.
            </p>

            <p>
              At Xtreme Offshore Outsourcing Inc., I develop and maintain web
              applications using ASP.NET, C#, VB.NET, PostgreSQL, and REST APIs.
              I also contribute to iOS development using Swift and Objective-C.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <li
              key={highlight.label}
              className="glass rounded-2xl border border-border bg-surface p-6"
            >
              <p className="flex items-center gap-2.5 text-sm text-subtle">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <highlight.Icon size={16} />
                </span>
                {highlight.label}
              </p>

              <p className="mt-3 font-semibold text-foreground">
                {highlight.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-muted">
                {highlight.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
