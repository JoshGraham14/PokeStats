import { Pokemon } from '../../types'
import { capitalize, statNames } from '../../util'
import { TypeBadge } from '../TypeBadge/TypeBadge'
import styles from './GeneralInfo.module.css'

interface Props {
	pokemon: Pokemon | undefined
	isLoading: boolean
}

export const GeneralInfo = (props: Props) => {
	const { pokemon, isLoading } = props

	return (
		<div className={`dashboardContainer ${styles.generalInfoContainer}`}>
			<h3>General info</h3>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ul className={styles.infoWrapper}>
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
								return ability.is_hidden ? (
									<p key={ability.ability.url}>{`${capitalize(
										ability.ability.name
									)}
                                                (hidden)`}</p>
								) : (
									<p key={ability.ability.url}>
										{capitalize(ability.ability.name)}
									</p>
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
