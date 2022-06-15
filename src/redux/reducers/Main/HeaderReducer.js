import {CHANGE_DARKMODE} from "../../actions";

const initialState = {
    darkMode: false,
    showCart: false,
    cart: [{}],
}

export const HeaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_DARKMODE:
            return {...state, darkMode: !state.darkMode};
        default:
            return state;
    }
}

export const changeDarkMode = () => ({type: CHANGE_DARKMODE})