import { createSlice } from '@reduxjs/toolkit'

const defaultState = JSON.parse(localStorage.getItem('basket')) ?? []

const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket))

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        data: defaultState
    },
    reducers: {
        addToBasket: (state, action) => {
            const product = state.data.find(({ id }) => id === action.payload)
            if (product) {
                product.count++
            } else {
                state.data.push({ id: action.payload, count: 1 })
            }
            writeToLocalStorage(state.data)
        },
        increment: (state, action) => {
            state.data.find(({ id }) => id === action.payload).count++
            writeToLocalStorage(state.data)
        },
        decrement: (state, action) => {
            const target = state.data.find(({ id }) => id === action.payload)
            target.count--
            if (target.count === 0) {
                state.data = state.data.filter(el => el !== target)
            }
            writeToLocalStorage(state.data)
        },
        remove: (state, action) => {
            state.data = state.data.filter(({ id }) => id !== action.payload)
            writeToLocalStorage(state.data)
        }

    }
})

export const { addToBasket, increment, decrement, remove } = basketSlice.actions

export default basketSlice.reducer