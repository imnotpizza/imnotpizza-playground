import React, {useState, useCallback} from "react";
import { fetch_movielist } from '../api/list';
import common from '../util/common';

const SearchView=()=>{

    const [query, setQuery]=useState('');
    //const [options, setOptions]=useState([]);

    const onChange=useCallback(e=>{
        setQuery(e.target.value);
    },[query])

    const onClick=useCallback(async (e)=>{
       
        const response=await fetch_movielist(query);//객체 넣어야 함
      
    })

    return(
        <div>
            <h1>Search View</h1>
            <input type="text" value={query} onChange={onChange}></input>
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    )
}

export default SearchView;
