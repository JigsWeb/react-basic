import React, { Component } from 'react';
import { TodosList, TodosForm } from '../../components';

export default class Home extends Component {

	constructor() {
		super();
		this.state = {todos: []};
	}

	handleTodosFormSubmit = todo => this.setState((prevState) => ({'todos': [todo].concat(prevState.todos) }) )

	render() {
		const { todos } = this.state;

		console.log(todos);

		return (
			<div id="Home">
				<h1>Home - Todos</h1>
				<TodosForm handleSubmit={ this.handleTodosFormSubmit } />
				<TodosList todos={ todos } />
			</div>
		)
	}
}