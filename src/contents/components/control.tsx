import React from 'react';
import './control.css';
import { Layout, Menu, Input } from 'antd';
import Item from './item'
const { Header, Content } = Layout;
const { Search } = Input;

//与父组件相同的参数结构
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

const enterButton = <div  style={{fontSize: 12, color: '#1890ff', }} className="icon-search"></div>
const onSearch = (value:string) => console.log("搜索：",value);

const Control: React.FC<IProps> = (props) =>{
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

        <Content className="site-layout" style={{marginTop: 16 }}>
          <div className="site-layout-background" style={{ padding: 0, minHeight: 500}}>
          {
            props.agentData.map( (item) => {
                return <Item key = {item.id} ItemData = {item}/>
              })
            }
          </div>
        </Content>
      </Layout>
    );
  }

  export default Control;

