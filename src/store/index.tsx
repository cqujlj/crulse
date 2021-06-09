import {createStore,combineReducers,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import agentReducer from "./reducers/agentReducers";


// createStore:用于生成store对象，接受一个函数作为参数，返回新生成的store对象
//当有两个reducer时，需要使用combineReducers
const RootReducer = combineReducers({
    agentReducer
});
const store = createStore(RootReducer,compose(applyMiddleware(...[thunk])));
export default store;