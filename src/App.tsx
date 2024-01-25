import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SearchBar } from './components/SearchBar/SearchBar'
import './App.css'
import { PokemonInfo } from './components/PokemonInfo/PokemonInfo'

function App() {
	const [pokemonUrl, setPokemonUrl] = useState<string>('')
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<h1>PokéStats</h1>
			<SearchBar setPokemonUrl={setPokemonUrl} />
			{pokemonUrl !== '' ? <PokemonInfo url={pokemonUrl} /> : null}
		</QueryClientProvider>
	)
}

export default App
