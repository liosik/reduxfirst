import React from 'react';
import {useDispatch} from "react-redux";
import {addPoints} from "../features/user";
import {useSelector} from "react-redux";


const Login = () => {
    const dispatch = useDispatch()
    const points = useSelector((state) => state.user.points)


    return (
        <div>
            <h1>Points {points}</h1>
            <button onClick={() => {
                dispatch(addPoints(points+1))
            }}>add points

            </button>

        </div>
    );
};

export default Login;