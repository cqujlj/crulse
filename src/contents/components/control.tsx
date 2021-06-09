import React from 'react';
import './control.css';

import { Layout, Menu, Input } from 'antd';
import { NONAME } from 'dns';
const { Header, Content } = Layout;
const { Search } = Input;


//通过接口来声明父组件传递来的参数类型
// interface IProps{
//    all: number,
//  }
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

// const suffix = <div className="icon-search"></div>
const enterButton = <div  style={{fontSize: 12, color: '#1890ff', }} className="icon-search"></div>

const onSearch = (value:string) => console.log(value);


const Control: React.FC = () =>{
    return (
        <Layout className="control">
        <Header  className="control-header">
          <Menu className="agent-menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >All</Menu.Item>
            <Menu.Item key="2" >Physical</Menu.Item>
            <Menu.Item key="3" > Virtual</Menu.Item>
          </Menu>
          <Search
          className='control-search'
          placeholder="input search text"
          enterButton= {enterButton}
          size="large"
          onSearch={onSearch}/>

        </Header>

        {/* <Content className="site-layout" style={{marginTop: 16 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 500}}>
            Content
          </div>
        </Content> */}
        
      </Layout>
    );
  }

  export default Control;

