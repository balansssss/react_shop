import {ADD_TO_CART, BUY_CART, CHANGE_PRODUCT_COUNT, SET_SHOW_CART} from "../../actions";

const initialState = {
    cart: [],
    showCart: false,
    showMessage: true,
    textMessage: 'Ваш кошик порожній.'
}

const addToCartFunc = (state, product, counter) => {
    const cart = [...state.cart];

    counter = counter ? counter : 1;

    if (!product.count) {
        product.count = counter;
        cart.push(product);
    } else {
        cart.forEach(p => {
            if (p.id === product.id) {
                p.count += counter;
            }
        })
    }

    return {
        ...state,
        cart
    }
}

const changeProductCountFunc = (state, param) => {
    const cart = [...state.cart];

    cart.forEach((p, i) => {
        if (p.id === param.product.id) {
            if (param.sign === '+') {
                p.count += 1;
            } else if (param.sign === '-' && p.count > 1) {
                p.count -= 1;
            } else if (param.sign === '-' && p.count === 1) {
                delete p.count;
                cart.splice(i, 1);
                state.showMessage = true;
            }
        }
    })

    return {
        ...state,
        cart
    }
}

const setShowCartFunc = (state, value) => {
    if (value) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0,0);
    } else {
        document.body.style.overflow = 'auto';
    }

    return {
        ...state,
        showCart: value,
        textMessage: 'Ваш кошик порожній.'
    }
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCartFunc(state, action.product, action.counter);
        case CHANGE_PRODUCT_COUNT:
            return changeProductCountFunc(state, {product: action.product, sign: action.sign});
        case SET_SHOW_CART:
            return setShowCartFunc(state, action.value);
        case BUY_CART:
            return {
                ...state,
                cart: [],
                textMessage: 'Дякую за замовлення.'
            }
        default:
            return state;
    }
}

export const addToCart = (product, counter = null) => ({type: ADD_TO_CART, product, counter});
export const changeProductCount = (product, sign) => ({type: CHANGE_PRODUCT_COUNT, product, sign});
export const setShowCart = value => ({type: SET_SHOW_CART, value});
export const buyCart = () => ({ type: BUY_CART });
