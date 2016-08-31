import React, { Component } from 'react';

export default class TodosForm extends Component {

	constructor() {
		super();
		this.state = {'content': ''};
	}

	handleChange = event => this.setState(({content: event.target.value}))

	handleSubmit = event => {
		event.preventDefault();
		this.props.handleSubmit(this.state);
	}

	render() {
		return (
			<form id="TodosForm" onSubmit={ this.handleSubmit }>
		        <input 
		        	type="text" 
		        	placeholder="Enter a new todo" 
		        	value={this.state.content} 
		        	onChange={ this.handleChange } />
		        <input type="submit" value="Send" />
	      	</form>
	    )
	}
}