import React, { useState, useEffect } from "react";
import MovieItem from './MovieItem';

import { fetch_movielist } from "../api/naver";
import Axios from "axios";
import { tempItems } from "../constants";
import '../sass/movieList.scss';


const MovieList=()=>{
    const [items, setItems]=useState(tempItems);
    


    const itemList=()=>{
        return items.map((item, id)=>{
            return (
            
                <div key={id}>
                  <MovieItem movieItem={item}></MovieItem>
                </div>
    
            );
        })
    }
    
    return (
      <div className="container">
        <h1>Movie LIst</h1>
        <div class="col-4">
          A
        </div>
        <div class="col-4">
          B
        </div>
        <div class="col-4">
          C
        </div>

       
      </div>
    );

    
}

export default MovieList;