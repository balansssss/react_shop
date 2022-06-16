import {NEXT_NEW_PRODUCT, NEXT_TOP_PRODUCT, PREV_NEW_PRODUCT, PREV_TOP_PRODUCT} from "../../actions";
import {nextController, prevController} from "./controllers";

const initialState = {
    newProducts: [
        {id: 1, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 2, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }},
        {id: 3, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }},
        {id: 5, title: 'Ромашки', price: 100, sale: false, img: { url: '' }}
    ],
    topProducts: [
        {id: 1, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }},
        {id: 2, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 3, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }}
    ]
}

export const ProductsBlockReducer = (state=initialState, action) => {
    switch(action.type) {
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