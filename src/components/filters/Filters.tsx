import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList
} from '@/components/ui/combobox'

import { FLIGHTS } from '../flight-list/flights.data'

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
			<Combobox
				items={fromCountries}
				onValueChange={country => {
					setFromCountry(country && fromCountry !== country ? country : '')
				}}
				value={fromCountry || ''}
			>
				<ComboboxInput placeholder='Select a country' />
				<ComboboxContent>
					<ComboboxEmpty>No items found.</ComboboxEmpty>
					<ComboboxList>
						{item => (
							<ComboboxItem key={item} value={item}>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
		</div>
	)
}
