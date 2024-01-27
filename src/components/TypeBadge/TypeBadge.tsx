import { capitalize, typeColours } from '../../util'
import styles from './TypeBadge.module.css'

interface Props {
	type: {
		name: string
		url: string
	}
}

export const TypeBadge = (props: Props) => {
	const { type } = props
	return (
		<div
			className={styles.typeBadge}
			style={{ backgroundColor: typeColours.get(type.name) }}
		>
			<img
				src={`src/assets/type-icons/${type.name}.png`}
				alt={`${type.name} Type`}
			/>
			<p>{capitalize(type.name)}</p>
		</div>
	)
}
