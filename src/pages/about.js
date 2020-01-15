/*
 * @Author: 寒嫣
 * @Date: 2020-01-10 11:08:29
 * @Description: file content
 */
import * as React from 'react'
import Detail from './detail'
import { Link, Route } from 'react-router-dom';

export default class About extends React.Component{
  render(){
    const {match,routes}=this.props
    // console.log(this.props)
    // console.log(this.props.match.url)
    return(
      <div style={{color:'red'}}>
        <div>关于</div>
        <Link to={`${match.path}/1`}>about1</Link>
        {/* <Link to={`${match.url}/2`}>about2</Link> */}
        {
          routes.map((route,key)=>{
            return <Route key={key} path={route.path}
             render={props=>(
               <route.component {...props} routes={route.routes}/>
             )}
            />
          })
        }
            
      </div>
    )
  }
}
