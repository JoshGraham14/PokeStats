import type { APIResponse, PokemonPreview } from './types'

export const fetchAllPokemon = async (): Promise<PokemonPreview[]> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const data: APIResponse<PokemonPreview> = await response.json()
	return data.results
}
