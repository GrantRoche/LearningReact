import React, { Component } from 'react'
import Table from './Table'


class App extends Component {
	// render() {
		// const characters = [
		// 	{
		// 		name: 'Charlie',
		// 		job: 'Janitor'
		// 	},
		// 	{
		// 		name: 'Mac',
		// 		job: 'Bouncer'
		// 	},
		// 	{
		// 		name: 'Dee',
		// 		job: 'Aspiring actress'
		// 	},
		// 	{
		// 		name: 'Dennis',
		// 		job: 'Bartender'
		// 	}
		// ]

		state = {
			characters: [
				{
					name: 'Charlie',
					job: 'Janitor'
				},
				{
					name: 'Mac',
					job: 'Bouncer'
				},
				{
					name: 'Dee',
					job: 'Aspiring actress'
				},
				{
					name: 'Dennis',
					job: 'Bartender'
				}
			]
		}

		removeCharacter = index => {
			const { characters } = this.state

			this.setState({
				characters: characters.filter((characters, i) => {
					return i !== index
				})
			})
		}

		return (
			
		)

	// 	return (
	// 		<div className="container">
	// 			<Table characterData = { characters } />
	// 		</div>
	// 	)
	// }
}

export default App