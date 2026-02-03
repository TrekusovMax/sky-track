import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxTrigger,
	ComboboxValue
} from '@/components/ui/combobox'

import { FLIGHTS } from '../flight-list/flights.data'
import { Button } from '../ui/button'

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
				<ComboboxTrigger
					onKeyDown={key =>
						key.code === 'Escape' ? setFromCountry('') : null
					}
					render={
						<Button
							variant='outline'
							className='w-64 justify-between font-normal'
						>
							{fromCountry ? <ComboboxValue /> : 'Select a country'}
						</Button>
					}
				/>
				<ComboboxContent>
					<ComboboxInput
						showTrigger={false}
						placeholder='Select a country'
					/>

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
