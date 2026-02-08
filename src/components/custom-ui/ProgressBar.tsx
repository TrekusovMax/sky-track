import { Plane } from 'lucide-react'

interface Props {
	progress: number
}

export function ProgressBar({ progress }: Props) {
	return (
		<div className='dark:bg-card h-1 w-full bg-neutral-200/50'>
			<div
				className='relative h-full rounded-full bg-linear-to-r from-rose-500 to-orange-400 opacity-80 transition-all duration-500 ease-in-out'
				style={{ width: `${progress}%` }}
			>
				<Plane
					strokeWidth={0}
					size={28}
					className='fill-foreground absolute top-1/2 -right-2 -translate-y-1/2 rotate-45'
				/>
			</div>
		</div>
	)
}
