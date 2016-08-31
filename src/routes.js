import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { App, NotFound, Home } from './containers';

export default () => {
  return (
  	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	        <Route path="about" component={About}/>
	        <Route path="users" component={Users}>
	          <Route path="/user/:userId" component={User}/>
	        </Route>
	        <Route path="*" component={NoMatch}/>
	    </Route>
	</Router>
  )
}