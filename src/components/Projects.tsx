import ProjectCard from './ProjectCard'
import spendiTrackImage from '../assets/projects/spenditrack.png'
import pupFesrImage from '../assets/projects/pup-fesr.jpg'
import hueniqueImage from '../assets/projects/huenique.jpg'
import wibsDepotImage from '../assets/projects/wibs-depot.jpg'

type ProjectImage = {
  src: string
  alt: string
}

type Project = {
  id: string
  title: string
  role: string
  period: string
  description: string
  outcome: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
  image?: ProjectImage
}

const projects: Project[] = [
  {
    id: 'spenditrack',
    title: 'SpendiTrack',
    role: 'Full-Stack Developer',
    period: 'July 2026',
    description:
      'People struggle to see where monthly money actually goes. I built SpendiTrack end to end — authentication, budgets, category limits, expenses, and spending analytics — so users can track and adjust spending in one place.',
    outcome:
      'Live full-stack finance app with secure auth and monthly analytics.',
    tech: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Identity', 'Bootstrap'],
    githubUrl: 'https://github.com/Alejandro-AndreiJames/SpendiTrack-Web',
    liveUrl: 'http://spenditrack.runasp.net',
    image: {
      src: spendiTrackImage,
      alt: 'SpendiTrack expense tracker dashboard showing monthly income, spending limit, and budget breakdown',
    },
  },
  {
    id: 'pup-fesr',
    title: 'PUP-FESR',
    role: 'Front-End Developer',
    period: 'July 2024 – December 2024',
    description:
      'Faculty needed a clearer way to manage information, evaluations, and research records. I built accessible front-end workflows so elderly and non-technical users could complete tasks without friction.',
    outcome:
      'Accessibility-first faculty system used in a real campus context.',
    tech: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/Alejandro-AndreiJames/PUPTHRIS',
    image: {
      src: pupFesrImage,
      alt: 'PUP-FESR faculty information dashboard with a data table and navigation sidebar',
    },
  },
  {
    id: 'huenique',
    title: 'HUEnique',
    role: 'Project Manager, Front-End Developer',
    period: 'April – July 2024',
    description:
      'Choosing flattering colors is confusing for many people. I led planning and front-end work for an interactive color analysis app that turns user input into seasonal palettes and style recommendations.',
    outcome: 'Shipped a guided color-analysis experience from concept to UI.',
    tech: ['Angular', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/Alejandro-AndreiJames/HUEnique-V2',
    image: {
      src: hueniqueImage,
      alt: 'HUEnique color analysis interface showing seasonal palette recommendations',
    },
  },
  {
    id: 'wibs-depot',
    title: 'Wibs Depot',
    role: 'Project Manager, Front-End Developer',
    period: 'October 2023 – January 2024',
    description:
      'Shoppers needed a simple path from browsing to checkout. I built the storefront UI for product browsing, cart management, profile updates, and order tracking on a PHP/MySQL e-commerce platform.',
    outcome: 'Complete shopper flow from catalog through order tracking.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/Alejandro-AndreiJames/WIBS-Depot-ecommerce',
    image: {
      src: wibsDepotImage,
      alt: 'Wibs Depot e-commerce homepage highlighting secure payments, shipping, and handling features',
    },
  },
]

function Projects() {
  return (
    <section id="projects" className="border-t border-border px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Selected work
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Projects that show how I build and ship software.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              role={project.role}
              period={project.period}
              description={project.description}
              outcome={project.outcome}
              tech={project.tech}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
