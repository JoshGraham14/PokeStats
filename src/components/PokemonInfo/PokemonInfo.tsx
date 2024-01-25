import { useQuery } from 'react-query'
import { fetchPokemon } from '../../api'
import styles from './PokemonInfo.module.css'
import { capitalize } from '../../util'

export const PokemonInfo = (props: { url: string }) => {
	const { url } = props

	const { data, isLoading, error } = useQuery(url, () => fetchPokemon(url))

	if (isLoading || data === undefined) return <div>Loading...</div>
	if (error) return <div>Something went wrong</div>

	return (
		<div>
			<h2>{capitalize(data.name)}</h2>
			<span>
				<img
					src={data.sprites.front_default}
					alt={`${data.name}'s front sprite`}
				/>
				<img
					src={data.sprites.back_default}
					alt={`${data.name}'s back sprite`}
				/>
			</span>
			<span>
				<img
					src={data.sprites.front_shiny}
					alt={`${data.name}'s shiny front sprite`}
				/>
				<img
					src={data.sprites.back_shiny}
					alt={`${data.name}'s shiny back sprite`}
				/>
			</span>
		</div>
	)
}
