import { Code2, ExternalLink, Mail } from 'lucide-react'

function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <section id="contact" className="border-t border-border px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Let’s build something useful together.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-muted">
                I’m open to discussing software development opportunities,
                collaborative projects, and interesting ideas.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
                href="mailto:alejandroandreijames@gmail.com"
              >
                <span className="flex items-center gap-3">
                  <Mail size={20} aria-hidden="true" />
                  Email
                </span>

                <ExternalLink size={18} aria-hidden="true" />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
                href="https://www.linkedin.com/in/andrei-james"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <ExternalLink size={20} aria-hidden="true" />
                  LinkedIn
                </span>

                <ExternalLink size={18} aria-hidden="true" />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
                href="https://github.com/Alejandro-AndreiJames"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <Code2 size={20} aria-hidden="true" />
                  GitHub
                </span>

                <ExternalLink size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-8 py-8 text-center text-sm text-subtle">
        © {currentYear} Andrei James Alejandro
      </footer>
    </>
  )
}

export default Contact