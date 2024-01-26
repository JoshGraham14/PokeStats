import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { PokemonInfo } from './components/PokemonInfo/PokemonInfo'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Header } from './components/Header/Header'

function App() {
	const [pokemonUrl, setPokemonUrl] = useState<string>('')
	const queryClient = new QueryClient()

	return (
		<SkeletonTheme baseColor='#202020' highlightColor='#444'>
			<QueryClientProvider client={queryClient}>
				<Header setPokemonUrl={setPokemonUrl} />
				{pokemonUrl !== '' ? <PokemonInfo url={pokemonUrl} /> : null}
			</QueryClientProvider>
		</SkeletonTheme>
	)
}

export default App
