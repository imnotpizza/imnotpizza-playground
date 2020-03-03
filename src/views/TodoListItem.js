import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
} from 'react-icons/md'
import "../sass/TodoListItem.scss"
import cn from 'classnames';

//리스트 아이템
const TodoListItem=({item, onRemove, onToggle})=>{

  const { id, text, checked }=item;//item의 데이터 text, checked 비구조화 할당

  return (

    <div className="todo-list-item">
        <div className={cn('checkbox', {checked})}
        onClick={()=>onToggle(id)}
        >
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
     
            <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={()=>onRemove(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  )
}

export default React.memo(TodoListItem);