import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const BaseStatsSkeleton = () => {
	return (
		<div>
			<h3>
				<Skeleton
					height={40}
					style={{ marginBottom: '0.75rem', marginTop: '1.2rem' }}
				/>
			</h3>
			<p>
				<Skeleton
					count={6}
					height={20}
					style={{ marginBottom: '1rem' }}
				/>
			</p>
		</div>
	)
}
