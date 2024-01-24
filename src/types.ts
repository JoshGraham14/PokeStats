export interface APIResponse<ResponseType> {
	count: number
	next: string | null
	previous: string | null
	results: ResponseType[]
}

export interface PokemonPreview {
	name: string
	url: string
}
