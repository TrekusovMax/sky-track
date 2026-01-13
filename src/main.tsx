import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from './Layout.tsx'
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx'
import { Home } from './screens/home/Home.tsx'
import { store } from './store/index.ts'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</StrictMode>
)
