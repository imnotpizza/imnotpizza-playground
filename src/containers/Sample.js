import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../store/sample';


const Sample=({
    getUsers,
    users
})=>{
    useEffect(()=>{

        getUsers(1);

    },[getUsers]);
    return(
        <section>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default connect(
    ({sample})=>({
        users: sample.users
    }),
    {
        getUsers
    }
)(Sample);
