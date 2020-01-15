/*
 * @Author: 寒嫣
 * @Date: 2020-01-10 11:04:36
 * @Description: file content
 */
import React from 'react';
import {  BrowserRouter as Router, Route, Link,  withRouter ,Switch} from 'react-router-dom';
import Routes from './router/config'
// import Index from './pages/index'
// import Home from './pages/home'
// import About from './pages/about'


const App=()=> (
 
  <Router>
    <ul>
      {Routes.map((item, key) => (<Link to={item.path} key={key}><li>{item.name}</li></Link>))}

      {/* <Link to="/about">关于</Link>
      <Link to="/home">商户</Link> */}
    </ul>
    {
      Routes.map((route, key) => {
        // console.log(Routes)
        if (route.exact) {

          return <Route key={key} exact path={route.path}
            render={props => (

              <route.component {...props} routes={route.routes} name={route.routes}/>
            )}

          />
        } else {
          return <Route key={key} path={route.path}
            render={props => {
              // console.log(route.component)
              return <route.component {...props} routes={route.routes} name={route.routes}/>
            }}
          />

        }
      })
    }
  </Router>
)




export default App;
