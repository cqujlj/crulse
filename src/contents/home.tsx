import { Layout, Menu } from 'antd';
import  React,{useEffect, useState} from 'react';

import './home.css'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import * as actions from '../store/actions/agentAction';
import {agentLoaded} from '../store/actions/agentAction'
import { StoreState } from '../store/types/index';
import { connect  } from 'react-redux';
import {Dispatch} from 'redux'

import Item from '../contents/components/item'
import Display from '../contents/components/display'
import Control from '../contents/components/control'

const { Header, Content, Sider } = Layout;

  

// 函数式组件
    const Home: React.FC = () => {

        //设置一个变量来存储请求得来的数据
        //报错：类型 "{}" 中缺少属性 "dataInfo"，但类型 "IProps" 中需要该属性
        const [dataInfo, setDataInfo] = useState({ agentsInfo: [] });
    
        useEffect(() => {
            fetch('http://localhost:3001/agents/')
            .then(res => res.json())
            .then(data => {
                // 获得的data是数组，里面的元素均为对象
                console.log('获取到的数据：', data)  
                setDataInfo({
                    agentsInfo:data
                })

                console.log('AgentsInfo：', dataInfo.agentsInfo)  
            })
        }, [])
    
    
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
                      {/* <div className="logo" /> */}
                      <Menu className="home-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                          <Menu.Item key="1" icon={<UserOutlined />}>
                          DAS IBOARD
                          </Menu.Item>
                          <Menu.Item key="2" icon={<VideoCameraOutlined />} >
                          AGENT
                          </Menu.Item>
                          <Menu.Item key="3" icon={<UploadOutlined />}>
                          MY CRULSE
                          </Menu.Item>
                          <Menu.Item key="4" icon={<UserOutlined />}>
                          HELP
                          </Menu.Item>
                      </Menu>
                      </Sider>
                      <Layout className="content-layout">
                      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                      <Content className="content">
                          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                              <Display 
                                all = {dataInfo.agentsInfo.length} 
                                physical = {dataInfo.agentsInfo.length} 
                                virtual = {dataInfo.agentsInfo.length} 
                                allIdel = {dataInfo.agentsInfo.length} 
                                allBlimding = {dataInfo.agentsInfo.length} 
                              />
                              <Control/>
                              <div>
                                  {
                                      dataInfo.agentsInfo.length > 0 
                                      ? 
                                      <div>
                                          {
                                          dataInfo.agentsInfo.map( (item, index) => {
                                              return <Item key = {index} ItemData = {item}/>
                                            })
                                          }
                                      </div>
                                      : 
                                      <div>null</div>
                                  }
                              </div>
                          </div>
                      </Content>
                      </Layout>
                  </Layout>
                </div>
        );
      }


    const mapStateToProps = ({ agentInfo }: StoreState) => {
        console.log('StoreState:',agentInfo)
        return {
            agentInfo
        }
      }

      
     const mapDispatchToProps = (dispatch: Dispatch<actions.AGENTAction> ) => {
        return {
          onLoadAgent: ( ) => dispatch(actions.agentLoaded())
        }
      }

      export default connect(mapStateToProps, mapDispatchToProps)(Home);








//类组件

// 通过接口声明状态
// interface IProps{
//     dataInfo: {
//         agentsInfo: [ ]
//     }
//   }

// export default class Home extends React.Component<{}, IProps>{
//     public constructor(props: any){
//         super(props);
//         this.state = {
//             dataInfo:{
//                 agentsInfo: []
//             }
//         }
//     }
    //请求数据
    // public componentDidMount(){
    //     fetch('http://localhost:3001/agents/')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             dataInfo : {
    //                 agentsInfo: data
    //             }
    //         },() => {
    //             console.log('我的satae：', this.state.dataInfo)
    //         })
            
    //         console.log('获取到的数据：', data.length)
    //     })
    // }
//     public render(){
//         return (
//             <div className="home-page">
//                 <Layout className = "home-layout">
//                   <Sider 
//                   className="home-sider"
//                   breakpoint="lg"
//                   collapsedWidth="0"
//                   onBreakpoint={broken => {
//                       console.log(broken);
//                   }}
//                   onCollapse={(collapsed, type) => {
//                       console.log(collapsed, type);
//                   }}
//                   >
//                   {/* <div className="logo" /> */}
//                   <Menu className="home-menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//                       <Menu.Item key="1" icon={<UserOutlined />}>
//                       DAS IBOARD
//                       </Menu.Item>
//                       <Menu.Item key="2" icon={<VideoCameraOutlined />} >
//                       AGENT
//                       </Menu.Item>
//                       <Menu.Item key="3" icon={<UploadOutlined />}>
//                       MY CRULSE
//                       </Menu.Item>
//                       <Menu.Item key="4" icon={<UserOutlined />}>
//                       HELP
//                       </Menu.Item>
//                   </Menu>
//                   </Sider>
//                   <Layout className="content-layout">
//                   <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//                   <Content className="content">
//                       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//                           <Display 
//                             all = {this.state.dataInfo.agentsInfo.length} 
//                             physical = {this.state.dataInfo.agentsInfo.length} 
//                             virtual = {this.state.dataInfo.agentsInfo.length} 
//                             allIdel = {this.state.dataInfo.agentsInfo.length} 
//                             allBlimding = {this.state.dataInfo.agentsInfo.length} 
//                           />
//                           <Control/>
//                           <div>
//                               {
//                                   this.state.dataInfo.agentsInfo.length > 0 
//                                   ? 
//                                   <div>
//                                       {
//                                       this.state.dataInfo.agentsInfo.map( (item, index) => {
//                                           return <Item key = {index} ItemData = {item}/>
//                                         })
//                                       }
//                                   </div>
//                                   : 
//                                   <div>null</div>
//                               }
//                           </div>
//                       </div>
//                   </Content>
//                   </Layout>
//               </Layout>
//             </div>
//           );
//     }
// }
// mapStateToProps将当前store里的数据以我们的组件需要的形式传递到组件。
// mapDispatchToProps利用dispatch函数，创建回调props将actions送到store

// const mapStateToProps = state => state.agents; 
// export default connect(mapStateToProps) (Frame);