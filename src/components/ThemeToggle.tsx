import { useTheme } from '@/providers/theme/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className="p-2 sm:p-1 rounded-full bg-card hover:bg-neutral-800
         transition-colors flex items-center justify-center"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}
