import React from "react";
import Study from "./components/Study";
import ScrollBox from "./components/ScrollBox";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import Hooks from "./components/Hooks";
import { render } from "react-dom";
import "./sass/movieList.scss";

/**
 *
 * App
 * -MovieSearch
 * -MovieList - MovieItem - MovieDetail
 * -MovieFooter
 *
 *
 *
 *
 */

export default class App extends React.Component {
  state = {
    password: "",
    clicked: false,
    validatd: false
  };

  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
  };

  getVldResult = () => {};

  render() {
    return (
      <div>
        <MovieSearch></MovieSearch>
        <br></br>
        <MovieList></MovieList>
        <br></br>
         
      </div>
    );
  }
}
