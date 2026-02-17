import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { SceletonLoader } from '../custom-ui/SceletonLoader'
import { Filters } from '../filters/Filters'

import { FlightCart } from './FlightCart'
import aviationService from '@/services/external/aviation/aviation.service'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string>('')
	const [currentAirline, setCurrentAirline] = useState<string>('')

	const { data, isPending } = useQuery({
		queryKey: ['flights', fromCountry, currentAirline],
		queryFn: () =>
			aviationService.fetchFlights({
				airline: currentAirline,
				fromCountry
			})
	})

	return (
		<div className='relative z-10 w-sm sm:w-full md:w-xs'>
			<Filters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
				currentAirline={currentAirline}
				setCurrentAirline={setCurrentAirline}
			/>

			<div className='max-h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] space-y-4 overflow-x-hidden overflow-y-auto pt-4 pb-5'>
				{isPending ? (
					<SceletonLoader count={5} className='mb-4 h-40' />
				) : (
					(!!data?.data.length &&
						data.data.map(flight => (
							<FlightCart key={flight.flight.number} flight={flight} />
						))) ||
					'No flights found.'
				)}
			</div>
		</div>
	)
}
