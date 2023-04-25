import { createSlice } from '@reduxjs/toolkit'


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers: {
        loadProducts: (state, action) => {
            state.data = action.payload.map(item => ({
                ...item,
                finalPrice: item.discont_price ?? item.price,
                show: true,
                discount: true,
            }))
        },
        sort: (state, action) => {
            state.data.sort((a, b) => {
                const sortOrder = action.payload === 1 ? 1 : -1;
                return sortOrder * (a.finalPrice - b.finalPrice);
            })
        },
        searchByPrice: (state, action) => {
            const { from, to } = action.payload
            state.data = state.data.map(el => {
                const inRange = (!from || el.finalPrice >= from) &&
                    (!to || el.finalPrice <= to);
                return { ...el, show: inRange };
            });
        },
        filterDiscount: (state, action) => {
            const { payload } = action
            if (payload) {
                state.data = state.data.map(elem => {
                    if (elem.discont_price == null) {
                        elem.discount = false
                    }
                    return elem
                })
            } else {
                state.data = state.data.map(elem => ({ ...elem, discount: true }))
            }
        },
        resetFilter: (state) => {
            state.data = state.data.map(el => ({ ...el, show: true, discount: true }))
        }

    }
})

export const { loadProducts, sort, searchByPrice, filterDiscount, resetFilter } = productsSlice.actions

export default productsSlice.reducer