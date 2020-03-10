import React from "react";
import './index.css'


export default class App extends React.Component {

  

  render(){
    return(
      <div >
        <div className="toggle"></div>

        <hr></hr>
        <h1>0</h1>
        <button id="increase">+1</button>
        <button id="decrease">-1</button>
     
      </div>
    )
  }



}