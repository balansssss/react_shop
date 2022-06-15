const initialState = {
    banners: [
        {id: 1, title: '40% ЗНИЖКА', text: 'Найкращі пропозиції цього тижня. Живі квіти, рослини та подарунки', button: { title: 'Shop now' }},
        {id: 2, title: 'Гарні маленькі подарунки', text: 'для близьких', button: { title: 'Переглянути' }},
        {id: 3, title: 'Рослини', text: 'для домашнього затишку', button: { title: 'Переглянути' }}
    ]
}

export const BannerReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

