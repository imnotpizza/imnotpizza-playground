import React, {useState, useCallback} from 'react';

import {MdAdd} from 'react-icons/md';
import '../sass/TodoInsert.scss';

const TodoInsert=({onInsert})=>{
    const [value, setValue]=useState('');

    const onChange=useCallback(e=>{
        setValue(e.target.value);
    }, [])

    //submit 시 이벤트
    const onSubmit=useCallback(e=>{
        onInsert(value);
        setValue('');

        e.preventDefault();
    },[onInsert, value])

  return (
        <form className="todo-insert" onSubmit={onSubmit}>
            <input 
            placeholder="할일 입력"
            value={value}
            onChange={onChange}    
            ></input>
            <button type="submit">
                <MdAdd></MdAdd>
            </button>
        </form>
    )
}

export default TodoInsert;
