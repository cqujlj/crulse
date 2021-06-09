import React, { useState,useEffect } from 'react';
import "./item.css"
// import windows from '../../../public/ASSETS/os icons/windows.png'
// import ubuntu from '../../../public/ASSETS/os icons/ubuntu.png'
// import debian from '../../../public/ASSETS/os icons/debian.png'
// import suse from '../../../public/ASSETS/os icons/suse.png'
// import cent_os from '../../../public/ASSETS/os icons/cent_os.png'
import '../../../public/ASSETS/font icons/fonts.css'

//通过接口来声明父组件传递来的参数类型
interface IProps{
  ItemData: {
    name: string,
    status: string,
    location:string;
    ip: string;
    os: string;
    resources: [],


  }
}
const Item :React.FC<IProps> = props=> {

  //

  const addResource = () =>{
    console.log('添加一个Resource')
  }
  //删除某一个item
  const deleteItem = () =>{
    console.log('删除这个item')
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
          props.ItemData.resources.map( (item, index) => {
            return <div className="resources">
              <span key = {index} className="reader">{item}</span>
              <span className="icon-trash"  onClick={deleteItem}></span>
              </div>
              })
          }
        </div>

    </div>
    );
  }
  export default Item;