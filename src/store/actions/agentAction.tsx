import { Dispatch } from 'redux'
import{AGENT_LOADED,MODIFY_AGENT_DATA}  from '../constants/index'
 

//提出请求数据
export interface AgentLoaded {
    type: typeof AGENT_LOADED
}


//action包括发起请求、请求成功、请求失败等
export type AGENTAction = AgentLoaded  

export function agentLoaded() {
    return {
        type: AGENT_LOADED
    }
}

export function modifyAgent() {
    console.log('修改数据')
    return {
        type: MODIFY_AGENT_DATA
    }
}



//问题？ typescript怎么使用中间件请求数据 中间件如何监听action来进行请求
//使用中间件saga或thunk来请求数据，监听action，只要action发送过来，就会触发对应的中间件函数调用






// export const agentLoaded =  (payload : string) => async (dispatch: Dispatch)=> {
//     console.log('传来的参数：',payload);
//     const res = await AgentApi;
//     dispatch({
//         type:AGENT_LOADED_SUCCESS,
//         payload:{...res}
//     });
// };
