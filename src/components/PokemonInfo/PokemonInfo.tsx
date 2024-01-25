import styles from './PokemonInfo.module.css'

export const PokemonInfo = (props: { url: string }) => {
	const { url } = props
	return <div>This is a pokemon: {url}</div>
}
