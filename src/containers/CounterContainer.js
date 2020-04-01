import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../store/counter';
import {increaseAsync, decreaseAsync} from '../store/counter'


//리덕스성크 사용 - 이거쓰기
const CounterContainer=()=>{
    const number=useSelector(state=>state.counter.number);

    const dispatch=useDispatch();
    const onIncreaseAsync=useCallback(()=>dispatch(increaseAsync()), [dispatch])
    const onDecreaseAsync=useCallback(()=>dispatch(decreaseAsync()), [dispatch])

    return(
        <Counter
        number={number}
        onIncrease={onIncreaseAsync}
        onDecrease={onDecreaseAsync}
        ></Counter>
    )
}

export default CounterContainer;

// const CounterContainer=({number, increaseAsync, decreaseAsync})=>{
//     return(
//         <Counter
//         number={number}
//         onIncrease={increaseAsync}
//         onDecrease={decreaseAsync}
//         ></Counter>
//     )
// }

// export default connect(
//     state=>({
//         number: state.counter.number
//     }),
//     {
//         increaseAsync,
//         decreaseAsync
//     }
// )(CounterContainer);



//리덕스 스토어와 연동되는 컴포넌트 
// const CounterContainer=()=>{
//     //리덕스 상태 조회가능-useSelector
//     const number=useSelector(state=>state.counter.number);

//     console.log(number)
//     //useDisPatch : 
//     const dispatch=useDispatch();
//     const onIncrease=useCallback(()=>dispatch(increase()), [dispatch]);
//     const onDecrease=useCallback(()=>dispatch(decrease()), [dispatch]);

//     return (
//         <Counter 
//         number={number}
//         onIncrease={onIncrease}
//         onDecrease={onDecrease}
//         ></Counter>
//     )
// }









// const CounterContainer=({number, increase, decrease})=>{
//     return(
//         <Counter
//         number={number}
//         onIncrease={increase}
//         onDecrease={decrease}
//         >
//         </Counter>
//     );
// };



// //리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수,  ==state 정의
// const mapStateToProps=state=>({
//     number: state.counter.number,
// });
// //액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용, ==action 사용 함수
// const mapDispatchToProps=dispatch=>({
//     increase:()=>{
//         console.log("increase")
//         dispatch(increase());
//     },
//     decrease:()=>{
//         console.log("decrease")
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);//타깃 컴포넌트

/**
 * 
 * initialState : 상태의 초기값
 * 
 * action: 상태의 변화 실행 부분
 * 
 * dispatch : action 실행
 * 
 * reducer : 
 * 
 */