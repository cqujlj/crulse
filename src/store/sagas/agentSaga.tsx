import {call, take, put,all} from "redux-saga/effects"
import axios from 'axios'
import {AGENT_LOADED,AGENT_LOADED_SUCCESS,MODIFY_AGENT_DATA} from '../constants/index'
import {IStoreState} from '../reducers/agentReducers'

 
//请求数据
    //监听到AGENT_LOADED之后，调用axios.get进行数据请求
    //如果数据请求成功，触发更新数据,将请求到的数据传到reducer进行更新 
export function* agentSaga(){
    console.log('saga开始监听请求数据指令')
    take(AGENT_LOADED)
    const res:IStoreState = yield call(axios.get,"http://localhost:3001/agents/")
    console.log('saga数据请求完成，得到的数据为：', res.data.length) 
    yield put({type: AGENT_LOADED_SUCCESS, playload: res.data })
}


export function* modifyAgentSaga(){
    console.log('saga开始监听修改命令')
    take(MODIFY_AGENT_DATA)
    // 监听到指定action之后，调用axios.get 传入参数进行数据请求
    const res:IStoreState = yield call(axios.get,"http://localhost:3001/agents/")
    console.log('请求更新数据')
    // 如果数据请求成功，触发更新数据,将请求到的数据传到reducer进行更新  
    //  yield put({type: AGENT_LOADED_SUCCESS, playload: {data:res.data} })
}

//请求修改数据
// PUT http://localhost:3001/agents/{id}
// {
//     "headers": {
//         "Content-Type": "application/json"
//     },
//     "body": {MODIFIED AGENT}
// }






export default function* rootSaga(){
    yield all([
        agentSaga(),
        modifyAgentSaga()
    ])
}