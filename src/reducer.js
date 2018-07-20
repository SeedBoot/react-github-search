const INITIAL_STATE = {
    lang: '',
    date: 1,
    numberOfResults: 3,
    data: undefined,
    langData: {},
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
        case 'DATA_SUCCESS':
            return {
                ...state,
                langData: {
                    ...state.langData,
                    [action.payload[0].language]: action.payload
                }
            }
        default:
            return state;
    }
}
