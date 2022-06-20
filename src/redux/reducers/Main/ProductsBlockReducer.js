import {
    INITIAL_NEW_PRODUCTS, INITIAL_TOP_PRODUCTS,
    NEXT_NEW_PRODUCT,
    NEXT_TOP_PRODUCT,
    PREV_NEW_PRODUCT,
    PREV_TOP_PRODUCT
} from "../../actions";
import {nextController, prevController} from "./controllers";

const initialState = {
    newProducts: [],
    topProducts: []
}

export const ProductsBlockReducer = (state=initialState, action) => {
    switch(action.type) {
        case INITIAL_NEW_PRODUCTS:
            return {
                ...state,
                newProducts: action.products
            }
        case INITIAL_TOP_PRODUCTS:
            return {
                ...state,
                topProducts: action.products
            }
        case PREV_TOP_PRODUCT:
            return {
                ...state,
                topProducts: prevController(action.products)
            }
        case NEXT_TOP_PRODUCT:
            return {
                ...state,
                topProducts: nextController(action.products)
            }
        case PREV_NEW_PRODUCT:
            return {
                ...state,
                newProducts: prevController(action.products)
            }
        case NEXT_NEW_PRODUCT:
            return {
                ...state,
                newProducts: nextController(action.products)
            }
        default:
            return state;
    }
}

export const prevTopProduct = products => ({ type: PREV_TOP_PRODUCT, products })
export const nextTopProduct = products => ({ type: NEXT_TOP_PRODUCT, products })
export const prevNewProduct = products => ({ type: PREV_NEW_PRODUCT, products })
export const nextNewProduct = products => ({ type: NEXT_NEW_PRODUCT, products })
export const initialNewProducts = products => ({ type: INITIAL_NEW_PRODUCTS, products })
export const initialTopProducts = products => ({ type: INITIAL_TOP_PRODUCTS, products })