import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useTheme } from '@/providers/theme/useTheme'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className=''>
			<Button onClick={toggleTheme} variant='secondary' size='icon'>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</Button>
		</div>
	)
}
