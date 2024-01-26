import 'react-loading-skeleton/dist/skeleton.css'
import { BaseStatsSkeleton } from './BaseStatsSkeleton'
import styles from './BaseStats.module.css'
import type { Pokemon } from '../../types'
import { statNames } from '../../util'

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
			<h3>Base Stats</h3>
			{isLoading ? (
				<BaseStatsSkeleton />
			) : (
				<>
					<ul className={styles.statsWrapper}>
						{stats.map(stat => (
							<li key={stat.stat.name}>
								<label htmlFor={stat.stat.name}>
									{statNames.get(stat.stat.name)}:
								</label>
								<span>{stat.base_stat}</span>
								<div className={styles.statBarWrapper}>
									{/* This is super ugly, but basically each
									stat bar is being drawn on to the screen.
									If it's the max stat, it's green.
									If it's the min stat, it's red.
									All other stats are yellow by default
									the width is the stat scaled to be between
									0 to 100 % */}
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
