
const initialState = {
    products: [
        {
            id: 1,
            title: 'Троянди білі',
            price: 189,
            sale: false,
            category: 2,
            tags: ['new', 'top'],
            img: { url: '' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'pink', productId: 2 },
                    { style: 'red', productId: 3 },
                    { style: 'yellow', productId: 4 },
                ]
            }
        },
        {
            id: 2,
            title: 'Троянди рожеві',
            price: 189,
            sale: false,
            category: 2,
            tags: ['new'],
            img: { url: '' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'white', productId: 1 },
                    { style: 'red', productId: 3 },
                    { style: 'yellow', productId: 4 },
                ]
            }
        },
        {
            id: 3,
            title: 'Троянди червоні',
            price: 189,
            sale: false,
            category: 2,
            tags: ['new'],
            img: { url: '' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'white', productId: 1 },
                    { style: 'pink', productId: 2 },
                    { style: 'yellow', productId: 4 },
                ]
            }
        },
        {
            id: 4,
            title: 'Троянди жовті',
            price: 189,
            sale: false,
            category: 2,
            tags: ['new', 'top'],
            img: { url: '' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'white', productId: 1 },
                    { style: 'pink', productId: 2 },
                    { style: 'red', productId: 2 },
                ]
            }
        }

    ],
    category: [
        { id: 1, title: 'Рослини' },
        { id: 2, title: 'Квіти' }
    ]
}

export const CatalogReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}