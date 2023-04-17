const PRODUCTS_LOAD = 'PRODUCTS_LOAD'
const PRODUCTS_SORT = 'PRODUCTS_SORT'
const PRODUCTS_RESET = 'PRODUCTS_RESET'
const PRODUCTS_FILTER = 'PRODUCTS_FILTER'


export const productsLoadAction = (payload) => ({ type: PRODUCTS_LOAD, payload })
export const productsSortActions = (payload) => ({ type: PRODUCTS_SORT, payload })
export const productsFilerActions = (payload) => ({ type: PRODUCTS_FILTER, payload })
export const productsResetActions = () => ({ type: PRODUCTS_RESET })


export const productsReducer = (state = [], action) => {
    if (action.type === PRODUCTS_LOAD) {
        return action.payload.map(item => ({
            ...item,
            finalPrice: item.discont_price ?? item.price,
            show: true
        }))
    }
    else if (action.type === PRODUCTS_SORT) {
        state.sort((a, b) => action.payload === 1
            ? a.finalPrice - b.finalPrice
            : b.finalPrice - a.finalPrice)
        return [...state]
    } else if (action.type === PRODUCTS_FILTER) {
        return state.map(el => {
            if (action.payload.from && !action.payload.to && el.finalPrice > action.payload.from) {
                return ({ ...el, show: true })
            } else if (action.payload.to && !action.payload.from && el.finalPrice < action.payload.to) {
                return ({ ...el, show: true })
            } else if (el.finalPrice >= action.payload.from && el.finalPrice <= action.payload.to) {
                return ({ ...el, show: true })
            } else if (!action.payload.from && !action.payload.to) {
                return ({ ...el, show: true })
            }
            else return ({ ...el, show: false })
        })
    } else if (action.type === PRODUCTS_RESET) {
        return state.map(el => ({ ...el, show: true }))
    }
    return state
}