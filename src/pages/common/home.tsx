import './home.css'
import { Layout, Menu } from 'antd';
import  React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Agent from '../agent/agent'
import Help from "../help/help";
import Iboard from "../iboard/iboard";
import MyCrulse from "../myCrulse/myCruse";
import {Link,Route,Redirect,Switch} from "react-router-dom"

const {Content, Sider } = Layout;


// 我们不需要将所有参数都显式的结构，使用某些属性时：props.xxx
    const Home: React.FC= () => {
        
        return (
            <div className="home-page">
                    <Layout className = "home-layout">
                      <Sider 
                      className="home-sider"
                      breakpoint="lg"
                      collapsedWidth="0"
                      onBreakpoint={broken => {
                          console.log(broken);
                      }}
                      onCollapse={(collapsed, type) => {
                          console.log(collapsed, type);
                      }}
                      >
                      <Menu className="home-menu" theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                          <Menu.Item key="1" icon={<UserOutlined />}>
                              <Link to="/home/iboard">DAS IBOARD </Link>
                          </Menu.Item>
                          <Menu.Item key="2" icon={<VideoCameraOutlined />} >
                              <Link to="/home/agent"> AGENT  </Link> 
                          </Menu.Item>
                          <Menu.Item key="3" icon={<UploadOutlined />}>
                              <Link to="/home/myCruse"> MY CRULSE</Link> 
                          </Menu.Item>
                          <Menu.Item key="4" icon={<UserOutlined />}>
                              <Link to="/home/help">HELP</Link> 
                          </Menu.Item>
                      </Menu>
                      
                      </Sider>
                      <Layout className="content-layout">
                      <Content className="content">
                          <Switch>
                            <Route path='/home/agent' component = {Agent}/>
                            <Route path='/home/help' component = {Help}/>
                            <Route path='/home/iboard' component = {Iboard}/>
                            <Route path='/home/myCruse' component = {MyCrulse}/>
                            <Redirect from='/' to='/home/agent'/>
                            {/* <Redirect from='' to='/404'/> */}
                            </Switch>
                      </Content>
                      </Layout>
                  </Layout>
                </div>
        );
      }
      export default  Home;
