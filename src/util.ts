export const statNames = new Map<string, string>([
	['hp', 'HP'],
	['attack', 'Attack'],
	['defense', 'Defense'],
	['special-attack', 'Sp. Atk'],
	['special-defense', 'Sp. Def'],
	['speed', 'Speed'],
])

export const capitalize = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1)
