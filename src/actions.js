import { createAction } from 'redux-actions';

const TERM_CHANGE = 'TERM_CHANGE';
export const termChange = createAction(TERM_CHANGE);

const DATE_CHANGE = 'DATE_CHANGE';
export const dateChange = createAction(DATE_CHANGE);

const NUMBER_OF_RESULTS_CHANGE = 'NUMBER_OF_RESULTS_CHANGE';
export const numberOfResultsChange = createAction(NUMBER_OF_RESULTS_CHANGE);

const DATA_CHANGE = 'DATA_CHANGE';
export const dataChange = createAction(DATA_CHANGE);

const DATA_SUCCESS = 'DATA_SUCCESS';
export const dataSuccess = createAction(DATA_SUCCESS);

const DATA_FAILURE = 'DATA_FAILURE';
export const dataFailure = createAction(DATA_FAILURE);