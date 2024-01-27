import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { PokemonInfo } from './components/PokemonInfo/PokemonInfo'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Header } from './components/Header/Header'

function App() {
	const [pokemonUrl, setPokemonUrl] = useState<string>('')
	const [detailUrl, setDetailUrl] = useState<string>('')
	const [name, setName] = useState<string>('')
	const queryClient = new QueryClient()
	const lightMode = window.matchMedia('(prefers-color-scheme: light)').matches

	useEffect(() => {
		if (name) {
			setDetailUrl(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
		}
	}, [name])

	return (
		<SkeletonTheme
			baseColor={lightMode ? '#cecece' : '#202020'}
			highlightColor={lightMode ? '#e2e2e2' : '#444'}
		>
			<QueryClientProvider client={queryClient}>
				<Header setPokemonUrl={setPokemonUrl} name={name} />
				{pokemonUrl !== '' ? (
					<PokemonInfo
						url={pokemonUrl}
						detailUrl={detailUrl}
						setName={setName}
					/>
				) : null}
			</QueryClientProvider>
		</SkeletonTheme>
	)
}

export default App
