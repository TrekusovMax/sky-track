import { useMemo, useState } from 'react'

import { Filters } from '../filters/Filters'

import { FlightCart } from './FlightCart'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string>('')

	const filteredFlights = useMemo(() => {
		if (!fromCountry) return FLIGHTS
		return FLIGHTS.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className='w-sm'>
			<Filters fromCountry={fromCountry} setFromCountry={setFromCountry} />
			<div className='space-y-4'>
				{filteredFlights.map(flight => (
					<FlightCart key={flight.id} flight={flight} />
				))}
			</div>
		</div>
	)
}
