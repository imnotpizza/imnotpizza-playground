import React from 'react';
import {Component, useState, useEffect} from 'react';

const Hooks=()=>{
    const [value, setValue]=useState(100);// [변수명, setter 함수명]=useState(초기 값) - 함수형 컴포넌트에서도 state 관리가능
    
    const [name, setName]=useState("");
    const [age, setAge]=useState("");

    const onChange=(e)=>{
        
        switch(e.target.name){
            case('name'): 
                setName(e.target.value); break;
            case('age'): 
                
                setAge(e.target.value); break;
            default: break;
        };

        console.log(age)
    }

    const get=()=>{
        alert(name+"  "+age)
    }

    return(
        <div>
            
            <input type="text" name="name" value={name} onChange={onChange}></input>
            <input type="text" name="age" value={age} onChange={onChange}></input>
            <button onClick={get}>submit</button>
        </div>
    )
}

export default Hooks;