import styles from './BaseStats.module.css'
import type { Pokemon } from '../../types'
import { capitalize } from '../../util'

const statNames = new Map<string, string>([
	['hp', 'HP'],
	['attack', 'Attack'],
	['defense', 'Defense'],
	['special-attack', 'Sp. Atk'],
	['special-defense', 'Sp. Def'],
	['speed', 'Speed'],
])

interface Props {
	stats: Pokemon['stats']
}

export const BaseStats = (props: Props) => {
	const { stats } = props

	const maxStat: number = Math.max(...stats.map(stat => stat.base_stat))
	const minStat: number = Math.min(...stats.map(stat => stat.base_stat))

	return (
		<div className={`dashboardContainer ${styles.statsContainer}`}>
			<h3>Base Stats</h3>
			<ul>
				{stats.map(stat => (
					<li key={stat.stat.name}>
						<label htmlFor={stat.stat.name}>
							{statNames.get(stat.stat.name)}:
						</label>
						<span>{stat.base_stat}</span>
						<div className={styles.statBarWrapper}>
							<div
								id={stat.stat.name}
								className={`${styles.statBar} ${
									stat.base_stat === maxStat
										? styles.green
										: ''
								} ${
									stat.base_stat === minStat ? styles.red : ''
								}`}
								style={{
									width: `${
										(stat.base_stat / maxStat) * 100
									}%`,
								}}
							></div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
