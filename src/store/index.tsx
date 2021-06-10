import {createStore,combineReducers,compose,applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import agentReducer from "./reducers/agentReducers";
import rootSaga from './sagas/agentSaga';


const sagaMiddleware = createSagaMiddleware()

// createStore:用于生成store对象，接受一个函数作为参数，返回新生成的store对象
//当有两个reducer时，需要使用combineReducers
const RootReducer = combineReducers({
    agentReducer
});

//在创建 store 的时传入 redux-thunk 中间件
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));   

sagaMiddleware.run(rootSaga)
export default store;