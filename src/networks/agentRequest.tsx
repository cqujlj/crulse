import {request} from "./requrie";
import axios from "axios";
import { Iitem } from '../store/reducers/agentReducers'


// 请求agent数据
export function AgentApi() {
    return request({
        url:'/agents'
    })
}


// 修改数据
export function modifyResources( ItemData: Iitem ){
    axios({
        method:'put',
          url:  'http://localhost:3001/agents/'+ ItemData.id,
        headers: {  'Content-Type': 'application/json' },
        data: JSON.stringify(ItemData)
        }).then((res) => {
                console.log(res)
            }).catch((err)=>{
                console.log(err) 
            })
}