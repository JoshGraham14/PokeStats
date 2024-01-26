import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SpriteContainer.module.css'

export const SpriteContainerSkeleton = () => {
	return (
		<div>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton circle={true} width={60} height={60} />
				</div>
				<div>
					<Skeleton circle={true} width={60} height={60} />
				</div>
			</div>
			<div className={styles.skeletonFlex}>
				<div>
					<Skeleton circle={true} width={60} height={60} />
				</div>
				<div>
					<Skeleton circle={true} width={60} height={60} />
				</div>
			</div>
		</div>
	)
}
