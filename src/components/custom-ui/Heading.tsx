interface Props {
	children: React.ReactNode
}

export function Heading({ children }: Props) {
	return (
		<div className='text-foreground mb-4 text-3xl font-bold'>
			{children}
		</div>
	)
}
