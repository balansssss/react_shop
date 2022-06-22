import {SET_FILTER} from "../../actions";

const initialState = {
    title: 'Каталог',
    products: [
        {
            id: 1,
            title: 'Троянди білі',
            price: 189,
            sale: false,
            category: 2,
            color: 2,
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
            price: 2460,
            sale: 1599,
            category: 2,
            color: 5,
            tags: ['new'],
            img: { url: 'https://flowers.ua/images/Flowers/ext/1160_0.jpg' },
            detail: 'Рожевий колір бутонів троянд і букет з цих прекрасних квітів висловлює симпатію і солодкі думки, ніжні емоції і почуття захоплення! Рожеві троянди часто символізують новий початок відносин, якийсь натяк на те почуття, яке, можливо в недалекому майбутньому, розгориться у всю силу і вразить двох закоханих в саме серце!',
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
            color: 3,
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
            color: 4,
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
    filterProducts: [
        {
            id: 1,
            title: 'Троянди білі',
            price: 189,
            sale: false,
            category: 2,
            color: 2,
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
            price: 2460,
            sale: 1599,
            category: 2,
            color: 5,
            tags: ['new'],
            img: { url: 'https://flowers.ua/images/Flowers/ext/1160_0.jpg' },
            detail: 'Рожевий колір бутонів троянд і букет з цих прекрасних квітів висловлює симпатію і солодкі думки, ніжні емоції і почуття захоплення! Рожеві троянди часто символізують новий початок відносин, якийсь натяк на те почуття, яке, можливо в недалекому майбутньому, розгориться у всю силу і вразить двох закоханих в саме серце!',
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
            color: 3,
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
            color: 4,
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
    ],
    filters: [
        {
            title: 'category',
            options: [
                {id: 1, title: 'Категорія'},
                {id: 2, title: 'Квіти'},
                {id: 3, title: 'Рослини'}
            ],
            current: 1
        },
        {
            title: 'color',
            options: [
                {id: 1, title: 'Колір'},
                {id: 2, title: 'Білий'},
                {id: 3, title: 'Червоний'},
                {id: 4, title: 'Жовтий'},
                {id: 5, title: 'Рожевий'},
                {id: 6, title: 'Помаранчевий'},
            ],
            current: 1
        }
    ]
}

const filterProducts = (state, filterId, category) => {
    const filters = [...state.filters];
    const products = [...state.products];
    let filterProducts = [];
    let title = state.title;

    filters.forEach(f=>{
        if (f.title === category) {
            f.current = filterId
        }
    })

    filterProducts = products.filter(f => {
        const category = filters[0].current;
        const color = filters[1].current;

        if (category === 1 && color === 1) {
            return products
        } else if (category === 1) {
            return f.color === color
        } else if (color === 1) {
            return f.category === category
        } else {
            return f.category === category && f.color === color
        }
    })

    if (category === 'category') {
        if (filterId !== 1) {
            title = `Каталог / ${filters[0].options[filterId-1].title}`
        } else {
            title = 'Каталог'
        }
    }

    return {
        ...state,
        title,
        filters,
        filterProducts
    }
}

export const CatalogReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER:
            return filterProducts(state, action.filterId, action.category)
        default:
            return state;
    }
}

export const setFilter = (category, filterId) => ({ type: SET_FILTER, filterId, category})
