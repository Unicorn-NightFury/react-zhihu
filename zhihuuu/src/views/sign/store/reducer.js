import { fromJS } from 'immutable'  

const defaultState = fromJS({
    isLogin : false,
    registerSuccessfully : false
});

export default( state = defaultState, action) => {  //传入两个参数

    if (action.type === 'login') {
        return state.set('isLogin',action.value)
    }
    if (action.type === 'register') {
        return state.set('registerSuccessfully',action.value)
    }
    return state
}