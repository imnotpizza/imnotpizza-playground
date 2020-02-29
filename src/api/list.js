import base from './base';


export const fetch_movielist=(query)=>{
    base.get(`movie.json`)
    .then(response=>{
        console.log(response.data.items);
    })
    .catch(err=>{
        console.log(err)
    })
}