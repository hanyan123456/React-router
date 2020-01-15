/*
 * @Author: 寒嫣
 * @Date: 2020-01-10 11:08:22
 * @Description: file content
 */
import * as React from 'react'
import { Link,Route } from 'react-router-dom';
export default class Detail extends React.Component{
  render(){
    // console.log('详情',this.props)
    let {match,routes}=this.props
    console.log(routes)
    return (
      <div>
        {/* 详情 */}
        <Link to ={`${match.path}/detail`}>详情</Link>
      {
          this.props.routes.map((item, index) => {

          // console.log(item)
            return <Route key={index} exact path={item.path} component={item.component} />
          })
        }
    </div>
    )
  }
}