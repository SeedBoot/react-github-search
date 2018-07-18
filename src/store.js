import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

export default createStore(
    reducer,
    applyMiddleware(logger)
);

// store.subscribe()
// store.dispatch()
// store.getState()