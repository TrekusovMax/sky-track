import type { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

interface ISceletonLoader {
	count?: number
	style?: CSSProperties
	className?: string
}

export function SceletonLoader({
	count = 1,
	style,
	className
}: ISceletonLoader) {
	return (
		<>
			{Array.from({ length: count }, (_, index) => (
				<div
					key={index}
					className={cn(
						'bg-flight-card mb-[0.65rem] h-10 animate-pulse rounded-xl last:mb-0',
						className
					)}
					style={style}
				/>
			))}
		</>
	)
}
