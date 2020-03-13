import React, { useState, useEffect, useRef } from "react";
import MovieItem from './MovieItem';
import Grid from "@material-ui/core/Grid";
import { tempItems } from "../constants";
import Paper from "@material-ui/core/Paper";
import Modal from "react-awesome-modal";

import '../sass/movieList.scss';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const MovieList=()=>{
    const [items, setItems]=useState(tempItems);//state 로 적용해야 함
    const [visible, setVisible] = useState(false);

    const classes=useStyles();
    

    const openModal = (e) => {
      e.preventDefault();
      setVisible(true); 
    };

    const clsoeModal = () => {
      setVisible(false);
    };
    
  

    //아이템리스트 반환
    const itemList=()=>{
      return items.map((item, id)=>{
        return (
          <Grid item xs={4} key={id}>
            <MovieItem 
            movieItem={item}>
            </MovieItem>
          </Grid>
        );
      })
    }
    
    return (
      <div className="container">
        <Grid container spacing={10}>
          {itemList()}
        </Grid>
        <button onClick={openModal}>팝업테스트</button>
      

      </div>
    );

    
}

export default MovieList;