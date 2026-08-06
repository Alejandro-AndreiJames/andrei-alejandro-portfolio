import { useState } from 'react'
import type { FormEvent } from 'react'
import { Code2, ExternalLink, Mail, Send } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const CONTACT_EMAIL = 'alejandroandreijames@gmail.com'
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function Contact() {
  const currentYear = new Date().getFullYear()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try email instead.')
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try email instead.',
      )
    }
  }

  return (
    <>
      <section id="contact" className="border-t border-border px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>

          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Let’s build something useful together.
              </h2>

              <div className="mt-6 max-w-xl space-y-4 leading-7 text-muted">
                <p>
                  I’m open to software development opportunities, collaborative
                  projects, and interesting ideas. Send a message below or reach
                  me directly.
                </p>

                <p>
                  Whether you’re hiring for a role, exploring a side project, or
                  just want a second pair of eyes on something you’re building,
                  I’d be glad to connect. I usually reply within a couple of
                  days.
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <a
                  className="glass flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  <span className="flex items-center gap-3">
                    <Mail size={20} aria-hidden="true" />
                    Email
                  </span>

                  <ExternalLink size={18} aria-hidden="true" />
                </a>

                <a
                  className="glass flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
                  href="https://www.linkedin.com/in/andrei-james-alejandro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-3">
                    <LinkedInIcon size={20} />
                    LinkedIn
                  </span>

                  <ExternalLink size={18} aria-hidden="true" />
                </a>

                <a
                  className="glass flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-foreground transition hover:border-accent hover:bg-accent-soft"
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

            <form
              className="glass flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from Andrei.dev portfolio"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-foreground"
                    htmlFor="contact-name"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="field w-full rounded-xl px-4 py-3 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-foreground"
                    htmlFor="contact-email"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field w-full rounded-xl px-4 py-3 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex min-h-0 flex-1 flex-col">
                  <label
                    className="mb-2 block text-sm font-medium text-foreground"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="field min-h-[8rem] w-full flex-1 resize-none rounded-xl px-4 py-3 outline-none transition"
                    placeholder="What would you like to talk about?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-background transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <Send size={16} aria-hidden="true" />
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'success' && (
                <p className="mt-3 text-sm text-accent" role="status">
                  Thanks — your message was sent. I’ll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p
                  className="mt-3 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}

              {status === 'idle' && (
                <p className="mt-3 text-xs leading-5 text-subtle">
                  First-time form setup may ask you to confirm your email with
                  FormSubmit. After that, messages arrive in your inbox.
                </p>
              )}
            </form>
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
