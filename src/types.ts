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

export interface Ability {
	name: string
	url: string
	is_hidden: boolean
	slot: number
}

export interface Version {
	name: string
	url: string
}

export interface GameIndex {
	game_index: number
	version: Version
}

export interface Form {
	name: string
	url: string
}

export interface Sprites {
	back_default: string
	back_female: string | null
	back_shiny: string
	back_shiny_female: string | null
	front_default: string
	front_female: string | null
	front_shiny: string
	front_shiny_female: string | null
}

export interface Versions {
	[key: string]: Sprites
}

export interface MoveDetails {
	level_learned_at: number
	move_learn_method: {
		name: string
		url: string
	}
	version_group: {
		name: string
		url: string
	}
}

export interface MoveArrayElement {
	move: {
		name: string
		url: string
	}
	version_group_details: MoveDetails[]
}

export type PokemonMoves = MoveArrayElement[]

export interface Pokemon {
	abilities: Ability[]
	base_experience: number
	forms: Form[]
	game_indices: GameIndex[]
	height: number
	id: number
	is_default: boolean
	location_area_encounters: string
	moves: PokemonMoves
	name: string
	order: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	past_abilities: any[] // Add a proper type if needed
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	past_types: any[] // Add a proper type if needed
	species: {
		name: string
		url: string
	}
	sprites: Sprites
	stats: {
		base_stat: number
		effort: number
		stat: {
			name: string
			url: string
		}
	}[]
	types: {
		slot: number
		type: {
			name: string
			url: string
		}
	}[]
	weight: number
}
