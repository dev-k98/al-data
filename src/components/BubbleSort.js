export const bubbleSort = array => {
	const position = []
	const psudoArray = array.slice()
	for (let i = 0; i + 1 < psudoArray.length; i++) {
		for (let j = 0; j + 1 < psudoArray.length - i; j++) {
			// let k = 0
			if (psudoArray[j] > psudoArray[j + 1]) {
				//swap j and j++
				const pos = {}
				pos.comp = [j, j + 1]
				pos.swap = [j, j + 1, psudoArray[j + 1]]
				position.push(pos)
				const pos2 = {}
				pos2.comp = [j + 1, j]
				pos2.swap = [j + 1, j, psudoArray[j]]
				position.push(pos2)

				//set array correct
				let temp = psudoArray[j]
				psudoArray[j] = psudoArray[j + 1]
				psudoArray[j + 1] = temp
			} else {
				const pos = {}
				pos.comp = [j, j + 1]
				pos.swap = [j + 1, j, psudoArray[j + 1]]
				position.push(pos)
			}
		}
	}
	return position
}
