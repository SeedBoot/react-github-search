import { handleActions } from 'redux-actions';


export default handleActions({
    [termChange](state) {
        return state;
    }
}, '')

// export const formReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case termChange:
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             })
//         default:
//             return state
//     }
// }