import React, { Component } from 'react';

export default class TodosForm extends Component {
	render() {
		<form id="TodosForm">
	        <input type="text" name="content" placeholder="Enter a new todo" />
	        <input type="submit" value="Send" />
      	</form>
	}
}