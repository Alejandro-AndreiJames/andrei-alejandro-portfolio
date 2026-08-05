import { motion } from "motion/react";
import { Download } from 'lucide-react'

type HeroProps = {
  name: string;
  role: string;
  introduction: string;
  githubUrl: string;
  resumeUrl: string;
};

function Hero({
  name,
  role,
  introduction,
  githubUrl,
  resumeUrl,
}: HeroProps) {
  return (
    <motion.section
      id="home"
      className="grid min-h-[calc(100vh-73px)] place-items-center px-8 py-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full max-w-4xl">
        <p className="mb-4 font-medium text-accent">Hello, I’m</p>

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
            className="inline-flex items-center rounded-full bg-accent px-5 py-3 font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-accent-strong"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View my GitHub
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-5 py-3 font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-surface-hover"
            href={resumeUrl}
            download
          >
            <Download size={18} aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
