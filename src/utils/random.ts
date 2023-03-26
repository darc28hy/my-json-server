import crypto from 'node:crypto'

export const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min)
}

export const getRandomString = (n: number): string => {
	const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	return Array.from(crypto.getRandomValues(new Uint32Array(n)))
		.map((v) => S[v % S.length])
		.join('')
}

export const getUuid = () => {
	return crypto.randomUUID()
}

export const shuffleArray = <T>(array: T[]) => {
	const cloneArray = [...array]

	for (let i = cloneArray.length - 1; i >= 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1))
		const tmpStorage = cloneArray[i]
		cloneArray[i] = cloneArray[rand]
		cloneArray[rand] = tmpStorage
	}

	return cloneArray
}