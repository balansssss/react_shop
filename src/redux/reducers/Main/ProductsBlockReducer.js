
const initialState = {
    newProducts: [
        {id: 1, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 2, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }},
        {id: 3, title: 'Троянди білі', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди білі', price: 189, sale: 159, img: { url: '' }}
    ],
    topProducts: [
        {id: 1, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }},
        {id: 2, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 3, title: 'Троянди рожеві', price: 189, sale: false, img: { url: '' }},
        {id: 4, title: 'Троянди рожеві', price: 189, sale: 159, img: { url: '' }}
    ]
}

export const ProductsBlockReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}