import { createStore } from 'redux';
import reducer from './reducer';
import { addPost } from './actions/post';
import { login, logOut } from './actions/user';

const initialState={
    user:{
        isLogggingIn: true,
        data: null,
    },
    posts: [],
    comments: [],
    favorites: [],
    history: [],
    likes: [],
    followers: [],
}

const store=createStore(reducer, initialState);
store.subscribe(()=>{
    console.log("changed");
})