import React, { Component } from 'react';

export default class TodosList extends Component {
	render() {
		const { todos } = this.props;
		const ListWrapper = (todo, i) => 
			<li key={i}>
				{todo.content}
				 <a href="#">Modifier</a>
				 | <a href="#">Supprimer</a>
			</li>

		return (
			<div id="todosList">
				<h2>Todos List</h2>
				<ul>
					{ todos.map(ListWrapper) }
				</ul>
			</div>
		);
	}
}