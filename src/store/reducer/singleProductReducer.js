
const PRODUCT_LOAD = 'PRODUCT_LOAD'

export const singleProductLoadAction = (payload) => ({ type: PRODUCT_LOAD, payload })

export const singleProductReducer = (state = [], action) => {
    if (action.type === PRODUCT_LOAD) {
        return  action.payload
    }
    return state
}