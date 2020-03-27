import {createAction, handleActions} from 'redux-actions';
import { get_users } from '../api/api';

const INCREASE='counter/INCREASE';
const DECREASE='counter/DECREASE';
const USERS='counter/USERS';


export const increase=createAction(INCREASE);
export const decrease=createAction(DECREASE);
export const users=createAction(USERS);



//thunk : dispatch  함수를 반환
export const increaseAsync=()=>(dispatch=>{
    setTimeout(()=>{
        dispatch(increase());
    }, 1000);
})

export const decreaseAsync=()=>(dispatch=>{
    setTimeout(()=>{
        dispatch(decrease());
    }, 1000);
})

export const users=()=>(dispatch=>{
    setTimeout(()=>{
        dispatch(decrease());
    }, 1000);
})



//초기값
const initialState={
    number: 0,
    
};

//handleActions(액션에 대한 업데이트 함수, 초기상태)
const counter=handleActions(
    {
        [INCREASE]: (state)=>({number : state.number+1}),
        [DECREASE]: (state)=>({number : state.number-1}),
       
    },
    initialState,
)


export default counter;


// //액션 타입 정의 : 
// const INCREASE='counter/INCREASE';
// const DECREASE='counter/DECREASE';



// //액션 생성 함수 정의 : state의 변화를 일으킬 함수
// //type에 따라 reducer 함수 실행
// export const increase=()=>({ 
//     type: INCREASE
// });

// export const decrease=()=>({
//     type: DECREASE
// });


// const initialState={
//     number: 0
// };

// //리듀서 함수 : state 에 직접 변화를 주는 역할
// //실제로 값에 변화를 주는 영역
// function counter(state=initialState, action){
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number: state.number+1
//             }
//         case DECREASE:
//             return{
//                 number: state.number-1
//             }
//         default:
//             return state;
//     }
// }

// export default counter;

