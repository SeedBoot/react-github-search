import { createStore } from 'redux';
import githubSearch from '../actions';

export const store = createStore(githubSearch)