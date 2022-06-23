import {SET_CATALOG, SET_FILTER, SHOW_MORE_PRODUCTS} from "../../actions";

const initialState = {
    title: 'Каталог',
    products: [
        {
            id: 1,
            title: 'Троянди білі',
            price: 2091,
            sale: 1359,
            category: 2,
            color: 2,
            tags: ['new', 'top'],
            img: { url: 'https://dicentra.ua/assets/images/products/890/fer-2883.jpg?scale.height=300' },
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
            img: { url: 'https://dicentra.ua/assets/images/products/2727/fer-16-01-22-rose-rose-15-black-4133.jpg?scale.height=300' },
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
            price: 959,
            sale: false,
            category: 2,
            color: 3,
            tags: ['new'],
            img: { url: 'https://dicentra.ua/assets/images/products/619/fer-15-01-22-granpree-25-crema-00331.jpg?scale.height=300' },
            detail: 'Червона троянда завжди в моді! А така хмара червоних троянд - приголомшливий подарунок для неї!',
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
            price: 1499,
            sale: 1049,
            category: 2,
            color: 4,
            tags: ['new', 'top'],
            img: { url: 'https://dicentra.ua/assets/images/products/2687/fer-2859.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'white', productId: 1 },
                    { style: 'pink', productId: 2 },
                    { style: 'red', productId: 2 },
                ]
            }
        },
        {
            id: 5,
            title: 'Троянди помаранчевi',
            price: 659,
            sale: 595,
            category: 2,
            color: 6,
            tags: ['new', 'top'],
            img: { url: 'https://dicentra.ua/assets/images/products/2883/b6eb598d7dd7d9632a6c81e30c403f17799dc9f3.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: [
                    { style: 'white', productId: 1 },
                    { style: 'pink', productId: 2 },
                    { style: 'red', productId: 2 },
                ]
            }
        },
        {
            id: 6,
            title: 'Букет 11 Троянд Мікс',
            price: 705,
            sale: false,
            category: 3,
            color: 3,
            tags: ['top'],
            img: { url: 'https://dicentra.ua/assets/images/products/906/fer-2744.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: []
            }
        },
        {
            id: 7,
            title: 'Букет 11 Хризантем Мікс',
            price: 659,
            sale: 595,
            category: 3,
            color: 4,
            tags: ['top'],
            img: { url: 'https://dicentra.ua/assets/images/products/908/cee7464440fbb904e8a0fa4a9a834c2fc1e97f22.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: []
            }
        },
        {
            id: 8,
            title: 'Букет 11 Білих Хризантем',
            price: 659,
            sale: 595,
            category: 3,
            color: 2,
            tags: ['top'],
            img: { url: 'https://dicentra.ua/assets/images/products/1443/fer-15-01-22-chresanteme-white-11-rose-00445.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: []
            }
        },
        {
            id: 9,
            title: 'Букет 15 Хризантем Мікс',
            price: 899,
            sale: 765,
            category: 3,
            color: 5,
            tags: ['top'],
            img: { url: 'https://dicentra.ua/assets/images/products/1453/e95318189cf8e8ebd8de7e3a4f18c2869ba007c5.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: []
            }
        },
        {
            id: 10,
            title: '25 Хризантем Ромашок Мікс',
            price: 1499,
            sale: 1125,
            category: 3,
            color: 5,
            tags: ['top'],
            img: { url: 'https://dicentra.ua/assets/images/products/1593/064108636227d92b44133fea55f670a6d09d4b13.jpg?scale.height=300' },
            detail: 'Тут може бути твiй опис.',
            options: {
                colors: []
            }
        },
    ],
    filterProducts: [],
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
                {id: 3, title: 'Букети'}
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
    ],
    maxProduct: 8
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
            return filterProducts(state, action.filterId, action.category);
        case SET_CATALOG:
                return {
                    ...state,
                    filterProducts: [...state.products]
            }
        case SHOW_MORE_PRODUCTS:
            return {
                ...state,
                maxProduct: state.maxProduct + 8
            }
        default:
            return state;
    }
}

export const setFilter = (category, filterId) => ({ type: SET_FILTER, filterId, category})
export const setCatalog = () => ({ type: SET_CATALOG })
export const showMoreProducts = () => ({ type: SHOW_MORE_PRODUCTS })
