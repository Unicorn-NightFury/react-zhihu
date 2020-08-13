import { combineReducers } from 'redux-immutable';
import { reducer as signReducer } from '../views/sign/store'


const rootReducer = combineReducers({
    sign: signReducer
});//将reducers收集起来

export default rootReducer;