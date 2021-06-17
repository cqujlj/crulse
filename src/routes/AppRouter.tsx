// 配置路由
import Home from '../pages/common/home'
import Agent from "../pages/agent/agent";
import Help from "../pages/help/help";
import Iboard from "../pages/iboard/iboard";
import MyCrulse from "../pages/myCrulse/myCruse";
import PageNotFound from "../pages/common/pageNotFound"


export const mainRoutes = [
    {
        path: '/home',
        component:Home
    },
    {
        path:'/home/agent',
        component:Agent
    },
    {
        path:'/home/help',
        component:Help
    },
    {
        path:'/home/iboard',
        component:Iboard
    },
    {
        path:'/home/myCruse',
        component:MyCrulse
    },
    {
        path:'/404',
        component:PageNotFound
    }
];

