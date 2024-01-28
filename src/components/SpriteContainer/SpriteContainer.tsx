import type { Sprites } from '../../types'

import styles from './SpriteContainer.module.css'
import { SpriteContainerSkeleton } from './SpriteContainerSkeleton'

interface Props {
	name: string
	sprites: Sprites | null
	isLoading: boolean
}

export const SpriteContainer = (props: Props) => {
	const { name, sprites, isLoading } = props

	return (
		<div className={`dashboardContainer ${styles.spriteContainer}`}>
			<h3>Sprites</h3>
			{isLoading ? (
				<SpriteContainerSkeleton />
			) : (
				<>
					<div>
						{sprites?.front_default ? (
							<img
								src={sprites?.front_default}
								alt={`${name}'s front sprite`}
							/>
						) : null}

						{sprites?.back_default ? (
							<img
								src={sprites?.back_default}
								alt={`${name}'s back sprite`}
							/>
						) : null}
					</div>
					<div>
						{sprites?.front_shiny ? (
							<img
								src={sprites?.front_shiny}
								alt={`${name}'s shiny front sprite`}
							/>
						) : null}

						{sprites?.back_shiny ? (
							<img
								src={sprites?.back_shiny}
								alt={`${name}'s shiny back sprite`}
							/>
						) : null}
					</div>
				</>
			)}
		</div>
	)
}
