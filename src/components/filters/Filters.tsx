import { FLIGHTS } from '../flight-list/flights.data'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/select'

interface Props {
	fromCountry: string
	setFromCountry: (country: string) => void
}

const fromCountries = [
	...new Set(FLIGHTS.map(flight => flight.from.country))
]

export function Filters({ fromCountry, setFromCountry }: Props) {
	return (
		<div className='mb-4'>
			<Select
				onValueChange={value =>
					setFromCountry(value === 'all' ? '' : value)
				}
				defaultValue={fromCountry}
			>
				<SelectTrigger className='w-45'>
					<SelectValue placeholder='Choose from' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={'all'}>All</SelectItem>
					{fromCountries.map(country => (
						<SelectItem key={country} value={country}>
							{country}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
