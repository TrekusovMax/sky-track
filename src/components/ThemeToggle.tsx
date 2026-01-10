import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/theme/useTheme'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className=''>
			<button
				onClick={toggleTheme}
				className='bg-card flex items-center justify-center rounded-full p-2 transition-colors hover:bg-neutral-800 sm:p-1'
			>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</button>
		</div>
	)
}
