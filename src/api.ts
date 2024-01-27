import type {
	AbilityDetails,
	APIResponse,
	PokemonPreview,
	Pokemon,
} from './types'

export const fetchAllPokemon = async (): Promise<PokemonPreview[]> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const data: APIResponse<PokemonPreview> = await response.json()
	return data.results
}

export const fetchPokemon = async (url: string): Promise<Pokemon> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(response.statusText)
	}

	const data: Pokemon = await response.json()
	return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchAbility = async (url: string): Promise<AbilityDetails> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(response.statusText)
	}

	const data: AbilityDetails = await response.json()
	return data
}
