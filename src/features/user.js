import {createSlice} from "@reduxjs/toolkit";

const initialStateValue=["https://picsum.photos/200"]

const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers:{
        addPicture: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default userSlice.reducer

export const {addPicture} = userSlice.actions