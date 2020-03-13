import React, {useState, useEffect} from "react";
import { tempItems } from "../constants";
import Modal from "react-awesome-modal";
import "../sass/movieItem.scss";
import { getDefaultLibFileName } from "typescript";

const MovieDetail = ({ movieItem }) => {
 
  const [item, setItem]=useState({});

 

  //평점 계산
  const getRating = rating => {
    return Math.ceil(rating) / 2;
  };

  //배우 목록 반환
  const getActorsList=(text)=>{
    let _arr=text.split('|');
    _arr.pop();
    
    return _arr.join(', ');
  };

  // const getDetails=()=>{
  //   return(
  //    <>
  //       <h1>Title</h1>
  //       <h3>제목 : {movieItem.title}</h3>
  //       <img src={movieItem.image} alt="img"></img>
  //       <h5>평점 : {movieItem.userRating}</h5>
  //       <h5>개봉년도 : {movieItem.userRating}</h5>
  //       <h5>감독 : {movieItem.userRating}</h5>
  //       <h5>배우 : {movieItem.userRating}</h5>
  //    </>
  //   )
  // };


 

  return (

    <>
      popup
    </>
    


    
  );
};

export default MovieDetail;
