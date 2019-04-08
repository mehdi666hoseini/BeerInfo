import * as AT from './types';


export const updateBeerList = (beer_list) => ({
    type: AT.UPDATE_BEER_LIST,
    beer_list,
})

export const toggleModal = ()=>({
    type: AT.TOGGLE_MODAL
})

export const selectObject = (beer_object)=>({
    type: AT.SELECT_OBJECT,
    beer_object,
})

export const incPage = ()=>({
    type: AT.INC_PAGE
})

