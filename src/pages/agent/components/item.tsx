import React, {useCallback,useState, useEffect} from 'react';
import "./item.css"
import '../../../../public/ASSETS/font icons/fonts.css'
import {modifyAgent} from '../../../store/actions/agentAction'
import {Iitem} from '../../../store/reducers/agentReducers'
import store from '../../../store/index'
import AddResource from '../components/addResource'
import {modifyResources} from '../../../networks/agentRequest'

interface IProps{
  ItemData: Iitem,
}

const Item :React.FC<IProps> = props=> {

  const {name, os, status, ip,location,resources,id} = props.ItemData
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false) 
  //删除某一个item的资源
  const deleteItem = useCallback((index:number) =>{
    resources.splice(index,1)
    store.dispatch(modifyAgent(props.ItemData)) 
    modifyResources({...props.ItemData, resources} )
  },[])

   //用于接收子组件的传值方法，参数为子组件传递过来的值
   const getChildData = useCallback((val:boolean,addData:string) => {
     console.log('要求关闭弹窗', val, addData)
     setIsModalVisible(val)
    if(addData){
      JSON.parse(JSON.stringify(addData.split(','))).forEach((value:never) => {
        resources.push(value)
      });
     store.dispatch(modifyAgent({...props.ItemData, resources}))  
     modifyResources({...props.ItemData, resources} )
    }
    
  },[])

  useEffect(() => {
    console.log('isModalVisible:', isModalVisible)
  },[isModalVisible])

  
  const showModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  },[])


    return (
    <div className="item">
      <div>
        <img src={require('../../../../public/ASSETS/os icons/'+ os +'.png').default} style={{ fontSize:40, float: "left", margin: 8}} />
      </div>
       <div className="item-content-up">
         <div className="item-name">
            <span className="icon-desktop" ></span>
            <a href = '/'>{ name}</a>
          </div>
          <div className={ status === 'idle' ? 'idle' : 'building' }>
            { status}
          </div>
         
          <div className="item-ip">
            <div className="icon-info"></div>
            <span>{ ip}</span>
          </div>

          <div className="item-folder">
            <span className="icon-folder"></span>
            <span>{ location}</span>
          </div>

        </div>
      
        <div className="item-content-down">
          <div className="icon-plus"onClick={showModal}></div>   
          {/* {
             clientY < 500 ? <AddResource isModalVisible={isModalVisible} getChildData={getChildData.bind(this)}/>:null
          } */}

          {
            isModalVisible?
            <AddResource isModalVisible={isModalVisible} getChildData={getChildData.bind(this)}/>
            : 
            null
          } 
          {
          resources.map( (item:string, index:number) => {
            return <div className="resources">
              <span key = {index} className="reader">{item}</span>
              <span className="icon-trash"  onClick = {deleteItem.bind(this,index,id)} ></span>
              </div>
              })
          }
        </div>
    </div>
    );
  }
  export default Item;