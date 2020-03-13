import React, { useState, useCallback } from "react";
import { fetch_movielist } from "../api/list";
import common from "../util/common";
import "../sass/MovieSearch.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const classes=useStyles();

  const onChange = useCallback(
    e => {
      setQuery(e.target.value);
    },
    [query]
  );

  //api 통해 데이터 가져온 뒤 state 에 저장
  const onClick = useCallback(async e => {
    const response = await fetch_movielist(query); //객체 넣어야 함
  });

  return (
    <div>
    
    <span>
    <FormControl fullWidth className={classes.margin}>

        <TextField
        id="outlined-basic"
        label="영화 제목을 입력하세요"
        variant="filled"
        value={query}
        onChange={onChange}
        ></TextField>

    </FormControl>
    </span>

    <span>

      <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      >검색</Button>
    
    </span>


    </div>
  );
};

export default MovieSearch;
