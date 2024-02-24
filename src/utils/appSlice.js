import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name:'app',
    initialState:{
        isOpen:true,
    },
    reducers:{
        toggleNav: (state,action)=>{
            state.isOpen = !state.isOpen
        },
        hideSidebar:(state)=>{
            state.isOpen = false;
        }
    }
})

export const {toggleNav,hideSidebar} = appSlice.actions
export default appSlice.reducer;