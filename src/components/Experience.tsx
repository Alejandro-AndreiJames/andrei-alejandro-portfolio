const responsibilities = [
    {
      id: 'web-development',
      description:
        'Develop and maintain web applications using ASP.NET, C#, VB.NET, PostgreSQL, and REST APIs.',
    },
    {
      id: 'ios-development',
      description:
        'Contribute to iOS application development using Swift and Objective-C, including feature implementation and debugging.',
    },
    {
      id: 'quality',
      description:
        'Participate in software testing, debugging, and technical documentation to improve application quality and maintainability.',
    },
    {
      id: 'growth',
      description:
        'Started as a Software Developer Intern and was absorbed into a regular developer role based on performance and contributions.',
    },
  ]
  
  const technologies = [
    'ASP.NET',
    'C#',
    'VB.NET',
    'PostgreSQL',
    'REST APIs',
    'Swift',
    'Objective-C',
  ]
  
  function Experience() {
    return (
      <section
        id="experience"
        className="border-t border-border px-8 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
  
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Growing through real-world software development.
            </h2>
  
            <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Software Developer
                  </h3>
  
                  <p className="mt-1 text-muted">
                    Xtreme Offshore Outsourcing Inc.
                  </p>
                </div>
  
                <div className="sm:text-right">
                  <p className="text-sm text-muted">
                    March 2025 – Present
                  </p>
  
                  <span className="mt-2 inline-flex items-center gap-2 text-sm text-accent">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Current role
                  </span>
                </div>
              </div>
  
              <ul className="mt-8 space-y-4">
                {responsibilities.map((responsibility) => (
                  <li
                    key={responsibility.id}
                    className="flex gap-3 leading-7 text-muted"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-subtle" />
                    <span>{responsibility.description}</span>
                  </li>
                ))}
              </ul>
  
              <ul className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience