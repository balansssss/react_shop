import {combineReducers} from "redux";
import { legacy_createStore as createStore} from "redux";
import {HeaderReducer} from "./reducers/Main/HeaderReducer";
import {BannerReducer} from "./reducers/Main/BannerReducer";
import {ProductsBlockReducer} from "./reducers/Main/ProductsBlockReducer";

export const reducers = combineReducers({
    HeaderReducer,
    BannerReducer,
    ProductsBlockReducer
});

export const store = createStore(reducers)
console.log(store.getState())