import {call, take, put,all,select,takeEvery} from "redux-saga/effects"
import axios from 'axios'
import {AGENT_LOADED,AGENT_LOADED_SUCCESS,MODIFY_AGENT_DATA} from '../constants/index'
import {IStoreState,Iitem} from '../reducers/agentReducers'

 
//监听到AGENT_LOADED之后，调用axios.get进行数据请求
//如果数据请求成功，触发更新数据,将请求到的数据传到reducer进行更新 
export function* agentSaga(){
    take(AGENT_LOADED)
    const res:IStoreState = yield call(axios.get,"http://localhost:3001/agents/")
    console.log('监听到AGENT_LOADED，请求成功：',res)
    yield put({type: AGENT_LOADED_SUCCESS, playload: res.data })
}

const newItem = {
    id: 1,
    ip: "192.168.1.102",
    location: "/var/lib/cruise-agent",
    name: "bjstdmngbdr01.thoughtworks.com",
    os: "windows",
    resources: ["Firefox", "Safari"],
    status: "idle",
    type: "physical"
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
        agentSaga()
    ])
}