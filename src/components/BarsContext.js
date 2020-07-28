import React, { useState, useEffect } from "react"
import { mergeSort as merge } from "./SortingAlgo"

const BarsContext = () => {
	const [state, setstate] = useState([])

	useEffect(() => {
		stateArray()
	}, [])

	const stateArray = () => {
		const array = []
		for (let i = 0; i < 200; i++) {
			array.push(Math.floor(Math.random() * (600 - 10) + 10))
		}
		setstate(array)
	}

	const checkSort = () => {
		let position = merge(state)
		let animation = []
		for (let i = 0; i < position.length; i++) {
			animation.push(position[i].comp)
			animation.push(position[i].swap)
		}

		for (let i = 0; i < animation.length; i++) {
			const bar = document.getElementsByClassName("single-bar")
			const color = i % 2 === 0 ? `blue` : `black`

			if (i % 2 !== 0) {
				setTimeout(() => {
					const [a, index, b] = animation[i]
					const abar = bar[a].style
					const bbar = bar[index].style
					abar.backgroundColor = color
					bbar.backgroundColor = color
					abar.height = `${b}px`
				}, i * 5)
			} else {
				const [a, b] = animation[i]
				const abar = bar[a].style
				const bbar = bar[b].style

				setTimeout(() => {
					abar.backgroundColor = color
					bbar.backgroundColor = color
				}, i * 5)
			}
		}
	}

	// const { value } = state
	return (
		<div className="screen-container">
			<div className="button-bar">
				<button onClick={stateArray}>Shuffle</button>
				<button onClick={checkSort}>check</button>
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
