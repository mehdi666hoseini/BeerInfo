import * as AT from '../actions/types';

const initialState = {
    beers: [],
    modalVisible: false,
    selected_beer: {},
    page_seen: 1,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.UPDATE_BEER_LIST:
            return {
                ...state,
                // beers: action.beer_list,
                beers: [...state.beers, ...action.beer_list],

            }
        case AT.TOGGLE_MODAL:
            return {
                ...state,
                modalVisible: !state.modalVisible,
            }
        case AT.SELECT_OBJECT:
            return {
                ...state,
                selected_beer: action.beer_object,
            }
        case AT.INC_PAGE:
            return {
                ...state,
                page_seen: state.page_seen + 1,
            }


        default:
            return state
    }

}

export default reducer