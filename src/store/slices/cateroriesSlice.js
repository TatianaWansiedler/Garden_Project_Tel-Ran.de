import { createSlice } from '@reduxjs/toolkit'


export const categoriesSlice = createSlice({
    name: 'caterories',
    initialState: {
        list: null
    },
    reducers: {
        getCaterories: (state, action) => {
            state.list = action.payload
        }
    } 
})