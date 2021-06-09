import React from 'react'
import './header.css';
import logo from '../../../public/ASSETS/logo/logo.svg';


const HeaderTool: React.FC = () =>{
  return (
    <div className="header">
        <img src ={logo} className="logo-img"></img>
    </div>
  );
}
export default HeaderTool;
