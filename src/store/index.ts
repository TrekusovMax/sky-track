import { configureStore } from '@reduxjs/toolkit'

import { favoritesReducer } from './faforites/favorites.slice'

export const store = configureStore({
	reducer: {
		faforites: favoritesReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
