import React, {  } from "react";
import { tempItems } from "../constants";
import '../sass/movieItem.scss'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import "typeface-roboto";


const useStyles = makeStyles({
  root: {
    maxWidth: 230
  },
  media: {
    height: 100,
  }
});



const MovieItem=({movieItem})=>{

    const classes=useStyles();

    const actors=movieItem.actor.split('|').join(", ");
    const directors = movieItem.director.split("|").join(", ");

    //소수점 1재짜리 반올림 / 2 
    const getRating=(rating)=>{
      return Math.ceil(rating)/2;
    }

   
    return (
      <Card className={classes.root}>
      
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movieItem.image}
            title="movie title"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {movieItem.title}
            </Typography>
            <Typography>
              <Rating
                name="read-only"
                value={getRating(movieItem.userRating)}
                readOnly
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Like
          </Button>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
    
    
}

export default MovieItem;
