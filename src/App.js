import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetch_movielist } from "./api/list";
import { tempItems } from "./constants";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Study from "./components/Study";



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search:{
        query: "",
        display: 10,
        genre: "",
        yearfrom: "",
        yearto: "",
      },
      items: tempItems
    };
  }

  fetchMovieList = async () => {
    const _query=this.state.search.query;

    await fetch_movielist(_query);
  };

  changeHandler = (e) => {
    this.setState({
      search: {
        query: e.target.value
      }
    });
  };
  changeHandler2 = (e) => {
    this.setState({
      search: {
        display: e.target.value
      }
    });
  };
  changeHandler3 = (e) => {
    this.setState({
      search: {
        genre: e.target.value
      }
    });

  };
  changeHandler4 = (e) => {
    this.setState({
      search: {
        yearfrom: e.target.value
      }
    });
  };
  changeHandler5 = (e) => {
    this.setState({
      search: {
        yearto: e.target.value
      }
    });
  };
 
  
  applySearchResult=()=>{

 

    return this.state.items.map((item, id)=>{
      return (
        <div key={id} className="col-sm-4">
          
          <h3>
            title : {item.title} ({item.subtitle})
          </h3>
          <img src={item.image} width="100" height="80" alt="iamges"></img>
          <p>감독 : {item.director}</p>
          <p>출시 년도 : {item.pubDate}</p>
        </div>
      );
    })
  }


  render() {
    
    return (
      <div className="App">
        <Study></Study>
        {/* <h1>Search</h1>
        검색어
        <input type="text" onChange={this.changeHandler}></input>
        최대 출력건수
        <input type="text" onChange={this.changeHandler2}></input>
        검색 시작위치
        <input type="text" onChange={this.changeHandler3}></input>
        년도 시작
        <input type="text" onChange={this.changeHandler4}></input>
        년도 끝
        <input type="text" onChange={this.changeHandler5}></input>
      
        <button onClick={this.fetchMovieList}>검색</button>

        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          {this.applySearchResult()}
        </div> */}
   
       
      </div>
    );
  }
}
