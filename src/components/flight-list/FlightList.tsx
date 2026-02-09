import { /* useEffect ,*/ useMemo, useState } from 'react'

import { SceletonLoader } from '../custom-ui/SceletonLoader'
import { Filters } from '../filters/Filters'

import { FlightCart } from './FlightCart'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const isLoading = false
	//const [isLoading, setIsLoading] = useState(true)
	const [fromCountry, setFromCountry] = useState<string>('')
	const [currentAirline, setCurrentAirline] = useState<string>('')

	/* useEffect(() => {
		
		setIsLoading(false)
	}, []) */

	const filteredFlights = useMemo(() => {
		if (!fromCountry && !currentAirline) return FLIGHTS
		return FLIGHTS.filter(flight => {
			const matchesFromCountry =
				!fromCountry || flight.from.country === fromCountry
			const matchesAirline =
				!currentAirline || flight.airline.country === currentAirline
			return matchesFromCountry && matchesAirline
		})
	}, [fromCountry, currentAirline])

	return (
		<div className='relative z-10 w-sm sm:w-full md:w-xs'>
			<Filters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
				currentAirline={currentAirline}
				setCurrentAirline={setCurrentAirline}
			/>
			<div className='space-y-4'>
				{isLoading ? (
					<SceletonLoader count={5} className='mb-4 h-40' />
				) : (
					(filteredFlights.length &&
						filteredFlights.map(flight => (
							<FlightCart key={flight.id} flight={flight} />
						))) ||
					'No flights found.'
				)}
			</div>
		</div>
	)
}
