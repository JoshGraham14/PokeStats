import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SpriteContainer.module.css'
import { useWindowSize } from '../../hooks'

export const SpriteContainerSkeleton = () => {
	const [width] = useWindowSize()

	// make sprites larger on mobile
	const spriteSize = width <= 500 ? 105 : 60

	return (
		<div className={styles.skeletonWrapper}>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton
						circle={true}
						width={spriteSize}
						height={spriteSize}
					/>
				</div>
				<div>
					<Skeleton
						circle={true}
						width={spriteSize}
						height={spriteSize}
					/>
				</div>
			</div>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton
						circle={true}
						width={spriteSize}
						height={spriteSize}
					/>
				</div>
				<div>
					<Skeleton
						circle={true}
						width={spriteSize}
						height={spriteSize}
					/>
				</div>
			</div>
		</div>
	)
}
