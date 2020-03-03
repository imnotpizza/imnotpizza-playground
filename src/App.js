import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './views/TodoTemplate';
import TodoList from './views/TodoList';
import TodoInsert from './views/TodoInsert';


const App=()=>{
  const [items, setItems]=useState([
    {
      id: 1,
      text: "텍스트 1",
      checked: true,
    },
    {
      id: 2,
      text: "텍스트 2",
      checked: true,
    },
    {
      id: 3,
      text: "텍스트 3",
      checked: false,
    },
  ])

  const nextId=useRef(4);
//글 추가 로직
  const onInsert=useCallback(text=>{
      const item={
        id: nextId.current,
        text,
        checked: false,
      }
      
      setItems(items => items.concat(item));
      nextId.current+=1;
    },
    [],
  )

  const onRemove=useCallback(id=>{
    setItems(items=>items.filter(item=>item.id!==id));
    }
  )

  const onToggle=useCallback(
    id=>{
      setItems(items=>
        items.map(item=>
            item.id===id ? {...item, checked: !item.checked} : item,
          ),
      )
    }
  )

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList items={items} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  )
}

export default App;
