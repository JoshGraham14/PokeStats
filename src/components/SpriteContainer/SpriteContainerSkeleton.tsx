import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SpriteContainer.module.css'

export const SpriteContainerSkeleton = () => {
	const windowSize = window.matchMedia('(max-width: 500px)')

	// make sprites larger on mobile
	const width = windowSize.matches ? 105 : 60

	return (
		<div className={styles.skeletonWrapper}>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton circle={true} width={width} height={width} />
				</div>
				<div>
					<Skeleton circle={true} width={width} height={width} />
				</div>
			</div>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton circle={true} width={width} height={width} />
				</div>
				<div>
					<Skeleton circle={true} width={width} height={width} />
				</div>
			</div>
		</div>
	)
}
