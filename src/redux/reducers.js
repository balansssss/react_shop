import {combineReducers} from "redux";
import { legacy_createStore as createStore} from "redux";
import {HeaderReducer} from "./reducers/Main/HeaderReducer";
import {BannerReducer} from "./reducers/Main/BannerReducer";
import {ProductsBlockReducer} from "./reducers/Main/ProductsBlockReducer";
import {CatalogReducer} from "./reducers/Catalog/CatalogReducer";
import {CartReducer} from "./reducers/Cart/CartReducer";

export const reducers = combineReducers({
    HeaderReducer,
    BannerReducer,
    ProductsBlockReducer,
    CatalogReducer,
    CartReducer
});

export const store = createStore(reducers)
console.log(store.getState())