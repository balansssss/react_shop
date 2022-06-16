import {NEXT_BANNER, PREV_BANNER} from "../../actions";
import {nextController, prevController} from "./controllers";

const initialState = {
    banners: [
        {id: 1, title: '40% ЗНИЖКА', text: 'Найкращі пропозиції цього тижня. Живі квіти, рослини та подарунки', className: 'first', button: { title: 'Shop now' }},
        {id: 2, title: 'Гарні маленькі подарунки', text: 'для близьких', className: 'second', button: { title: 'Переглянути' }},
        {id: 3, title: 'Рослини', text: 'для домашнього затишку', className: 'third', button: { title: 'Переглянути' }}
    ]
}

export const BannerReducer = (state=initialState, action) => {
    switch (action.type) {
        case NEXT_BANNER:
            return {
                ...state,
                banners: nextController(state.banners)
            }
        case PREV_BANNER:
            return {
                ...state,
                banners: prevController(state.banners)
            }
        default:
            return state;
    }
}

export const nextBanner = () => ({ type: NEXT_BANNER })
export const prevBanner = () => ({ type: PREV_BANNER })