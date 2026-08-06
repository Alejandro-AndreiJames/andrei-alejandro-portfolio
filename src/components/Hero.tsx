import { motion } from 'motion/react'
import { ArrowDown, Download } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

type HeroProps = {
  name: string
  role: string
  introduction: string
  githubUrl: string
  resumeUrl: string
}

function Hero({
  name,
  role,
  introduction,
  githubUrl,
  resumeUrl,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative grid min-h-[calc(100vh-73px)] place-items-center px-8 py-20"
    >
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 flex items-center gap-2.5 font-medium text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Hello, I’m
        </p>

        <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          {name}
        </h1>

        <h2 className="mt-6 text-2xl font-normal text-muted sm:text-4xl">
          {role}
        </h2>

        <p className="my-8 max-w-2xl text-lg leading-7 text-muted">
          {introduction}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-accent-strong"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={18} />
            View my GitHub
          </a>

          <a
            className="glass inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent"
            href={resumeUrl}
            download
          >
            <Download size={18} aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </motion.div>

      <motion.a
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-subtle transition hover:text-accent"
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.span
          className="block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
