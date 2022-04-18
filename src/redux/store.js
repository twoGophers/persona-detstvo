import { createStore } from "@reduxjs/toolkit";

const defaultState = {
    showModal : false,
    titleModal : '',
    mainModal : false,
    doctorModal : false,
    colorBg : '',
    showSearchAndPhone : false,
    nameInformationHeader : 'ddddd' 
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL' :
            return {
                ...state,
                showModal: action.payload,
                titleModal : action.title,
                mainModal : action.mainModal,
                doctorModal : action.doctorModal,
                colorBg : action.colorBg,
                showSearchAndPhone : action.showSearchAndPhone,
                nameInformationHeader : action.nameInformationHeader
            }
        default : 
            return state
    }
}

const store = createStore(reducer);
export default store;
