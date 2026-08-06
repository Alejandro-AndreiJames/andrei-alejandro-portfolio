import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import type { Theme } from './ThemeToggle'

const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = navigationLinks.map((link) => link.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const visibilityById = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityById.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }

        let nextActive = ''
        let highestRatio = 0

        for (const id of sectionIds) {
          const ratio = visibilityById.get(id) ?? 0
          if (ratio > highestRatio) {
            highestRatio = ratio
            nextActive = `#${id}`
          }
        }

        if (nextActive) {
          setActiveSection(nextActive)
        }
      },
      {
        // Focus on the band under the sticky header where the reader is looking.
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function linkClassName(href: string, isMobile = false) {
    const isActive = activeSection === href

    if (isMobile) {
      return isActive
        ? 'border-b border-border py-4 text-sm font-medium text-accent transition last:border-0'
        : 'border-b border-border py-4 text-sm text-muted transition last:border-0 hover:text-accent'
    }

    return isActive
      ? 'font-medium text-accent transition'
      : 'text-muted transition hover:text-accent'
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >
        <a
          className="font-display text-xl font-bold tracking-tight text-foreground transition hover:text-accent"
          href="#home"
          onClick={closeMenu}
        >
          Andrei.dev
        </a>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              className={linkClassName(link.href)}
              href={link.href}
              aria-current={activeSection === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            className="rounded-lg p-2 text-muted transition hover:bg-surface-hover md:hidden"
            type="button"
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border px-6 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                className={linkClassName(link.href, true)}
                href={link.href}
                aria-current={activeSection === link.href ? 'true' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
