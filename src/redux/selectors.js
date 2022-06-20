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