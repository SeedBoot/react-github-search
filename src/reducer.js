
const INITIAL_STATE = {
    lang: '',
    data: undefined
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TERM_CHANGE':
            return { ...state, lang: action.payload }
        case 'DATA_CHANGE':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}
