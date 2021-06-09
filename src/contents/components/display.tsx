import React from 'react';
import './display.css'

//通过接口来声明父组件传递来的参数类型
interface IProps{
   all: number,
   physical: number,
   virtual: number,
   allIdel:number,
   allBlimding: number,
 }


const Display:React.FC<IProps> = props=> {
    return (
    <div className="display"> 

       <div className="display-build">
          <span className='build-name'>Building</span>
          <span className="icon-cog"></span>
          <span className='build-value'>{props.allBlimding}</span>
       </div>

       <div className="display-idle">
          <span className='idle-name'>Idle</span>
          <div className="icon-coffee"></div>
          <span className='idle-value'>{props.allBlimding}</span>
       </div>

       <div className="display-mess">
          <div className="all">
            <p className="mess-name">ALL</p>
            <p className='mess-value'>{props.all}</p>
          </div>

          <div  className="physical">
            <p className="mess-name">PHYSICAL</p>
            <p className='mess-value'>{props.physical}</p>
          </div>
          
          <div className="virtual">
             <p className="mess-name">VIRTUAL</p>
            <p className='mess-value'>{props.virtual}</p>
          </div>
       </div>
    </div>
    );
  }
  export default Display;

