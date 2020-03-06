import React, { useState, useCallback } from "react";
import axios from 'axios';
import NewsList from './components/NewsList'
import Categories from './components/Categories'


 const App=()=>{
   const [data, setData]=useState(null);

   const onClick=async()=>{
     try{
       const URL ='http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aecdff199bcf42e6b37dd7a9a811a483'

      const response=await axios.get(URL);

      setData(response.data);


     }catch(e){
      console.log(e);
     }
   }

   return(
     <div>
       {/* <div>
         <button onClick={onClick}>불러오기</button>
       </div>
       {data && <textarea rows={8} cols={200} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>} */}

       <NewsList></NewsList>
     </div>
   )
 }


export default App;
