// import { productsLoadAction } from '../reducer/productsReducer'
import { loadProducts } from '../slices/productsSlice'


// export const asyncProductsLoadAction = async (dispatch) => {
//     const response = await fetch('http://localhost:3333/products/all')
//     const data = await response.json()
//     dispatch(productsLoadAction(data))
// }
export const asyncProductsLoadAction = async (dispatch) => {
    const response = await fetch('http://localhost:3333/products/all')
    const data = await response.json()
    dispatch(loadProducts(data))
}

