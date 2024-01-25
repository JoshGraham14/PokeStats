import { useQuery } from 'react-query'
import { fetchPokemon } from '../../api'
import styles from './PokemonInfo.module.css'
import { capitalize } from '../../util'
import { SpriteContainer } from '../SpriteContainer/SpriteContainer'

export const PokemonInfo = (props: { url: string }) => {
	const { url } = props

	const { data, isLoading, error } = useQuery(url, () => fetchPokemon(url))

	if (isLoading || data === undefined) return <div>Loading...</div>
	if (error) return <div>Something went wrong</div>

	return (
		<div>
			<h2>{capitalize(data.name)}</h2>
			<SpriteContainer name={data.name} sprites={data.sprites} />
		</div>
	)
}
