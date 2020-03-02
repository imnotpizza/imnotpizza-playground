import React, {useState} from "react";

const SearchView=()=>{

    const [query, setQuery]=useState('');
    const [options, setOptions]=useState([]);

    const onChange=(e)=>{
        setQuery(e.target.value)
    }

    const onClick=(e)=>{

    }


    return(
        <div>
            <h1>Search View</h1>
            <input type="text" value={query} onChange={onChange}></input>
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    )
}

export default SearchView;
