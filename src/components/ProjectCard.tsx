import { Code2, ExternalLink, Image as ImageIcon } from 'lucide-react'
import { motion } from 'motion/react'

type ProjectImage = {
  src: string
  alt: string
}

type ProjectCardProps = {
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

function ProjectCard({
  title,
  role,
  period,
  description,
  outcome,
  tech,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="aspect-video overflow-hidden border-b border-border bg-surface-muted">
        {image ? (
          <img
            className="h-full w-full object-cover"
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full flex-col items-center justify-center gap-3 text-subtle"
            role="img"
            aria-label={`${title} screenshot placeholder`}
          >
            <ImageIcon size={32} aria-hidden="true" />
            <span className="text-sm">Screenshot coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-subtle">{period}</p>
        </div>

        <p className="mt-2 text-sm text-muted">{role}</p>

        <p className="mt-4 leading-7 text-muted">{description}</p>

        <p className="mt-3 text-sm font-medium text-accent">{outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((technology) => (
            <li
              key={technology}
              className="chip rounded-full px-3 py-1 text-xs font-medium text-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            className="btn-github inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={16} aria-hidden="true" />
            GitHub
          </a>

          {liveUrl && (
            <a
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent-strong"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard