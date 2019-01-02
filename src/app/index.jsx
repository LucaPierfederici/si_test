import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { Dashboard } from './ui/containers/Dashboard';
import { Login } from './ui/containers/Login';
import { Register } from './ui/containers/Register';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}