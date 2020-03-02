import React, { useState, useEffect } from "react";
import MovieItem from './MovieItem';

import { fetch_movielist } from "../api/naver";
import Axios from "axios";
import { tempItems } from "../constants";


const MovieList=()=>{
    const [items, setItems]=useState(tempItems);
    
    // useEffect(()=>{
       
    //     const fetchData=async()=>{
    //         const response=await fetch_movielist();

    //         console.log(response)
    //     }

    //     fetchData();
    
    // }, [])

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
      <>
        <h1>Movie LIst</h1>
        {itemList()}
      </>
    );

    
}

export default MovieList;