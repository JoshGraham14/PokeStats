import { useQuery } from 'react-query'
import { EvolutionMethod } from './EvolutionMethod'
import { fetchEvolutionLine, fetchEvolutionSprites } from '../../api'
import {
	EvolutionChain,
	EvolutionDetail,
	PokemonPreview,
	PokemonSpecies,
} from '../../types'
import {
	capitalize,
	extractEvolutionMethods,
	extractEvolutionNames,
} from '../../util'
import styles from './EvolutionLine.module.css'

interface Props {
	pokemonDetails: PokemonSpecies | undefined
}

export const EvolutionLine = (props: Props) => {
	const { pokemonDetails } = props
	const url = pokemonDetails?.evolution_chain.url
	const { data, isLoading, error } = useQuery(
		[url],
		() => fetchEvolutionLine<EvolutionChain>(url as string),
		{ enabled: url !== undefined }
	)
	const evolutionNames: PokemonPreview[] = data
		? extractEvolutionNames(data.chain)
		: []

	const { data: sprites, isLoading: isLoadingSprites } = useQuery(
		['evolutionSprites', evolutionNames],
		() => fetchEvolutionSprites(evolutionNames),
		{ enabled: evolutionNames.length > 0 }
	)

	const evolutionMethods: (EvolutionDetail | null)[] = data
		? extractEvolutionMethods(data.chain)
		: []

	if (isLoading || isLoadingSprites) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Something went wrong</div>
	}

	return (
		<div className={`dashboardContainer ${styles.evolutionLineWrapper}`}>
			<h3>Evolution Line</h3>

			{!isLoading && !isLoadingSprites ? (
				<div className={styles.evolutionInfoWrapper}>
					{' '}
					{evolutionNames.map((evolution, index) => {
						const evolutionMethod = evolutionMethods[index]
						const currentSprite = sprites ? sprites[index] : null
						return (
							<div
								key={evolution.name}
								className={styles.evoWrapper}
							>
								<EvolutionMethod method={evolutionMethod} />
								<div>
									<img
										className={styles.sprite}
										src={currentSprite?.front_default}
										alt={`${evolution.name}'s front sprite`}
									/>
									<p className={styles.pokemonName}>
										{capitalize(evolution.name)}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}
