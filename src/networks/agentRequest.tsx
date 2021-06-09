import {request} from "./requrie";

// 请求agent数据
export function AgentApi() {
    return request({
        url:'/agents'
    })
}



//修改数据
// export function modifyApi(id:number){
   
// }

// PUT http://localhost:3001/agents/{id}
// {
//     "headers": {
//         "Content-Type": "application/json"
//     },
//     "body": {
    //   "name": "bjstdmngbdr10.thoughtworks.com",
    //   "os": "ubuntu",
    //   "status": "building",
    //   "type": "physical",
    //   "ip": "192.168.1.117",
    //   "location": "/var/lib/cruise-agent",
    //   "resources": [
    //     "Firefox",
    //     "Safari"
    //   ],
    //   "id": 3
    // }
// }



//添加
// export function addApi(data) {
//     return request({
//         url:'/admin/edit',
//         data:data
//     })
// }

//删除
// export function delApi(id) {
//     return request({
//         url:'/admin/modify',
//         id:id
//     })
// }