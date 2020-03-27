import axios from 'axios';

export const get_users=(query)=>{
    console.log("get query", query);
    
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

