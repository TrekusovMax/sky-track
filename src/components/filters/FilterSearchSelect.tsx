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

import { Button } from '../ui/button'

interface Props {
	value: string | null
	onChange: (value: string) => void
	data: string[]
	entityName?: string
}

export function FilterSearchSelect({
	data,
	onChange,
	value,
	entityName
}: Props) {
	return (
		<Combobox
			items={data}
			onValueChange={country => {
				onChange(country && value !== country ? country : '')
			}}
			value={value || ''}
		>
			<ComboboxTrigger
				onKeyDown={key => (key.code === 'Escape' ? onChange('') : null)}
				render={
					<Button
						variant='outline'
						role='combobox'
						className='w-45.5 justify-between font-normal opacity-70'
					>
						{value ? <ComboboxValue /> : `Select ${entityName}`}
					</Button>
				}
			/>
			<ComboboxContent>
				<ComboboxInput
					showTrigger={false}
					placeholder={`Select ${entityName}`}
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
	)
}
