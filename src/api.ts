import type { APIResponse, EvolutionChain, PokemonPreview } from './types'

export const fetchAllPokemon = async (): Promise<PokemonPreview[]> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const data: APIResponse<PokemonPreview> = await response.json()
	return data.results
}

export const fetchResource = async <ResourceType>(
	url: string
): Promise<ResourceType> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const data: ResourceType = await response.json()
	return data
}

export const fetchEvolutionLine = async <EvolutionChain>(
	url: string
): Promise<EvolutionChain> => {
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	const data: EvolutionChain = await response.json()
	return data
}
