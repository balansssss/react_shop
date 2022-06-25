import {ADD_TO_CART} from "../../actions";

const initialState = {
    cart: [],
    showCart: true
}

export const CartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const cart = [...state.cart];
            cart.push(action.product);

            return {
                ...state,
                cart
            }
        default:
            return state;
    }
}

export const addToCart = product => ({ type: ADD_TO_CART, product });
