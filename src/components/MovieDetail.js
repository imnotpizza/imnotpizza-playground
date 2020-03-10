import React, {useState} from "react";
import { tempItems } from "../constants";
import Modal from "react-awesome-modal";
import "../sass/movieItem.scss";

const MovieItem = ({ movieItem }) => {
 
   const [visible, setVisible]=useState(false);

   const openModal=()=>{
       setVisible(true);
   }
   
   const clsoeModal=()=>{
       setVisible(false);
   }

    
   const getRating = rating => {
     return Math.ceil(rating) / 2;
   };

   const getActorsList=(text)=>{
    let _arr=text.split('|');
    _arr.pop();
    
    return _arr.join(', ');
   }

  return (
    <section>
      <h1>React-Modal Examples</h1>
    </section>

    // <div className="col-sm-4">
    //   <h3>제목 : {movieItem.title}</h3>
    //   <img src={movieItem.image} alt="img"></img>
    //   <h5>평점 : {movieItem.userRating}</h5>
    //   <h5>개봉년도 : {movieItem.userRating}</h5>
    //   <h5>감독 : {movieItem.userRating}</h5>
    //   <h5>배우 : {movieItem.userRating}</h5>
    //   <button>영화 상세정보</button>

    //   <hr></hr>
    // </div>
  );
};

export default MovieItem;
