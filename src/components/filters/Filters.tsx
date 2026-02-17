import { FLIGHTS } from '../flight-list/flights.data'

import { FilterSearchSelect } from './FilterSearchSelect'

interface Props {
	fromCountry: string
	setFromCountry: (country: string) => void

	currentAirline: string
	setCurrentAirline: (airline: string) => void
}

const fromCountries = [
	...new Set(FLIGHTS.map(flight => flight.from.country))
]
const airlines = [
	...new Set(FLIGHTS.map(flight => flight.airline.country))
]

export function Filters({
	fromCountry,
	setFromCountry,
	currentAirline,
	setCurrentAirline
}: Props) {
	return (
		<div className='ml-1 grid grid-cols-2 gap-3'>
			<FilterSearchSelect
				data={fromCountries}
				onChange={setFromCountry}
				value={fromCountry}
				entityName='country'
			/>
			<FilterSearchSelect
				data={airlines}
				onChange={setCurrentAirline}
				value={currentAirline}
				entityName='airline'
			/>
		</div>
	)
}
