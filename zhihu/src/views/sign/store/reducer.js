import { fromJS } from 'immutable'

const defaultState = fromJS({
    isLogin: false
});


export default (state = defaultState, action) => {

    if (action.type === 'login') {
        return state.set('isLogin', action.value)
    }

    return state;
}