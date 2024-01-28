import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const BaseStatsSkeleton = () => {
	return (
		<div>
			<p>
				<Skeleton
					count={6}
					height={20}
					style={{ marginBottom: '1.1rem' }}
				/>
			</p>
		</div>
	)
}
