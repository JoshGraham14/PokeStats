import { ChainLink, EvolutionDetail } from './types'

export const statNames = new Map<string, string>([
	['hp', 'HP'],
	['attack', 'Attack'],
	['defense', 'Defense'],
	['special-attack', 'Sp. Atk'],
	['special-defense', 'Sp. Def'],
	['speed', 'Speed'],
])

export const typeColours = new Map<string, string>([
	['bug', '#A8AE26'],
	['dark', '#534B4B'],
	['dragon', '#5867E1'],
	['electric', '#FFDF00'],
	['fairy', '#FFB5FF'],
	['fighting', '#FFA702'],
	['fire', '#FF662E'],
	['flying', '#9CD3FF'],
	['ghost', '#734876'],
	['grass', '#45C826'],
	['ground', '#B17D3B'],
	['ice', '#44DFFF'],
	['normal', '#ABACAC'],
	['poison', '#9E4FD6'],
	['psychic', '#FF6885'],
	['rock', '#C0BC8C'],
	['steel', '#6FB7DD'],
	['water', '#2B99FF'],
])
export const capitalize = (str: string) =>
	str
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join('-')

export const extractEvolutionNames = (
	chain: ChainLink
): { name: string; url: string }[] => {
	let names = [
		{
			name: chain.species.name,
			url: `https://pokeapi.co/api/v2/pokemon/${chain.species.name}`,
		},
	]

	if (chain.evolves_to.length > 0) {
		names = names.concat(extractEvolutionNames(chain.evolves_to[0]))
	}

	return names
}

export const extractEvolutionMethods = (
	chain: ChainLink,
	isFirstPokemon = true
): (EvolutionDetail | null)[] => {
	let methods: (EvolutionDetail | null)[] = isFirstPokemon ? [null] : []

	if (chain.evolves_to.length > 0) {
		methods = methods.concat(chain.evolves_to[0].evolution_details[0])
		methods = methods.concat(
			extractEvolutionMethods(chain.evolves_to[0], false)
		)
	}

	return methods
}
