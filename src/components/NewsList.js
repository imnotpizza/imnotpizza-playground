import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from './NewsItem';
import axios from "axios";

const NewsListBlock=styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle={
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'url',
}

const NewsList=()=>{
    const URL = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aecdff199bcf42e6b37dd7a9a811a483";

    const [articles, setArticles]=useState(null);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);

            try{
                const response = await axios.get(URL);
                setArticles(response.data.articles);

            }catch(e){

            }

            setLoading(false);
        };

        fetchData();
    }, []);

    if(loading){
        return <NewsListBlock>대기 중..</NewsListBlock>
    }

    if(!articles){
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map((article, id)=>(
                <NewsItem
                key={id}
                article={article}></NewsItem>
           ))}
         
        </NewsListBlock>
    )
}

export default NewsList;