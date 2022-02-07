import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user.value)
    console.log(user)
    return (
       <div>
           {user.map((x,i)=>{
               return(
                   <img src={x} key={i}/>
               )
           })}
       </div>
    );
};

export default Profile;