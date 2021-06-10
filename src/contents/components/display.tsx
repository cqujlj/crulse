import React ,{ useEffect, useState} from 'react';
import './display.css'

//通过接口来声明父组件传递来的参数类型
//定义对象接口
interface Iitem{
   name: string,
   os: string,
   status: string,
   type: string,
   ip: string,
   location: string,
   resources: [],
   id: number

}
interface IProps{
   agentData:[ Iitem ]
 }


const Display:React.FC<IProps> = props=> {

   const [idleCount, setIdleCount] = useState<number>(0)
   const [physicalCount, setPhysicalCount] = useState<number>(0)

   useEffect(() => {
      let p_count: number = 0;
      console.log(' props.agentData~~~~',  props.agentData)
      props.agentData.forEach( item => {
         if(item.type === 'physical'){
            p_count++;
         }
      })
      setPhysicalCount(p_count);
   },[props])

   useEffect(() => {
      let i_count : number = 0;
      props.agentData.forEach( item => {
         if(item.status === 'idle'){
            i_count++;
         }
      })
      setIdleCount(i_count)
   },[props])


    return (
    <div className="display"> 

       <div className="display-build">
          <span className='build-name'>Building</span>
          <span className="icon-cog"></span>
          <span className='build-value'>{props.agentData.length-idleCount}</span>
       </div>

       <div className="display-idle">
          <span className='idle-name'>Idle</span>
          <div className="icon-coffee"></div>
          <span className='idle-value'>{idleCount}</span>
       </div>

       <div className="display-mess">
          <div className="all">
            <p className="mess-name">ALL</p>
            <p className='mess-value'>{props.agentData.length}</p>
          </div>

          <div  className="physical">
            <p className="mess-name">PHYSICAL</p>
            <p className='mess-value'>{physicalCount}</p>
          </div>
          
          <div className="virtual">
             <p className="mess-name">VIRTUAL</p>
            <p className='mess-value'>{props.agentData.length - physicalCount}</p>
          </div>
       </div>
    </div>
    );
  }
  export default Display;
