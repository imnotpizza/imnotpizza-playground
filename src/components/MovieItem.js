import React, {  } from "react";
import { tempItems } from "../constants";
import '../sass/movieItem.scss'



const MovieItem=({movieItem})=>{

    const actors=movieItem.actor.split('|').join(", ");
    const directors = movieItem.director.split("|").join(", ");

   
    return (
      <div className="col-sm-4">
          <h3>제목 : {movieItem.title}</h3>
          <img src={movieItem.image} alt="img"></img>
          <h5>개봉일 : {movieItem.pubDate}</h5>
          <h5>감독 : {directors}</h5>
          <h5>배우 : {actors}</h5>
          <hr></hr>
      </div>
    );
    
    
}

export default MovieItem;
