import { Plane } from 'lucide-react'

import type { IFlight } from '@/types/flight.types'

export function FlightRoute({ flight }: { flight: IFlight }) {
	return (
		<div className='relative mb-1 grid grid-cols-2 gap-1'>
			<div className='bg-card p-element xs:p-6 rounded-tl-xl text-center'>
				<h3 className='xs:text-3xl mb-1.5 text-4xl font-semibold'>
					{flight.from.code}
				</h3>
				<p className='xs:text-base text-foreground/60 mb-1 text-lg font-medium'>
					{flight.from.city}
				</p>
				<p className='text-foreground/60 text-sm font-medium'>
					{flight.from.timezone}
				</p>
			</div>
			<div className='bg-popover absolute top-1/2 left-1/2 mb-2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full'>
				<Plane className='text-amber-400' size={22} />
			</div>
			<div className='bg-card px-element py-element rounded-tr-xl text-center'>
				<h3 className='xs:text-3xl mb-1.5 text-4xl font-semibold'>
					{flight.to.code}
				</h3>
				<p className='xs:text-base text-foreground/60 mb-1 text-lg font-medium'>
					{flight.to.city}
				</p>
				<p className='text-foreground/60 text-sm font-medium'>
					{flight.to.timezone}
				</p>
			</div>
		</div>
	)
}
