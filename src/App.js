import React from "react";
import Study from "./components/Study";
import ScrollBox from "./components/ScrollBox";
import Hooks from "./components/Hooks"
import { render } from "react-dom";


export default class App extends React.Component {

  state={
    password: "",
    clicked: false,
    validatd: false,
  }

  input=React.createRef();

  handleFocus=()=>{
    this.input.current.focus();
  }

  handleChange=(e)=>{
    this.setState({
      password: e.target.value
    })
  }

  handleButtonClick=()=>{
    this.setState({
      clicked: true,
      validated: this.state.password==='0000'
    })

    
  }

  getVldResult=()=>{

  }

  render(){
    return(
      <div>
        {/* <input 
        type="password"
        value={this.state.password}
        onChange={this.handleChange}
        //className={this.getVldResult}
        ></input>
        <br></br>
        <h1>ref 사용</h1>
        <input ref={this.input}></input>

        <button onClick={this.handleButtonClick}>검증하기</button>
        <br></br>
        <br></br>
        <br></br>
        <ScrollBox
        ref={(ref)=>{this.scrollBox=ref}}//scrollbox에 ref 할당
        ></ScrollBox>
        <button onClick={()=>this.scrollBox.scrollToBottom()}>맨 밑으로</button>
         */}
        <Hooks></Hooks>
         

      </div>
    )
  }



}