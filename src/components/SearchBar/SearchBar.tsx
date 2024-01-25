import { createRef, useEffect, useState } from 'react'
import { SearchList } from './SearchList'
import { useKeyPress } from '../../hooks'
import styles from './SearchBar.module.css'
import { PokemonPreview } from '../../types'
import { useQuery } from 'react-query'
import { fetchAllPokemon } from '../../api'
import { capitalize } from '../../util'

interface Props {
	setPokemonUrl: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = (props: Props) => {
	const searchBar = createRef<HTMLInputElement>()
	const [searchTerm, setSearchTerm] = useState('')
	const [selected, setSelected] = useState<PokemonPreview | undefined>(
		undefined
	)
	const downPress = useKeyPress('ArrowDown', searchBar)
	const upPress = useKeyPress('ArrowUp', searchBar)
	const enterPress = useKeyPress('Enter', searchBar)
	const [cursor, setCursor] = useState<number>(0)
	const [hovered, setHovered] = useState<PokemonPreview | undefined>(
		undefined
	)
	const [isFocused, setIsFocused] = useState<boolean>(false)

	const { data, isLoading, error } = useQuery('pokemon', fetchAllPokemon)

	const { setPokemonUrl } = props
	let filteredData: PokemonPreview[] = []

	if (data) {
		filteredData = data.filter(pokemon => {
			if (searchTerm === '') {
				return null
			} else {
				return pokemon.name.includes(searchTerm.toLowerCase())
			}
		})
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelected(undefined)
		setSearchTerm(event.target.value)
		setCursor(0)
	}

	const handleFocusChange = () => {
		setIsFocused(prevState => !prevState)
	}

	useEffect(() => {
		if (filteredData.length && downPress) {
			setCursor(prevState =>
				prevState < filteredData.length - 1 ? prevState + 1 : prevState
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [downPress])
	useEffect(() => {
		if (filteredData.length && upPress) {
			setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upPress])
	useEffect(() => {
		if (filteredData.length && enterPress) {
			setSelected(filteredData[cursor])
			handleSubmit(filteredData[cursor])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cursor, enterPress])
	useEffect(() => {
		if (filteredData.length && hovered) {
			setCursor(filteredData.indexOf(hovered))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hovered])

	const handleSubmit = (pokemon: PokemonPreview | null) => {
		const url = (pokemon ?? selected)?.url
		setPokemonUrl(url ?? '')
	}

	return (
		<div
			className={styles.wrapper}
			onFocus={handleFocusChange}
			onBlur={handleFocusChange}
		>
			<span className={styles.searchForm}>
				<input
					type='text'
					name='search'
					ref={searchBar}
					className={styles.searchInput}
					onChange={handleChange}
					value={selected ? capitalize(selected.name) : searchTerm}
				/>
				<button
					className={styles.searchBtn}
					onClick={() => handleSubmit(null)}
				>
					Search
				</button>
			</span>
			{selected ? null : (
				<SearchList
					data={filteredData}
					isLoading={isLoading}
					error={error}
					isFocused={isFocused}
					cursor={cursor}
					setSelected={setSelected}
					setHovered={setHovered}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	)
}
