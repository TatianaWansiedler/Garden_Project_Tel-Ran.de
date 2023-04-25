// import { singleProductLoadAction } from '../reducer/singleProductReducer'

import { loadProduct } from "../slices/singleProductSlice"


// export const asyncSingleProductLoadAction = (id) => {
//     return async (dispatch)=> {
//         const response = await fetch(`http://localhost:3333/products/${id}`)
//         const data = await response.json()
//         dispatch(singleProductLoadAction(data[0]))
//     }
// }




export const asyncSingleProductLoadAction = (id) => {
    return async (dispatch)=> {
        const response = await fetch(`http://localhost:3333/products/${id}`)
        const data = await response.json()
        dispatch(loadProduct(data[0]))
    }
}