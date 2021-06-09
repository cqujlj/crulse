import { Dispatch } from 'redux'
import {AgentApi} from "../../networks/agentRequest";
import{AGENT_LOADED}  from '../constants/index'
 
export interface AgentLoaded {
    type: typeof AGENT_LOADED
}

export type AGENTAction = AgentLoaded ;


export function agentLoaded(): AgentLoaded {
    return {
        type: AGENT_LOADED
    }
}

//问题？ typescript怎么使用中间件请求数据 中间件如何监听action来进行请求
//使用中间件saga或thunk来请求数据，监听action，只要action发送过来，就会触发对应的中间件函数调用



// export const agentLoaded =  (payload : string) => async (dispatch: Dispatch)=> {
//     console.log('传来的参数：',payload);
//     const res = await AgentApi;
//     dispatch({
//         type:AGENT_LOADED,
//         payload:{...res}
//     });
// };
