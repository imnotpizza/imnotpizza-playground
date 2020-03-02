import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
} from 'react-icons/md'
import "../sass/TodoListItem.scss"
import cn from 'classnames';

//리스트 아이템
const TodoListItem=({item})=>{

  const { text, checked }=item;//item의 데이터 text, checked 비구조화 할당

  return (

    <div className="todo-list-item">
        <div className={cn('checkbox', {checked})}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <MdCheckBoxOutlineBlank/>
            <div className="text">{text}</div>
        </div>
        <div className="remove">
            <MdRemoveCircleOutline/>
        </div>
    </div>
  )
}

export default TodoListItem;