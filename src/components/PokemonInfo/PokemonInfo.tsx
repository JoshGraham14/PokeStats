import { useQuery } from 'react-query'
import { fetchResource } from '../../api'
import { SpriteContainer } from '../SpriteContainer/SpriteContainer'
import { BaseStats } from '../BaseStats/BaseStats'
import { useEffect } from 'react'
import { GeneralInfo } from '../GeneralInfo/GeneralInfo'
import styles from './PokemonInfo.module.css'
import type { Pokemon } from '../../types'

interface Props {
	url: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

export const PokemonInfo = (props: Props) => {
	const { url, setName } = props

	const { data, isLoading, error } = useQuery(url, () =>
		fetchResource<Pokemon>(url)
	)

	useEffect(() => {
		if (data) {
			setName(data.name)
		}
	}, [data, setName])

	if (error) {
		return <div>Something went wrong</div>
	}

	return (
		<div className={styles.infoWrapper}>
			<SpriteContainer
				name={data ? data.name : ''}
				sprites={data ? data.sprites : null}
				isLoading={isLoading}
			/>
			<BaseStats stats={data ? data.stats : []} isLoading={isLoading} />
			<GeneralInfo isLoading={isLoading} pokemon={data} />
		</div>
	)
}
