import { combineReducers } from 'redux-immutable'
import { reducer as signReducer } from '../views/sign/store'

const reducer = combineReducers({
    sign: signReducer
})

export default reducer