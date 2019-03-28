import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from '../reducers';
import rootSaga from '../sagas/rootSaga';
import interceptor from '../utils/interceptors/interceptors';
import createHistory from 'history/createBrowserHistory';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

export default function configureStore() {
  const middleware = [
    sagaMiddleware,
  ];

  const store = createStore(combinedReducers, compose(applyMiddleware(...middleware)));
  interceptor.setupInterceptors(store, history);
  sagaMiddleware.run(rootSaga, store.dispatch);
  return store;
}
