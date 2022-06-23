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

export const getProducts = state => {
    return state.CatalogReducer.filterProducts;
}

export const getMaxProduct = state => {
    return state.CatalogReducer.maxProduct;
}

export const getFilters = state => {
    return state.CatalogReducer.filters
}

/*Product*/

