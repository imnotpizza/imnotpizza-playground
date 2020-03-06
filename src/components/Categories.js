import React from 'react';
import styled from 'styled-components';


const categories=[
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'ent',
        text: '연예',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'tech',
        text: '기술',
    },
];


const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`






const Categories=()=>{
    return(
        <CategoriesBlock>
            {categories.map((c, id)=>(
                <span key={id}>{c.text}</span>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;