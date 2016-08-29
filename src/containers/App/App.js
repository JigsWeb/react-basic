import React, { Component } from 'react';
import { Navigator } from '../../components';

export default class App extends Component {
	render() {
		const { children } = this.props;

		return (
			<div id="app">
				<Navigator />

				<div className="container">
					{ children }
				</div>
			</div>
		)
	}
}