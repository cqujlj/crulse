//修改redux中的数据，必须在reducer中进行

import {StoreState } from '../types/index' 
import{AGENT_LOADED}  from '../constants/index'
import {AGENTAction} from '../actions/agentAction'

//修改
const agentReducer = (state: StoreState, action: AGENTAction): StoreState =>{
    switch (action.type) {
        case AGENT_LOADED:
            console.log('action:',action);
            return {...state};
        default:
            return state;
    }
};
export default agentReducer;
