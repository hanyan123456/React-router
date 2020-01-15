/*
 * @Author: 寒嫣
 * @Date: 2020-01-10 11:38:27
 * @Description: file content
 */
import Home from '../pages/home'
import About from '../pages/about'
import Detail from '../pages/detail'
import Content from '../pages/content'
let  Routes=[
  {
    path:'/',
    component:Home,
    name:'首页',
    exact:true
  },
  {
    path:'/about',
    component:About,
    name:'关于',
    // // exact:true,
    routes:[
      {
        path:'/about/1',
        name:'关于1',
        component:Detail,
        routes:[
          {
            path:'/about/1/detail',
            name:'关于1详情',
            component:Content,
          }
        ]
      },
      // {
      //   path:'/about/1',
      //   name:'关于1',
      //   component:Detail
      // },
      // {
      //   path:'/about/2',
      //   name:'关于2',
      //   component:Detail
      // }
    ]
  },
  {
    path:'/home',
    component:Home,
    name:'商户',
    exact:true
  },
]
export default Routes