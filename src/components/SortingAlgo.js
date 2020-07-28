export const mergeSort = array => {
	const SudoArray = array.slice()
	const Positions = []
	merge(array, 0, array.length - 1, SudoArray, Positions)
	return Positions
}
const merge = (array, left, right, SudoArray, Positions) => {
	if (left === right) return
	const mid = Math.floor((left + right) / 2)
	merge(SudoArray, left, mid, array, Positions)
	merge(SudoArray, mid + 1, right, array, Positions)
	arrenge(array, left, mid, right, SudoArray, Positions)
}
const arrenge = (array, left, mid, right, SudoArray, Positions) => {
	let i = left,
		k = left,
		j = mid + 1
	while (i <= mid && j <= right) {
		const position = {}
		position.comp = [i, j]

		if (SudoArray[i] < SudoArray[j]) {
			position.swap = [k, i, SudoArray[i]]
			array[k++] = SudoArray[i++]
		} else {
			position.swap = [k, j, SudoArray[j]]
			array[k++] = SudoArray[j++]
		}

		Positions.push(position)
	}

	while (i <= mid) {
		Positions.push({
			comp: [i, i],
			swap: [k, i, SudoArray[i]],
		})
		array[k++] = SudoArray[i++]
	}

	while (j <= right) {
		Positions.push({
			comp: [j, j],
			swap: [k, j, SudoArray[j]],
		})
		array[k++] = SudoArray[j++]
	}
}
