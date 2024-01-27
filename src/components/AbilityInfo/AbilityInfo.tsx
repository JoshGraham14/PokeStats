import { useQuery } from 'react-query'
import { fetchResource } from '../../api'
import { Ability } from '../../types'
import { capitalize } from '../../util'
import styles from './AbilityInfo.module.css'
import type { AbilityDetails } from '../../types'

interface Props {
	ability: Ability
}

export const AbilityInfo = (props: Props) => {
	const { ability } = props
	const { data } = useQuery(ability.ability.url, () =>
		fetchResource<AbilityDetails>(ability.ability.url)
	)

	const description =
		data?.flavor_text_entries?.find(entry => entry.language.name === 'en')
			?.flavor_text ?? 'No description available'

	return (
		<div className={styles.ability}>
			<p className='tooltip' key={ability.ability.url}>
				{`${capitalize(ability.ability.name)}
                    ${ability.is_hidden ? '(hidden)' : ''}`}
				<span className='tooltip-text'>{description}</span>
			</p>
		</div>
	)
}
