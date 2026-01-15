interface Props {
	children: React.ReactNode
}
export function SubHeading({ children }: Props) {
	return (
		<div className='text-foreground mb-6 text-base opacity-70'>
			{children}
		</div>
	)
}
