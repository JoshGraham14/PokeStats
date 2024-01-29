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
	ability: {
		name: string
		url: string
	}
	is_hidden: boolean
	slot: number
}

export interface AbilityDetails {
	flavor_text_entries: {
		flavor_text: string
		language: {
			name: string
			url: string
		}
		version_group: {
			name: string
			url: string
		}
	}[]
}

export interface Type {
	id: number
	name: string
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

export interface PokemonSpecies {
	id: number
	name: string
	order: number
	gender_rate: number
	capture_rate: number
	base_happiness: number
	is_baby: boolean
	is_legendary: boolean
	is_mythical: boolean
	hatch_counter: number
	has_gender_differences: boolean
	forms_switchable: boolean
	growth_rate: {
		name: string
		url: string
	}
	pokedex_numbers: {
		entry_number: number
		pokedex: {
			name: string
			url: string
		}
	}[]
	egg_groups: {
		name: string
		url: string
	}[]
	color: {
		name: string
		url: string
	}
	shape: {
		name: string
		url: string
	}
	evolves_from_species?: {
		name: string
		url: string
	}
	evolution_chain: {
		url: string
	}
	generation: {
		name: string
		url: string
	}
	names: {
		name: string
		language: {
			name: string
			url: string
		}
	}[]
	flavor_text_entries: {
		flavor_text: string
		language: {
			name: string
			url: string
		}
		version: {
			name: string
			url: string
		}
	}[]
	form_descriptions: {
		description: string
		language: {
			name: string
			url: string
		}
	}[]
	genera: {
		genus: string
		language: {
			name: string
			url: string
		}
	}[]
	varieties: {
		is_default: boolean
		pokemon: {
			name: string
			url: string
		}
	}[]
}

export interface Item {
	id: NumberConstructor
	name: string
	sprites: {
		default: string
	}
}

export interface EvolutionDetail {
	item: Item
	trigger: {
		id: number
		name: string
	}
	gender: number
	held_item: Item
	known_move: {
		id: number
		name: string
	}
	known_move_type: Type
	location: {
		id: number
		name: string
	}
	min_level: number
	min_happiness: number
	min_beauty: number
	min_affection: number
	needs_overworld_rain: boolean
	party_species: PokemonSpecies
	party_type: Type
	relative_physical_stats: number
	time_of_day: string
	trade_species: PokemonSpecies
	turn_upside_down: boolean
}

export interface ChainLink {
	is_baby: boolean
	species: PokemonSpecies
	evolution_details: EvolutionDetail[]
	evolves_to: ChainLink[]
}

export interface EvolutionChain {
	id: number
	baby_trigger_item: Item
	chain: ChainLink
}
