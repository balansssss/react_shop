export const prevController = products => {
    const first = products[0]
    const formatProducts = products.slice(1, products.length)
    formatProducts.push(first)
    return formatProducts
}

export const nextController = products => {
    const last = products[products.length - 1]
    const formatProducts = products.slice(0, products.length - 1)
    formatProducts.unshift(last)
    return formatProducts
}