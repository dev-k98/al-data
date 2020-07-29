export const mergeSort = array => {
	const PsudoArray = array.slice()
	const Positions = []
	merge(array, 0, array.length - 1, PsudoArray, Positions)
	return Positions
}
const merge = (array, left, right, PsudoArray, Positions) => {
	if (left === right) return
	const mid = Math.floor((left + right) / 2)
	merge(PsudoArray, left, mid, array, Positions)
	merge(PsudoArray, mid + 1, right, array, Positions)
	arrenge(array, left, mid, right, PsudoArray, Positions)
}
const arrenge = (array, left, mid, right, PsudoArray, Positions) => {
	let i = left,
		k = left,
		j = mid + 1
	while (i <= mid && j <= right) {
		const position = {}
		position.comp = [i, j]

		if (PsudoArray[i] < PsudoArray[j]) {
			position.swap = [k, i, PsudoArray[i]]
			array[k++] = PsudoArray[i++]
		} else {
			position.swap = [k, j, PsudoArray[j]]
			array[k++] = PsudoArray[j++]
		}

		Positions.push(position)
	}

	while (i <= mid) {
		Positions.push({
			comp: [i, i],
			swap: [k, i, PsudoArray[i]],
		})
		array[k++] = PsudoArray[i++]
	}

	while (j <= right) {
		Positions.push({
			comp: [j, j],
			swap: [k, j, PsudoArray[j]],
		})
		array[k++] = PsudoArray[j++]
	}
}
