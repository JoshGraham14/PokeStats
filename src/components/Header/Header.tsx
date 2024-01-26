import { capitalize } from '../../util'
import { SearchBar } from '../SearchBar/SearchBar'
import './Header.module.css'

interface Props {
	setPokemonUrl: React.Dispatch<React.SetStateAction<string>>
	name: string
}

export const Header = (props: Props) => {
	const { setPokemonUrl, name } = props

	return (
		<header>
			<h1>
				<a href='/'>
					Poké<span style={{ color: 'rgb(201, 55, 55)' }}>Stats</span>
				</a>
			</h1>
			<SearchBar setPokemonUrl={setPokemonUrl} />
			<h1>{capitalize(name)}</h1>
		</header>
	)
}
