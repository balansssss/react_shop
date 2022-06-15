import {NEXT_NEW_PRODUCT, NEXT_TOP_PRODUCT, PREV_NEW_PRODUCT, PREV_TOP_PRODUCT} from "../../actions";

const initialState = {
    newProducts: [
        {id: 1, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 2, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }},
        {id: 3, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }}
    ],
    topProducts: [
        {id: 1, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }},
        {id: 2, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 3, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }}
    ]
}

const funcPrevProduct = products => {
    const first = products[0]
    const formatProducts = products.slice(1, products.length)
    formatProducts.push(first)
    return formatProducts
}

const funcNextProduct = products => {
    const last = products[products.length - 1]
    const formatProducts = products.slice(0, products.length - 1)
    formatProducts.unshift(last)
    return formatProducts
}

export const ProductsBlockReducer = (state=initialState, action) => {
    switch(action.type) {
        case PREV_TOP_PRODUCT:
            return {
                ...state,
                topProducts: funcPrevProduct(action.products)
            }
        case NEXT_TOP_PRODUCT:
            return {
                ...state,
                topProducts: funcNextProduct(action.products)
            }
        case PREV_NEW_PRODUCT:
            return {
                ...state,
                newProducts: funcPrevProduct(action.products)
            }
        case NEXT_NEW_PRODUCT:
            return {
                ...state,
                newProducts: funcNextProduct(action.products)
            }
        default:
            return state;
    }
}

export const prevTopProduct = products => ({ type: PREV_TOP_PRODUCT, products })
export const nextTopProduct = products => ({ type: NEXT_TOP_PRODUCT, products })
export const prevNewProduct = products => ({ type: PREV_NEW_PRODUCT, products })
export const nextNewProduct = products => ({ type: NEXT_NEW_PRODUCT, products })