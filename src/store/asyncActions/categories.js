// import { categoriesLoadAction } from "../reducer/categoriesReducer"
import { loadCaterories } from "../slices/cateroriesSlice"


// export const asyncCategoriesLoadAction = async (dispatch) => {
//     const response = await fetch('http://localhost:3333/categories/all')
//     const data = await response.json()
//     dispatch(categoriesLoadAction(data))
// }

export const asyncCategoriesLoadAction = async (dispatch) => {
    const response = await fetch('http://localhost:3333/categories/all')
    const data = await response.json()
    dispatch(loadCaterories(data))
}
