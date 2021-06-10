//修改redux中的数据，必须在reducer中进行

import{AGENT_LOADED_SUCCESS,MODIFY_AGENT_DATA}  from '../constants/index'
import {AGENTAction} from '../actions/agentAction'

// 定义Redux保存的state的结构,保存了类型的定义，我们在整个程序里都可能用到
export interface IStoreState {
    data:[]
}

//state的初始状态
const initialState: IStoreState = {
    data:[]
};

//更新 state  ---这里暂时将action设置为any
const agentReducer = (state=initialState, action: any): IStoreState =>{
    switch (action.type) {
        case AGENT_LOADED_SUCCESS:
            console.log('action.playload',  action.playload)
            return {...state, data: action.playload}; //请求成功需要更新state
        default:
            return state;  //其他情况则state不变
    }
};

export default agentReducer;
