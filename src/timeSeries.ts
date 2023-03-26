import { getUuid, getRandomInt, getRandomString } from './utils/random'

type TimeSeries = {
	id: string
	date: string
	number: number
	char: string
}

export const generateTimeSeries = (from: Date, to: Date) => {
	const timeSeries: TimeSeries[] = []
	for (
		let d = from;
		d <= to;
		d.setDate(d.getDate() + 1)
	) {
		timeSeries.push({
			id: getUuid(),
			date: d.toISOString(),
			number: getRandomInt(1, 200),
			char: getRandomString(10),
		})
	}

	return timeSeries
}
