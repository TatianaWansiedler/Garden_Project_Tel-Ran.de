import { createSlice } from '@reduxjs/toolkit'


export const singleProductSlice = createSlice({
    name: 'item',
    initialState: {
        item: {}
    },
    reducers: {
        loadProduct: (state, action) => {
            state.item = action.payload
        }
    }
})

export const { loadProduct } = singleProductSlice.actions
export default singleProductSlice.reducer