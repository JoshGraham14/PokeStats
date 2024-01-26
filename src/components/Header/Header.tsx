import { SearchBar } from '../SearchBar/SearchBar'
import './Header.module.css'

interface Props {
	setPokemonUrl: React.Dispatch<React.SetStateAction<string>>
}

export const Header = (props: Props) => {
	const { setPokemonUrl } = props

	return (
		<header>
			<h1>
				<a href='/'>
					Poké<span style={{ color: 'rgb(201, 55, 55)' }}>Stats</span>
				</a>
			</h1>
			<SearchBar setPokemonUrl={setPokemonUrl} />
		</header>
	)
}
