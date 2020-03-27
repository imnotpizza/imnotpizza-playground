import {createAction, handleActions} from 'redux-actions';
import { get_users } from '../api/api';


const GET_USERS='counter/GET_USERS';
const GET_USERS_RES='counter/GET_USERS_RES';


export const getUsers=(query)=>(async dispatch=>{
    
    dispatch({type: GET_USERS});//요청을 시작한 것을 알림
    try{
        const response=await get_users(query);
        console.log(response)
        
        //요청 성공시
        dispatch({
            type: GET_USERS_RES,
            payload: response.data
        });
    }catch(e){
        dispatch({
            type: GET_USERS_RES,
            payload: e,
            error: true
        });
    }
})


const initialState={
    GET_USERS: false,
    GET_USERS_RES: false,
    users: null,
}

const counter=handleActions({
    [GET_USERS]: (state)=>({
        ...state,
        GET_USERS: false,
    }),
    [GET_USERS_RES]: (state, action)=>({
        ...state,
        GET_USERS: false,
        users: action.payload,
    }),
}, initialState)


export default counter;