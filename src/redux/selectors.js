/*Header*/
export const getDarkMode = state => {
    return state.HeaderReducer.darkMode
}

/*Banner*/
export const getBanners = state => {
    return state.BannerReducer.banners
}

/*ProductsBlock*/
export const initializeNewProducts = state => {
    const products = state.CatalogReducer.products.filter(p => {
        return p.tags.includes('new')
    })

    return products
}

export const initializeTopProducts = state => {
    const products = state.CatalogReducer.products.filter(p => {
        return p.tags.includes('top')
    })

    return products
}

export const getNewProducts = state => {
    return state.ProductsBlockReducer.newProducts
}

export const getTopProducts = state => {
    return state.ProductsBlockReducer.topProducts
}

/*Catalog*/

export const getTitleCatalog = state => {
    return state.CatalogReducer.title
}

export const getAllProducts = state => {
    return state.CatalogReducer.products;
}

export const getProducts = state => {
    return state.CatalogReducer.filterProducts;
}

export const getMaxProduct = state => {
    return state.CatalogReducer.maxProduct;
}

export const getFilters = state => {
    return state.CatalogReducer.filters
}

/*Search*/

export const showSearch = state => {
    return state.CatalogReducer.search.showSearch;
}

export const showSearchMessage = state => {
    return state.CatalogReducer.search.message;
}

export const getSearchResult = state => {
    return state.CatalogReducer.search.result;
}

/*Cart*/
export const getCart = state => {
    return state.CartReducer.cart;
}

export const showCart = state => {
    return state.CartReducer.showCart;
}

export const showMessage = state => {
    return state.CartReducer.showMessage;
}

export const getTextMessage = state => {
    return state.CartReducer.textMessage;
}

export const getCartSum = state => {
    let result = state.CartReducer.cart.reduce((sum, cur) => {
        sum = cur.sale? sum + cur.count * cur.sale : sum + cur.count * cur.price;
        return sum
    }, 0);
    return result;
}


