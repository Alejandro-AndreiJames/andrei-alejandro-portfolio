import type { ComponentType } from 'react'
import {
  Braces,
  Code2,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react'
import {
  SiAngular,
  SiBootstrap,
  SiCplusplus,
  SiCss,
  SiDaisyui,
  SiDotnet,
  SiFramer,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSharp,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiXcode,
} from '@icons-pack/react-simple-icons'

type IconComponent = ComponentType<{ size?: number; className?: string }>

type Skill = {
  name: string
  Icon: IconComponent
}

type SkillGroup = {
  id: string
  title: string
  Icon: IconComponent
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    Icon: Code2,
    skills: [
      { name: 'C#', Icon: SiSharp },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'SQL', Icon: Database },
      { name: 'Swift', Icon: SiSwift },
      { name: 'Objective-C', Icon: Braces },
      { name: 'Python', Icon: SiPython },
      { name: 'VB.NET', Icon: SiDotnet },
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Databases',
    Icon: Layers,
    skills: [
      { name: 'ASP.NET', Icon: SiDotnet },
      { name: 'Angular', Icon: SiAngular },
      { name: 'Vue.js', Icon: SiVuedotjs },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'DaisyUI', Icon: SiDaisyui },
      { name: 'Bootstrap', Icon: SiBootstrap },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    Icon: Wrench,
    skills: [
      { name: 'Visual Studio', Icon: Code2 },
      { name: 'VS Code', Icon: Code2 },
      { name: 'Xcode', Icon: SiXcode },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Postman', Icon: SiPostman },
      { name: 'Bash', Icon: SiGnubash },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    Icon: Sparkles,
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Vite', Icon: SiVite },
      { name: 'Motion', Icon: SiFramer },
      { name: 'Terminal workflows', Icon: Terminal },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Technical skills
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Technologies I use and continue to explore.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="glass rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="flex items-center gap-2.5 font-semibold text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <group.Icon size={16} />
                </span>
                {group.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-accent hover:bg-accent-soft"
                  >
                    <skill.Icon size={14} className="shrink-0" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
