import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from  './components/Home';
import About from './components/About';
import Profile from './components/Profile'
import History from './components/History';


export default class App extends React.Component {

  render(){
    return(
      <div>
       
          <span>
            <Link to="/">홈</Link>
          </span>
          <span>
            <Link to="/about">소개</Link>
          </span>
          <span>
            <Link to="/profile/name1">들어가기</Link>
          </span>
          
        
        {/* 파라미터 추가 */}
        <Route exact={true} path="/profile/:username" component={Profile}></Route>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path={['/about', '/info']} component={About} ></Route>
        <Route exact={true} path="/history" component={History} ></Route>
       
      </div>
    )
  }



}