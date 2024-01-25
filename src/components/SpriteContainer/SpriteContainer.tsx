import type { Sprites } from '../../types'

import styles from './SpriteContainer.module.css'

interface Props {
	name: string
	sprites: Sprites
}

export const SpriteContainer = (props: Props) => {
	const { name, sprites } = props

	return (
		<div className={`dashboardContainer ${styles.spriteContainer}`}>
			<h3>Sprites</h3>
			<span>
				<img
					src={sprites.front_default}
					alt={`${name}'s front sprite`}
				/>
				<img src={sprites.back_default} alt={`${name}'s back sprite`} />
			</span>
			<span>
				<img
					src={sprites.front_shiny}
					alt={`${name}'s shiny front sprite`}
				/>
				<img
					src={sprites.back_shiny}
					alt={`${name}'s shiny back sprite`}
				/>
			</span>
		</div>
	)
}
