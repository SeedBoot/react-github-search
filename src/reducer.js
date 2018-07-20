// import { gitHubMonthQuery } from './utils';

const INITIAL_STATE = {
    // gitHubURL: (lang) => `https://api.github.com/search/repositories?q=language:${lang}+created:>${gitHubMonthQuery}&sort=stars&per_page=3`,
    lang: '',
    date: 1,
    numberOfResults: 3,
    data: undefined
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TERM_CHANGE':
            return { ...state, lang: action.payload }
        case 'DATE_CHANGE':
            return { ...state, date: action.payload }
        case 'NUMBER_OF_RESULTS_CHANGE':
            return { ...state, numberOfResults: action.payload }
        case 'DATA_CHANGE':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}
