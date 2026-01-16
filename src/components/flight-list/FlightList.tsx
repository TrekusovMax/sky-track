import { useEffect, useMemo, useState } from 'react'

import { SceletonLoader } from '../custom-ui/SceletonLoader'
import { Filters } from '../filters/Filters'

import { FlightCart } from './FlightCart'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const [isLoading, setIsLoading] = useState(true)
	const [fromCountry, setFromCountry] = useState<string>('')

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1500)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	const filteredFlights = useMemo(() => {
		if (!fromCountry) return FLIGHTS
		return FLIGHTS.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className='w-sm'>
			<Filters fromCountry={fromCountry} setFromCountry={setFromCountry} />
			<div className='space-y-4'>
				{isLoading ? (
					<SceletonLoader count={5} className='mb-4 h-40' />
				) : (
					filteredFlights.length &&
					filteredFlights.map(flight => (
						<FlightCart key={flight.id} flight={flight} />
					))
				)}
			</div>
		</div>
	)
}
