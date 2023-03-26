import fs from 'node:fs/promises'

const date = {
	from: new Date(2022, 1 - 1, 1),
	to: new Date(2023, 3 - 1, 31),
}

const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min)
}

type TimeSeries = {
	date: string
	value: number
}

const generateTimeSeries = () => {
	const timeSeries: TimeSeries[] = []
	for (
		let d = date.from;
		d <= date.to;
		d.setDate(d.getDate() + 1)
	) {
		const randomInt1 = getRandomInt(1, 10)
		const randomInt2 = getRandomInt(1, 50)

		// 3分の1程度の割合で出力
		if (randomInt1 >= 1 && randomInt1 <= 3) {
			timeSeries.push({
				date: `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${(d.getDate()).toString().padStart(2, '0')}`,
				value: randomInt1 * randomInt2
			})
		}
	}

	return timeSeries
}

async function generateFile() {
	const timeSeries = generateTimeSeries()
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
