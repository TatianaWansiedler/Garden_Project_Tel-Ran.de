import { createSlice } from '@reduxjs/toolkit'


export const categoriesSlice = createSlice({
    name: 'caterories',
    initialState: {
        list: []
    },
    reducers: {
        loadCaterories: (state, action) => {
            state.list = action.payload
        }
    } 
})

export const { loadCaterories } = categoriesSlice.actions
export default categoriesSlice.reducer