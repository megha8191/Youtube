import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchVal:{
        },
        results:{

        }
    },
    reducers:{
        searchCache: (state,action)=>{
            state = Object.assign(state, action.payload);
        },
        // setSearchVal: (state,action)=>{

        // },
        storeResults:(state,action)=>{
            state = {...state,...action.payload}
        }
        
    }

})
export const {searchCache,storeResults} = searchSlice.actions
export default searchSlice.reducer
