import { useQuery } from 'react-query'
import { fetchResource } from '../../api'
import { SpriteContainer } from '../SpriteContainer/SpriteContainer'
import { BaseStats } from '../BaseStats/BaseStats'
import { useEffect } from 'react'
import { GeneralInfo } from '../GeneralInfo/GeneralInfo'
import styles from './PokemonInfo.module.css'
import type { Pokemon, PokemonSpecies } from '../../types'
import { EvolutionLine } from '../EvolutionLine/EvolutionLine'

interface Props {
	url: string
	detailUrl: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonInfo = (props: Props) => {
	const { url, detailUrl, setName } = props

	const {
		data: pokemonData,
		isLoading: pokemonIsLoading,
		error: pokemonError,
	} = useQuery(url, () => fetchResource<Pokemon>(url))

	const {
		data: detailedData,
		isLoading: detailedIsLoading,
		error: detailedError,
	} = useQuery(detailUrl, () => fetchResource<PokemonSpecies>(detailUrl))

	useEffect(() => {
		if (pokemonData) {
			setName(pokemonData.name)
		}
	}, [pokemonData, setName])

	if (pokemonError || detailedError) {
		return <div>Something went wrong</div>
	}

	return (
		<div className={styles.infoWrapper}>
			<SpriteContainer
				name={pokemonData ? pokemonData.name : ''}
				sprites={pokemonData ? pokemonData.sprites : null}
				isLoading={pokemonIsLoading}
			/>
			<BaseStats
				stats={pokemonData ? pokemonData.stats : []}
				isLoading={pokemonIsLoading}
			/>
			<GeneralInfo
				isLoading={pokemonIsLoading}
				pokemon={pokemonData}
				pokemonDetails={detailedData}
				isLoadingDetails={detailedIsLoading}
			/>
			<EvolutionLine pokemonDetails={detailedData} />
		</div>
	)
}
