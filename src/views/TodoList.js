import React from 'react';
import TodoListItem from './TodoListItem';
import '../sass/TodoList.scss'

const TodoList=({items})=>{

    
    return (
        <div className="todo-list">
            {
            items.map(item=>(
                <TodoListItem
                item={item}//todo에 item 내려줌
                key={item.id}//key 지정
                ></TodoListItem>
            ))
            }
        </div>
    )
}

export default TodoList;
