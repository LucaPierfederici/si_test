import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import Dashboard from './ui/containers/Dashboard';
import { Login } from './ui/containers/Login';
import { Register } from './ui/containers/Register';

// prepare store
const history = createBrowserHistory();
const store = configureStore();

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
  }

  componentWillMount() {
    this.setState({ logged: this.isLogged() })
  }

  isLogged() {
    const { user } = store.getState();
    return !(Object.keys(user).length === 0);
  }

  render() {
    const unsubscribe = store.subscribe(() => {
      if (this.state.logged != this.isLogged())
        this.setState({ logged: this.isLogged() })
    })
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.state.logged ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login'
            }} />
          )
      )} />
    )
    const LogRedirectRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        !this.state.logged ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/'
            }} />
          )
      )} />
    )
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <LogRedirectRoute path="/login" component={Login} />
            <LogRedirectRoute path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}