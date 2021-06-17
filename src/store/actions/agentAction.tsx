import {Iitem} from '../reducers/agentReducers'
import{AGENT_LOADED, MODIFY_AGENT_DATA}  from '../constants/index'
import axios from 'axios'
 
export interface AgentLoaded {
    type: typeof AGENT_LOADED
}
export interface ModifyAgent {
    type: typeof MODIFY_AGENT_DATA
}

export type AGENTAction = AgentLoaded | ModifyAgent


//请求所有数据
export function agentLoaded() {
    return {
        type: AGENT_LOADED
    }
}

export function  modifyAgent(item: Iitem, ) {
    return {
                type: MODIFY_AGENT_DATA,
                playload: {...item}
            }
}
