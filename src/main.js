import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { App, NotFound, Home } from './containers'

const dest = document.getElementById('content');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/react-basic/" component={App}>
    	<IndexRoute component={Home} />
    </Route>
  </Router>
), dest);