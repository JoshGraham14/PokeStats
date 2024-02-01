import { useState, RefObject, useEffect, useLayoutEffect } from 'react'

export const useKeyPress = (
	targetKey: string,
	ref: RefObject<HTMLInputElement>
) => {
	const [keyPressed, setKeyPressed] = useState(false)

	const downHandler = ({ key }: { key: string }) => {
		if (key === targetKey) {
			setKeyPressed(true)
		}
	}

	const upHandler = ({ key }: { key: string }) => {
		if (key === targetKey) {
			setKeyPressed(false)
		}
	}

	useEffect(() => {
		ref.current?.addEventListener('keydown', downHandler)
		ref.current?.addEventListener('keyup', upHandler)

		return () => {
			ref.current?.removeEventListener('keydown', downHandler)
			ref.current?.removeEventListener('keyup', upHandler)
		}
	})

	return keyPressed
}

export const useWindowSize = (): number[] => {
	const [size, setSize] = useState([0, 0])
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight])
		}
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])
	return size
}
