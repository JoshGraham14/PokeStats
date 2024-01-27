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
	str.charAt(0).toUpperCase() + str.slice(1)
