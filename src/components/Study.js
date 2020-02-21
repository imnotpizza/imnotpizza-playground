import React from 'react';
import {Fragment, Component} from 'react'
import StudyChild from "./StudyChild"
import Counter from "./Counter"

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

class Study extends Component{
    constructor(props){
        super(props);

        this.state={number: 0};
    }

    render(){
        const {number}=this.state;

        return(
          <Counter></Counter>
        )
    }
}

export default Study;