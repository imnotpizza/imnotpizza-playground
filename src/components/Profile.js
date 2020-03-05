import React from "react";

const data={
    name1:{
        name: 'name1',
        desc: 'desc1',
    },
    name2:{
        name: 'name2',
        desc: 'desc2',
    },
}

const Profile = ({match})=>{

    const {username}=match.params;//url 파라미터 추출  (username)
  

    const profile=data[username];

    if(!profile){
      
        return <div>존재하지 않는 사용자입니다</div>

    }else{
        return (
            <div>
                {username}
                {profile.name}, {profile.desc}
            </div>
        )
    }
    
  

}

export default Profile;