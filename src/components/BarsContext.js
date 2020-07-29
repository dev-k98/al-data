import React, { useState, useEffect } from "react"
import { mergeSort as merge } from "./SortingAlgo"
import { bubbleSort as bubble } from "./BubbleSort"
import { selectionSort as selection } from "./SelectionSort"
import { quickSort as quick } from "./QuickSort"
const BarsContext = () => {
	//states for diffrent fields

	const [state, setstate] = useState([])
	const [position, setPosition] = useState()
	const [speed, setSpeed] = useState(5)
	const [arraySize, setArraySize] = useState(100)
	const [sort, setSort] = useState("")
	const size = window.innerHeight

	useEffect(() => {
		stateArray()
		// console.log(sort)
		selectSort()
	}, [arraySize, sort])

	const selectSort = () => {
		switch (sort) {
			case "Merge Sort":
				console.log("ran")
				setPosition(merge(state))
				break
			case "Quick sort":
				setPosition(quick(state))
				break
			case "Selection Sort":
				setPosition(selection(state))
				break
			case "Bubble Sort":
				setPosition(bubble(state))
				break
			default:
				break
		}
	}

	const stateArray = () => {
		const array = []
		//create an array of height size of window
		let i = (size - 100) / arraySize
		let l = 0
		let k = i
		while (l < arraySize) {
			array[l] = Math.floor(i)
			i += k
			l++
		}

		//suffling the array elements
		for (let n = 0; n < arraySize; n++) {
			let j = Math.floor(Math.random() * (n + 1))
			;[array[n], array[j]] = [array[j], array[n]]
		}

		setstate(array)
	}

	//animating the bars with specific timeout
	const checkSort = () => {
		console.log(position)
		let animation = []
		for (let i = 0; i < position.length; i++) {
			animation.push(position[i].comp)
			animation.push(position[i].swap)
		}

		for (let i = 0; i < animation.length; i++) {
			const bar = document.getElementsByClassName("single-bar")
			const color = i % 2 === 0 ? `yellow` : `black`

			if (i % 2 !== 0) {
				setTimeout(() => {
					const [a, index, b] = animation[i]
					const abar = bar[a].style
					const bbar = bar[index].style
					abar.backgroundColor = color
					bbar.backgroundColor = color
					abar.height = `${b}px`
				}, i * speed)
			} else {
				const [a, b] = animation[i]
				const abar = bar[a].style
				const bbar = bar[b].style

				setTimeout(() => {
					abar.backgroundColor = color
					bbar.backgroundColor = color
				}, i * speed)
			}
		}
	}

	return (
		<div className="screen-container">
			<div className="button-bar">
				<select
					placeholder="select"
					onChange={e => setSort(e.target.value)}
				>
					<option>Merge Sort</option>
					<option>Quick sort</option>
					<option>Selection Sort</option>
					<option>Bubble Sort</option>
				</select>
				<input
					placeholder="time in miliseconds"
					value={speed}
					onChange={e => {
						setSpeed(e.target.value)
					}}
					required
				></input>
				<input
					placeholder="size"
					value={arraySize}
					onChange={e => {
						setArraySize(e.target.value)
					}}
					required
				></input>
				<button onClick={stateArray}>Shuffle</button>
				<button className="start-button" onClick={checkSort}>
					Start
				</button>
			</div>

			<div className="bar-container">
				{state.map((arr, i) => {
					return (
						<li
							className="single-bar"
							style={{
								height: `${arr}px`,
							}}
							key={i}
						></li>
					)
				})}
			</div>
		</div>
	)
}

export default BarsContext
