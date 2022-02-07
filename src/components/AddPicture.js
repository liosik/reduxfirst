import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPicture} from "../features/user";

const AddPicture = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    const user = useSelector((state) => state.user.value)
    function addPic(){
        if (inputRef.current.value.includes("http")){
            const newArr = [...user, inputRef.current.value]
            dispatch(addPicture(newArr))
        } else{alert("wrong link")}

    }
    return (
        <div>
            <input ref={inputRef} placeholder='img url' type="text"/>
            <button onClick={addPic}>Add Picture</button>

        </div>
    );
};

export default AddPicture;