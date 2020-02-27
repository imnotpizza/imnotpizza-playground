import React, { useState, useEffect } from "react";
import crawling from "cheerio-react";
import cheerio from 'cheerio';
import axios from 'axios';

/**
 * 
 *  리스트
 * 
 *  제목(부제목)
 *  이미지
 *  방문 링크
 *  개봉년도 : 
 *  감독 : 
 * 배우 : 
 * 평점 : 평점계산 후 표시
 * 
 * 상세보기 :nodejs 프로젝트 활용해 api생성 상세정보 크롤링 => 데이터 반환
 * 
 * 일단 redux 사용하기로 
 * 
 * 
 * 
 * 
 */

const Test= ()=>{
    const [value, setValue]=useState('');


    const getRes=()=>{
        var testCheerio = React.createElement(
          "div",
          { className: "testClass" },
          "Target word"
        );

        let res=crawling(testCheerio)


        console.log(res.text())
        console.log(res)
        return 100;
    }

 

    return (
      <>
        
        <div>{getRes()}</div>
      </>
    );
}

export default Test
