import React, { useState, useCallback } from 'react';
import './control.css';
import { Layout, Menu, Input } from 'antd';
import Item from './item'
import { Iitem } from '../../../store/reducers/agentReducers';
const { Header, Content } = Layout;
const { Search } = Input;


interface IProps{
  agentData:[ Iitem ]
}

const Control: React.FC<IProps> = (props) =>{



  const [agentList, setAgentList] = useState<[Iitem]>(props.agentData)
  const [searchValue, setSearchValue]  = useState<string>('')

  const enterButton = <div className="icon-search"></div>

 


  const selectData = useCallback((param?: string) => {
    const newList:[Iitem] = JSON.parse(JSON.stringify(props.agentData.filter( (value:Iitem) => value.type === param )))
    setAgentList(newList)
  },[])

  //这里只进行了name和ip的搜索
  const searchData = useCallback((param: string)=>{
    const newList:[Iitem] = JSON.parse(JSON.stringify(props.agentData.filter( (value:Iitem) => 
    (value.name.indexOf(param) !== -1)  || (value.ip.indexOf(param) !== -1))))
    setAgentList(newList)
  },[])

  const selector = useCallback((param?: string) => {
    setSearchValue('')
    switch(param){
      case 'physical':
        selectData(param)
        break;
      case 'virtual':
        selectData(param)
        break;
        default:
          setAgentList(props.agentData)
          break;
    }
  },[])
 

  // const onSearch = (value:string) => {
  //   searchData(value)
  // }

  const onChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    searchData(event.target.value)
    setSearchValue(event.target.value)
  }



    return (
        <Layout className="control">
        <Header  className="control-header">
          <Menu className="agent-menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick= {()=>selector()}>All</Menu.Item>
            <Menu.Item key="2"  onClick={()=>selector('physical')}>Physical</Menu.Item>
            <Menu.Item key="3" onClick={()=>selector('virtual')} > Virtual</Menu.Item>
          </Menu>
          <Search
          className='control-search'
          placeholder="input search text"
          enterButton = {enterButton}
          size="large"
          value={searchValue}
          onChange={onChange}
          />
        </Header>
        

        <Content className="control-layout">
          <div className="control-content" style={{ padding: 0, minHeight: 300}}>
          {
            agentList.map( (item) => {
                return <Item 
                key = {item.id} 
                ItemData = {item} />
              })
            }
          </div>
        </Content>
      </Layout>
    );
  }

  export default Control;

