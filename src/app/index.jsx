import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Dashboard } from './ui/containers/Dashboard';

// prepare store
const history = createBrowserHistory();

export class App extends React.Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Router>
    );
  }
}