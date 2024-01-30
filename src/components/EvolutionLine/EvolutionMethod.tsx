import { EvolutionDetail } from '../../types'
import { capitalize } from '../../util'
import styles from './EvolutionLine.module.css'

interface Props {
	method: EvolutionDetail | null
}

// TODO: Add more evolution methods
// - Gender-based evolution
// - Party species/type-based evolution
// - Relative physical stats-based evolution (hitmonchan/hitmonlee/htimontop)
// - Split evolution lines (such as eevee)
// - Add sprites for each evolution
// - Add icons for items, gender, etc.

export const EvolutionMethod = (props: Props) => {
	const { method } = props

	let result: JSX.Element | null = null

	if (method === null) {
		return null
	}

	if (method?.trigger.name === 'level-up') {
		result = (
			<p>Level {method.min_level ? method.min_level : 'up while:'}</p>
		)
	}

	if (method?.location) {
		result = (
			<>
				{result}
				<p>&nbsp;at {capitalize(method.location.name)}</p>
			</>
		)
	}

	if (method?.turn_upside_down) {
		result = (
			<>
				{result}
				<p>&nbsp;While holding console upside down</p>
			</>
		)
	}

	if (method?.min_happiness) {
		result = (
			<>
				{result}
				<p>&nbsp;Friendship is high</p>
			</>
		)
	}

	if (method?.min_affection) {
		result = (
			<>
				{result}
				<p>&nbsp;Affection is high</p>
			</>
		)
	}

	if (method?.min_beauty) {
		result = (
			<>
				{result}
				<p>&nbsp;Beauty is high</p>
			</>
		)
	}

	if (method?.trigger.name === 'use-item') {
		result = <p>Use {capitalize(method.item.name)}</p>
	}

	if (method?.trigger.name === 'trade') {
		if (method.trade_species) {
			result = <p>Trade for {capitalize(method.trade_species.name)}</p>
		} else {
			result = <p>Trade {method.held_item ? 'while: ' : null}</p>
		}
	}

	if (method.known_move) {
		result = (
			<>
				{result}
				<p>Knowing {capitalize(method.known_move.name)}</p>
			</>
		)
	}

	if (method.known_move_type) {
		result = (
			<>
				{result}
				<p>
					Knowing move of type{' '}
					{capitalize(method.known_move_type.name)}
				</p>
			</>
		)
	}

	if (method?.held_item) {
		result = (
			<>
				{result}
				<p>&nbsp;holding {capitalize(method.held_item.name)}</p>
			</>
		)
	}

	if (method?.time_of_day) {
		result = (
			<>
				{result}
				<p>&nbsp;during {method.time_of_day}</p>
			</>
		)
	}

	if (method?.needs_overworld_rain) {
		result = (
			<>
				{result}
				<p>&nbsp;while it's raining</p>
			</>
		)
	}

	if (method) {
		return (
			<div className={styles.evolutionMethod}>
				<img src='/src/assets/svg/right-arrow.svg' alt='Down arrow' />
				{result}
			</div>
		)
	}
}
