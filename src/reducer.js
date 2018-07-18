
const INITIAL_STATE = {
    lang: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TERM_CHANGE':
            return { ...state, lang: action.payload }
        default:
            return state;
    }
}
