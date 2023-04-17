import { singleProductLoadAction } from '../reducer/singleProductReducer'


export const asyncSingleProductLoadAction = (id) => {
    return async (dispatch)=> {
        const response = await fetch(`http://localhost:3333/products/${id}`)
        const data = await response.json()
        dispatch(singleProductLoadAction(data[0]))
    }
}
