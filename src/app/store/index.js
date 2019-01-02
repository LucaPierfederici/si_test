import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import root from './sagas';

export function configureStore(initialState){

  const sagaMiddleware = createSagaMiddleware()

  let middleware = compose(
    applyMiddleware(sagaMiddleware)
  );

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(root)


  return store;
}
