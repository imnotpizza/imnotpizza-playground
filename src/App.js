import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetch_movielist } from "./api/list";
import { tempItems } from "./constants";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Study from "./components/Study";
import Cheerio from "./components/Cheerio";
import CSSModule from './css/CSSModule';
import StyledComponent from './css/StyledComponent'

import './App.css'
import './AppSass.scss'


export default class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo"/>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
        <CSSModule></CSSModule>
        <StyledComponent></StyledComponent>
        {/* 
        <div className="SassComponent">
          <div className="box red"></div>
          <div className="box orange"></div>
          <div className="box yellow"></div>
        </div>
        */}
      </div>
    );
  }
}
