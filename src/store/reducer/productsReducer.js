const PRODUCTS_LOAD = 'PRODUCTS_LOAD'
const PRODUCTS_SORT = 'PRODUCTS_SORT'
const PRODUCTS_FILTER = 'PRODUCTS_FILTER'
const PRODUCTS_FILTER_CHACKBOX = 'PRODUCTS_FILTER_CHACKBOX'
const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER'


export const productsLoadAction = (payload) => ({ type: PRODUCTS_LOAD, payload })
export const productsSortAction = (payload) => ({ type: PRODUCTS_SORT, payload })
export const productsFilterAction = (payload) => ({ type: PRODUCTS_FILTER, payload })
export const productsFilterChackboxAction = (payload) => ({ type: PRODUCTS_FILTER_CHACKBOX, payload })
export const productsResetFilterAction = () => ({ type: PRODUCTS_RESET_FILTER })


export const productsReducer = (state = [], action) => {
    const { type, payload } = action;
    if (type === PRODUCTS_LOAD) {
        return payload.map(item => ({
            ...item,
            finalPrice: item.discont_price ?? item.price,
            show: true,
            discount: true,
        }))
    }
    else if (type === PRODUCTS_SORT) {
        const sortedState = [...state].sort((a, b) => {
            const sortOrder = payload === 1 ? 1 : -1;
            return sortOrder * (a.finalPrice - b.finalPrice);
        });
        return sortedState;
    } else if (type === PRODUCTS_FILTER) {
        const { from, to } = payload;
        return state.map(el => {
            const inRange = (!from || el.finalPrice >= from) && (!to || el.finalPrice <= to);
            return { ...el, show: inRange };
        });

    } else if (type === PRODUCTS_FILTER_CHACKBOX) {
        if (payload) {
            return state.map(elem => {
                if (elem.discont_price == null) {
                    elem.discount = false
                }
                return elem
            })
        } else {
            return state.map(elem => ({ ...elem, discount: true }))
        }
    }
    else if (type === PRODUCTS_RESET_FILTER) {
        return state.map(el => ({ ...el, show: true, discount: true })).sort((a, b) => a.id - b.id)
    }
    return state
}
