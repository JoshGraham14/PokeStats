import styles from './SearchList.module.css'
import { capitalize } from '../../util'
import { PokemonPreview } from '../../types'

interface Props {
	data: PokemonPreview[]
	isLoading: boolean
	error: unknown
	isFocused: boolean
	cursor: number
	setSelected: React.Dispatch<
		React.SetStateAction<PokemonPreview | undefined>
	>
	setHovered: React.Dispatch<React.SetStateAction<PokemonPreview | undefined>>
}

export const SearchList = (props: Props) => {
	const {
		data,
		isLoading,
		error,
		isFocused,
		cursor,
		setSelected,
		setHovered,
	} = props

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error || !data) {
		return <p>Error Loading Pokemon</p>
	}

	// TODO: Fix focus
	// If focus is lost (isFoused === false), then the list should disappear
	// Due to render order, the list disappears before the onClick event can be registered

	return (
		<ul className={styles.searchList}>
			{data.map((pokemon, index) => (
				<li
					key={pokemon.url}
					className={index === cursor ? styles.active : ''}
					onClick={() => {
						setSelected(pokemon)
					}}
					onMouseEnter={() => setHovered(pokemon)}
					onMouseLeave={() => setHovered(undefined)}
				>
					{capitalize(pokemon.name)}
				</li>
			))}
		</ul>
	)
}
