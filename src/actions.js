import { createAction } from 'redux-actions';

const TERM_CHANGE = 'TERM_CHANGE';
export const termChange = createAction(TERM_CHANGE);

const DATA_CHANGE = 'DATA_CHANGE';
export const dataChange = createAction(DATA_CHANGE);
