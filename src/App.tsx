import { useEffect, useState } from 'react'
import { MotionConfig } from 'motion/react'
import About from './components/About'
import Backdrop from './components/Backdrop'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import type { Theme } from './components/ThemeToggle'

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const developer = {
  name: 'Andrei James Alejandro',
  role: 'Software Developer',
  introduction:
    'I build accessible web and mobile applications with thoughtful, user-friendly experiences.',
  githubUrl: 'https://github.com/Alejandro-AndreiJames',
  resumeUrl: '/andrei-james-alejandro-resume.pdf',
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-foreground transition-colors duration-300">
        <Backdrop />

        <div className="relative z-10">
          <Header theme={theme} onToggleTheme={toggleTheme} />

          <main>
            <Hero
              name={developer.name}
              role={developer.role}
              introduction={developer.introduction}
              githubUrl={developer.githubUrl}
              resumeUrl={developer.resumeUrl}
            />

            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </MotionConfig>
  )
}

export default App