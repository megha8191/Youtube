import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const chatSlice = createSlice({
    name :"livechat",
    initialState:{
        messages:[],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload);
        },
        removeMessage:(state,action)=>{
            if(state.messages.length>20){
                state.messages.pop();
            }
        }
    }
})

export const {addMessage,removeMessage} = chatSlice.actions;
export default chatSlice.reducer; 