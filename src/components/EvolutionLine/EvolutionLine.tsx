import { useQuery } from 'react-query'
import { EvolutionMethod } from './EvolutionMethod'
import { fetchEvolutionLine } from '../../api'
import { EvolutionChain, EvolutionDetail, PokemonSpecies } from '../../types'
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
	const { data, isLoading, error } = useQuery(url as string, () =>
		fetchEvolutionLine<EvolutionChain>(url as string)
	)
	const evolutionNames: string[] = data
		? extractEvolutionNames(data.chain)
		: []

	const evolutionMethods: (EvolutionDetail | null)[] = data
		? extractEvolutionMethods(data.chain)
		: []

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Something went wrong</div>
	}

	return (
		<div className={`dashboardContainer ${styles.EvolutionLineContainer}`}>
			<h3>Evolution Line</h3>
			{evolutionNames.map((name, index) => {
				const evolutionMethod = evolutionMethods[index]
				return (
					<div key={name}>
						<EvolutionMethod method={evolutionMethod} />
						<p>{capitalize(name)}</p>
					</div>
				)
			})}
			<div></div>
		</div>
	)
}
