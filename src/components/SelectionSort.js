export const selectionSort = array => {
	const position = []
	const psudoArray = array.slice()
	for (let i = 0; i + 1 < psudoArray.length; i++) {
		let x = i
		for (let j = i; j < psudoArray.length; j++) {
			if (psudoArray[x] > psudoArray[j]) {
				//swap j and j++
				//set array correct
				const pos = {}
				pos.comp = [j, x]
				pos.swap = [j, x, psudoArray[j]]
				position.push(pos)
				x = j
			}
			// else {
			// }
		}
		const pos1 = {}
		pos1.comp = [i, x]
		pos1.swap = [i, x, psudoArray[x]]
		position.push(pos1)
		const pos2 = {}
		pos2.comp = [x, i]
		pos2.swap = [x, i, psudoArray[i]]
		position.push(pos2)

		let temp = psudoArray[i]
		psudoArray[i] = psudoArray[x]
		psudoArray[x] = temp
	}
	return position
}
