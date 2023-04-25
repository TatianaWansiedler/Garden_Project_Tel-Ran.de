// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from 'redux-thunk'
// import { categoriesReducer } from "./reducer/categoriesReducer";
// import { productsReducer } from "./reducer/productsReducer";
// import { singleProductReducer } from "./reducer/singleProductReducer";
// import { basketReducer } from "./reducer/basketReduser";


// const rootReducer = combineReducers({
//     categories: categoriesReducer,
//     products: productsReducer,
//     basket: basketReducer,
//     product: singleProductReducer

// })

// export const store = createStore(rootReducer, applyMiddleware(thunk))

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