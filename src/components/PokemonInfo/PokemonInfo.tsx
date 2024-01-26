import { useQuery } from 'react-query'
import { fetchPokemon } from '../../api'
import styles from './PokemonInfo.module.css'
import { SpriteContainer } from '../SpriteContainer/SpriteContainer'
import { BaseStats } from '../BaseStats/BaseStats'
import { useEffect } from 'react'

interface Props {
	url: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonInfo = (props: Props) => {
	const { url, setName } = props

	const { data, isLoading, error } = useQuery(url, () => fetchPokemon(url))

	useEffect(() => {
		if (data) {
			setName(data.name)
		}
	}, [data, setName])

	if (error) {
		return <div>Something went wrong</div>
	}

	return (
		<div className={styles.infoWrapper}>
			<SpriteContainer
				name={data ? data.name : ''}
				sprites={data ? data.sprites : null}
				isLoading={isLoading}
			/>
			<BaseStats stats={data ? data.stats : []} isLoading={isLoading} />
		</div>
	)
}
