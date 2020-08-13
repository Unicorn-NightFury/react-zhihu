import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

//拓展程序的插件用法  增强函数
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))  //增强函数

const store = createStore(rootReducer,  enhancer );//创建store，只接受两个变量，
export default store;


