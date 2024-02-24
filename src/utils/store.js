import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice';
import React from 'react'

const store = configureStore({
    reducer:{
        app:appSlice,
        
    },
})

export default store;