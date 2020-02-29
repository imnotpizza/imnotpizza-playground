import React from 'react';
import {Fragment, Component, useState} from 'react'

//import Counter from "./Counter"

// function Study(){
//     const name="REACT"

//     const style={
//         backgroundColor: 'black',
//         color: 'aqua',
//         fontSize: 48,
//         padding: 16
//     }
    
//     return(
//         <>
//             <div style={style}>{name}</div>
//             <input></input>
//         </>
//     )


// }
/**
 * 
 *  const name = "REACT";

          const style = { 스타일 부여
            backgroundColor: "black",
            color: "aqua",
            fontSize: 48,
            padding: 16
          };

        return <StudyChild name={"value from props"}>value from children</StudyChild> props, children 적용
 */

const Study=()=>{
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  
  //username 변경시
  const onChangeUsername=(e)=>{
    setUsername(e.target.value);
 
  }
  //onchange 변경시
  const onChangeMessage=(e)=>{
    setMessage(e.target.value);
  }

  const onClick=()=>{
    setUsername('');
    setMessage('');
  }

  const onKeyPress=(e)=>{
    if(e.key==='Enter'){
      onClick();
    }
  }
  
  return(
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}//폼 바인딩
        onKeyPress={onKeyPress}//엔터 클릭시 이벤트호출
      ></input>

      <button onClick={onClick}>submit</button>
    </div>
  )
  
}

export default Study;



























