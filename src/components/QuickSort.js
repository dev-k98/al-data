export const quickSort = array => {
	const position = []
	const psudoArray = array.slice()
	console.log(psudoArray)
	sort(psudoArray, 0, psudoArray.length - 1, position)

	return position
}
const sort = (psudoArray, left, pivot, position) => {
	if (left < pivot) {
		const x = psudoArray[pivot]
		let j = left
		for (let i = left; i < pivot; i++) {
			if (psudoArray[i] < x) {
				const pos = {}
				pos.comp = [j, i]
				pos.swap = [j, i, psudoArray[i]]
				position.push(pos)

				const pos2 = {}
				pos2.comp = [i, j]
				pos2.swap = [i, j, psudoArray[j]]
				position.push(pos2)

				let temp = psudoArray[j]
				psudoArray[j] = psudoArray[i]
				psudoArray[i] = temp
				j++
			}
		}
		const pos = {}
		pos.comp = [j, pivot]
		pos.swap = [j, pivot, psudoArray[pivot]]
		position.push(pos)

		const pos2 = {}
		pos2.comp = [pivot, j]
		pos2.swap = [pivot, j, psudoArray[j]]
		position.push(pos2)

		let temp = psudoArray[j]
		psudoArray[j] = psudoArray[pivot]
		psudoArray[pivot] = temp

		sort(psudoArray, left, j - 1, position)
		sort(psudoArray, j + 1, pivot, position)
	}
}
