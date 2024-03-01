import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name:'app',
    initialState:{
        isOpen:true,
        videoCategory:0,
    },
    reducers:{
        toggleNav: (state)=>{
            state.isOpen = !state.isOpen
        },
        hideSidebar:(state)=>{
            state.isOpen = false;
        },
        updateCat:(state,action)=>{
            state.videoCategory = action.payload;
        }
    }
})

export const {toggleNav,hideSidebar,updateCat} = appSlice.actions
export default appSlice.reducer;