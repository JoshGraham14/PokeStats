import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BaseStatsSkeleton } from './BaseStatsSkeleton'
import styles from './BaseStats.module.css'
import type { Pokemon } from '../../types'

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
	isLoading: boolean
}

export const BaseStats = (props: Props) => {
	const { stats, isLoading } = props

	const maxStat: number = Math.max(...stats.map(stat => stat.base_stat))
	let minStat: number = Math.min(...stats.map(stat => stat.base_stat))
	// if all stats are the same,
	// set minStat to 0 (so the stat bars will be green)
	if (minStat === maxStat) {
		minStat = 0
	}

	return (
		<div className={`dashboardContainer ${styles.statsContainer}`}>
			{isLoading ? (
				<BaseStatsSkeleton />
			) : (
				<>
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
											stat.base_stat === minStat
												? styles.red
												: ''
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
				</>
			)}
		</div>
	)
}
