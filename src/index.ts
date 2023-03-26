import fs from 'node:fs/promises'
import { generateTimeSeries } from './timeSeries'
import { shuffleArray } from './utils/random'

const maxItemsCount = 30

const term = {
	from: new Date(2022, 1 - 1, 1),
	to: new Date(2023, 3 - 1, 31),
}

async function generateFile() {
	const timeSeries = shuffleArray(generateTimeSeries(term.from, term.to))
		.slice(0, maxItemsCount)
		.sort((a, b) => a.date <= b.date ? -1 : 1)

	const json = JSON.stringify({
		timeSeries
	})

	await fs.writeFile('./db.json', json)
}

generateFile()
	.then(() => {
		process.exit(0)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
