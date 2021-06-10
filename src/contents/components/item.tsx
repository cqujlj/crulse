import React, { useState,useEffect } from 'react';
import "./item.css"
import '../../../public/ASSETS/font icons/fonts.css'
import {modifyAgent} from '../../store/actions/agentAction'

//通过接口来声明父组件传递来的参数类型
interface IProps{
  ItemData: {
    name: string,
    status: string,
    location:string;
    ip: string;
    os: string;
    resources: [],
    id:number
  }
}
const Item :React.FC<IProps> = props=> {


  const addResource = () =>{
    console.log('添加一个Resource')
    //发送请求 修改后台数据 传递id和修改后的数据
  }

  //删除某一个item
  const deleteItem = (index:number) =>{
    console.log('删除这个resource',index) //如何获取这个item的id 发送请求时需要id
    props.ItemData.resources.splice(index,1)  //删除指定索引的元素
    //是直接在此put请求更新数据？
    //发送请求 修改后台数据 传递id和修改后的数据
    modifyAgent()
  }

    return (

    <div className="item">
      <div>
        <img src={require('../../../public/ASSETS/os icons/'+ props.ItemData.os +'.png').default}
        style={{ fontSize:40, float: "left", margin: 8}} />
      </div>
       <div className="item-content-up">
         <div className="item-name">
            <span className="icon-desktop" ></span>
            <a href = '/'>{props.ItemData.name}</a>
          </div>
          <div className={props.ItemData.status === 'idle' ? 'idle' : 'building' }>
            {props.ItemData.status}
          </div>
         
          <div className="item-ip">
            <div className="icon-info"></div>
            <span>{props.ItemData.ip}</span>
          </div>

          <div className="item-folder">
            <span className="icon-folder"></span>
            <span>{props.ItemData.location}</span>
          </div>

        </div>

        <div className="item-content-down">
          <div className="icon-plus" onClick={addResource}> </div>
          {
          props.ItemData.resources.map( (item:string, index:number) => {
            return <div className="resources">
              <span key = {index} className="reader">{item}</span>
              <span className="icon-trash"  onClick={deleteItem.bind(this,index)}></span>
              </div>
              })
          }
        </div>

    </div>
    );
  }
  export default Item;