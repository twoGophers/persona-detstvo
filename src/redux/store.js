import { createStore } from "@reduxjs/toolkit";

const defaultState = {
    showModal : false,
    titleModal : '',
    nameComponent : '',
    mainModal : false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL' :
            return {
                ...state,
                showModal: action.payload,
                titleModal : action.title,
                nameComponent : action.name,
                mainModal : action.mainModal
            }
        default : 
            return state
    }
}

const store = createStore(reducer);
export default store;
