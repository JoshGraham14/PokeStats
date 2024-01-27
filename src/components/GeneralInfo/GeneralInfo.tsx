import PokemonSpecies, { Pokemon } from '../../types'
import { statNames } from '../../util'
import { AbilityInfo } from '../AbilityInfo/AbilityInfo'
import { TypeBadge } from '../TypeBadge/TypeBadge'
import styles from './GeneralInfo.module.css'

interface Props {
	pokemon: Pokemon | undefined
	pokemonDetails: PokemonSpecies | undefined
	isLoadingDetails: boolean
	isLoading: boolean
}

export const GeneralInfo = (props: Props) => {
	const { pokemon, pokemonDetails, isLoading, isLoadingDetails } = props

	return (
		<div className={`dashboardContainer ${styles.generalInfoContainer}`}>
			<h3>General info</h3>
			{isLoading || isLoadingDetails ? (
				<div>Loading...</div>
			) : (
				<ul className={styles.infoWrapper}>
					<li>
						<label htmlFor='dex-number'>Pokedex: </label>
						<span id='dex-number'>{pokemon?.id}</span>
					</li>
					<li>
						<label htmlFor='gender'>Gender: </label>

						<span id='gender'>
							{pokemonDetails?.gender_rate ? (
								pokemonDetails?.gender_rate === -1 ? (
									'Genderless'
								) : (
									<>
										{(1 - pokemonDetails?.gender_rate / 8) *
											100}{' '}
										<span>%</span>{' '}
										<span className={styles.male}>♂</span>{' '}
										{(pokemonDetails?.gender_rate / 8) *
											100}
										%{' '}
										<span className={styles.female}>♀</span>
									</>
								)
							) : null}
						</span>
					</li>
					<li>
						<label htmlFor='height'>Height:</label>
						<span id='height'>
							{pokemon?.height
								? `${pokemon.height / 10} m`
								: 'unknown'}
						</span>
					</li>
					<li>
						<label htmlFor='weight'>Weight:</label>
						<span id='weight'>
							{pokemon?.weight
								? `${pokemon.weight / 10} kg`
								: 'unknown'}
						</span>
					</li>
					<li className={styles.typesLi}>
						<label htmlFor='types'>Types:</label>
						<span id='types' className={styles.types}>
							{pokemon?.types.map(type => (
								<TypeBadge
									key={type.type.url}
									type={type.type}
								/>
							))}
						</span>
					</li>
					<li>
						<label htmlFor='abilities'>Abilities: </label>
						<span className={styles.itemList}>
							{pokemon?.abilities.map(ability => {
								return (
									<AbilityInfo
										key={ability.ability.url}
										ability={ability}
									/>
								)
							})}
						</span>
					</li>
					<li>
						<label htmlFor='ev-yield'>EV Yield: </label>
						<span className={styles.itemList}>
							{pokemon?.stats.map(stat => {
								return stat.effort > 0 ? (
									<p key={stat.stat.url}>
										{`${stat.effort} ${statNames.get(
											stat.stat.name
										)}`}
									</p>
								) : null
							})}
						</span>
					</li>
				</ul>
			)}
		</div>
	)
}
