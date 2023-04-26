import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/cateroriesSlice'
import productsSlice from './slices/productsSlice'
import singleProductSlice from './slices/singleProductSlice'
import basketSlice from './slices/basketSlice'


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        product: singleProductSlice,
        basket: basketSlice
    }
})
export default store