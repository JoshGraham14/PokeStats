import { useQuery } from 'react-query'
import { fetchPokemon } from '../../api'
import styles from './PokemonInfo.module.css'
import { capitalize } from '../../util'
import { SpriteContainer } from '../SpriteContainer/SpriteContainer'
import { BaseStats } from '../BaseStats/BaseStats'

export const PokemonInfo = (props: { url: string }) => {
	const { url } = props

	const { data, isLoading, error } = useQuery(url, () => fetchPokemon(url))

	if (error) return <div>Something went wrong</div>

	return (
		<div className={styles.infoWrapper}>
			<h2>{data ? capitalize(data.name) : null}</h2>
			<SpriteContainer
				name={data ? data.name : ''}
				sprites={data ? data.sprites : null}
				isLoading={isLoading}
			/>
			<BaseStats stats={data ? data.stats : []} isLoading={isLoading} />
		</div>
	)
}
