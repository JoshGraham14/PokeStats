import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SearchBar } from './components/SearchBar/SearchBar'
import './App.css'
import { PokemonInfo } from './components/PokemonInfo/PokemonInfo'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
	const [pokemonUrl, setPokemonUrl] = useState<string>('')
	const queryClient = new QueryClient()

	return (
		<SkeletonTheme baseColor='#202020' highlightColor='#444'>
			<QueryClientProvider client={queryClient}>
				<h1>PokéStats</h1>
				<SearchBar setPokemonUrl={setPokemonUrl} />
				{pokemonUrl !== '' ? <PokemonInfo url={pokemonUrl} /> : null}
			</QueryClientProvider>
		</SkeletonTheme>
	)
}

export default App
