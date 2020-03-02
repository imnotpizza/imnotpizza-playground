import React, { Children } from 'react';
import '../sass/TodoTemplate.scss'

/**
 * 화면을 가운데정렬, children으로 내부 jsx를 props로 받아 렌더링
 */
const TodoTemplate=({children})=>{
    return(
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;
