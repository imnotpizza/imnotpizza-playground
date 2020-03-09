import base from './base';
import { BASEURL } from '../constants'

export const fetch_movielist=(query)=>{
    return base.post(`/movie?query=${query}`)
    .then(response=>{
    
        return response;
    })
    .catch(err=>{
        console.log(err)
    })
}

