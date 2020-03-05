import React from "react";
import { render } from "react-dom";
import qs from 'qs'


const About=({location})=>{
  const query=qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  console.log(query)//쿼리파라미터 담긴 거(key, value)

  const showDetail=query.detail==='true';

  return(
    <div>
      <h1>소개</h1>
      querystring이 true 일 경우 출력
      {showDetail && <p>fefeefffff</p>} 
    </div>
  )
}

export default About;
