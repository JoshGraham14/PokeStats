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

	// Figure out how to get focus working properly
	// If focus is lost (isFoused === false), then the list should disappear

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
