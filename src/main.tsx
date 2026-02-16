import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import { CenterLayout } from './components/CenterLayout.tsx'
import { Layout } from './components/Layout.tsx'
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx'
import { Favorites } from './screens/favorites/Favorites.tsx'
import { Home } from './screens/home/Home.tsx'
import { store } from './store/index.ts'

import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<LazyMotion features={domAnimation}>
					<Provider store={store}>
						<BrowserRouter>
							<Routes>
								<Route element={<Layout />}>
									<Route path='/' element={<Home />} />
									<Route element={<CenterLayout />}>
										<Route path='/favorites' element={<Favorites />} />
									</Route>
								</Route>
							</Routes>
						</BrowserRouter>
					</Provider>
				</LazyMotion>
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
