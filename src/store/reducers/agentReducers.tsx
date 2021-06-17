//修改redux中的数据，必须在reducer中进行

import{AGENT_LOADED_SUCCESS,MODIFY_AGENT_DATA}  from '../constants/index'

// 定义Redux保存的state的结构,保存了类型的定义，我们在整个程序里都可能用到
export interface Iitem{
    name: string,
    os: string,
    status: string,
    type: string,
    ip: string,
    location: string,
    resources: [],
    id: number

}
export interface IStoreState {
    data:[Iitem?]
}

//state的初始状态
const initialState: IStoreState = {
    data:[]
};

//更新 state  ---这里暂时将action设置为any
const agentReducer = (state=initialState, action: any): IStoreState =>{
    switch (action.type) {
        case AGENT_LOADED_SUCCESS:
            return {...state, data: action.playload}; 
        case MODIFY_AGENT_DATA:
            state.data.forEach((value,index) => {
                if(value?.id === action.playload.id){
                    state.data.splice(index,1,action.playload)
                }
            })
            return {...JSON.parse(JSON.stringify(state))}
        default:
            return state;  //其他情况则state不变
    }
};

export default agentReducer;
