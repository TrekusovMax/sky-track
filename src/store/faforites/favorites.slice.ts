import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const LS_KEY = 'favorites'
const getFavoritesFromLocalStorage = (): string[] => {
	const favorites = localStorage.getItem(LS_KEY)
	if (!favorites) return []
	try {
		return JSON.parse(favorites)
	} catch (error) {
		console.error('Error parsing favorites from localStorage:', error)
		return []
	}
}
const saveFavoritesToLocalStorage = (favorites: string[]) => {
	localStorage.setItem(LS_KEY, JSON.stringify(favorites))
}

const initialState: string[] = getFavoritesFromLocalStorage()

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<string>) => {
			console.log('save before ', state)
			if (!state.includes(action.payload)) {
				state.push(action.payload)
				saveFavoritesToLocalStorage(state)
			}
			console.log('save after ', state)
		},
		removeFavorite: (state, action: PayloadAction<string>) => {
			console.log('remove before ', state)
			state = state.filter(id => id !== action.payload)
			console.log('remove after ', state)

			saveFavoritesToLocalStorage(state)
		}
	}
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
