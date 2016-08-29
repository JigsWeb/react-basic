import React, { Component } from 'react';
import { TodosList } from '../../components';

export default class Home extends Component {

	handleTodosFormSubmit = (todo) => {
		
	}

	render() {
		return (
			<div id="Home">
				<h1>Home - Todos</h1>
				<TodosList todos={[{content: 'Ceci est un test'}]} />
			</div>
		)
	}
}