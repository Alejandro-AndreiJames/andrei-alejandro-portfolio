import { Moon, Sun } from 'lucide-react'

export type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface p-1.5 text-muted transition hover:border-border-strong"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
    >
      <Sun
        className={isDark ? 'text-subtle' : 'text-accent'}
        size={16}
        aria-hidden="true"
      />

      <span className="relative h-6 w-11 rounded-full bg-accent-soft">
        <span
          className={`absolute top-1 left-0 h-4 w-4 rounded-full bg-accent transition-transform duration-200 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </span>

      <Moon
        className={isDark ? 'text-accent' : 'text-subtle'}
        size={16}
        aria-hidden="true"
      />
    </button>
  )
}

export default ThemeToggle
