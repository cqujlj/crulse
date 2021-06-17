import  React,{useEffect} from 'react';
import './agent.css'
import {agentLoaded} from '../../store/actions/agentAction'
import { connect } from 'react-redux';
import { Iitem } from '../../store/reducers/agentReducers';
import * as actions from '../../store/actions/agentAction';
import Display from './components/display'
import Control from './components/control'



//   函数式组件

/* 有类型约束的函数式组件的写法
type UserInfo = {
  name: string,
  age: number,
}
export const User = ({ name, age }: UserInfo)  => {}
export const User:React.FC<UserInfo> = ({ name, age }) => {}

使用useState：const [count, setCount] = useState<number>(0) 
*/


//定义一个对象数组
interface IProps{
    agentData:[ Iitem ]
  }

// 我们不需要将所有参数都显式的结构，使用某些属性时：props.xxx
    const Agent: React.FC<IProps> = (props) => {

        useEffect( () => {  agentLoaded()  }, [])
        
        return (
             <div className="agent-page">
                  {
                      props.agentData.length > 0 
                      ? 
                      <div>
                          <Display agentData={props.agentData}/>
                          <Control agentData={props.agentData}/>
                      </div>
                      : 
                      <div>数据正在加载......</div>
                      }    
                </div>
        );
      }


    const mapStateToProps = (state: any) => {
        return {
            agentData:state.agentReducer.data
        }
      }

    

    const mapDispatchToProps = ( dispatch: any )  =>({

        onLoadAgent: () => dispatch(actions.agentLoaded()),
        onModifyAgent:(item:Iitem) => dispatch(actions.modifyAgent(item))
   })

      export default connect(mapStateToProps, mapDispatchToProps)(Agent);










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
// export default connect(mapStateToProps) (Home);