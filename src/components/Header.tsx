import { useState } from 'react'
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

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  function closeMenu() {
    setIsMenuOpen(false)
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

        <div className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              className="transition hover:text-accent"
              href={link.href}
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
                className="border-b border-border py-4 text-sm text-muted transition last:border-0 hover:text-accent"
                href={link.href}
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