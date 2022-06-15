/*Header*/
export const getDarkMode = state => {
    return state.HeaderReducer.darkMode
}

/*Banner*/
export const getBanners = state => {
    return state.BannerReducer.banners
}

/*ProductsBlock*/
export const getNewProducts = state => {
    return state.ProductsBlockReducer.newProducts
}

export const getTopProducts = state => {
    return state.ProductsBlockReducer.topProducts
}