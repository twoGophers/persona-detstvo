// Блок, который появляется по клику из навигации по телефону или поиску

import React from 'react';
import './ModalHeader.scss';

import { useState } from 'react';

import CloseBlockProfession from '../../../assets/images/doctors/x-10329.svg';

import { useDispatch, useSelector } from 'react-redux';

export default function ModalHeader ({nameSearchAndPhoneModal}) {

    // Показ блока по нажатию на поис или телефон
    let showSearchAndPhone = useSelector(state => state.showSearchAndPhone);
    
    let dispatch = useDispatch();
    let showModalHeaderPhoneAndSearch = () => {
        dispatch({type: "SHOW_MODAL", showSearchAndPhone : false})
    };

    return (
        <div className={showSearchAndPhone ? "modal_header_desctop" : "hide"}>

        {/* Блок с поиском по клику из навигации > 1000px  */}
            <div className={nameSearchAndPhoneModal == "search" ? "modal_header_desctop-search block-search" : "hide"}>
                <div className="block-search_title">
                    <h3>Поиск</h3>
                    <span className="btn close_modal_header" onClick={() => showModalHeaderPhoneAndSearch()}>
                        <img src={CloseBlockProfession} alt={CloseBlockProfession} />
                    </span>
                </div>

                <div className="block-search_content ">
                    <input  type="text" placeholder="Что будем искать?" />
                </div>
            </div>

        {/* Блок с телефоном по клику из навигации > 1000px  */}
            <div className={nameSearchAndPhoneModal == "phone" ? " modal_header_desctop-phone block-phone" : "hide"}>
                <div className="block-search_title">
                    <h3>Связатсься с клиникой</h3>
                    <span className="btn close_modal_header" onClick={() => showModalHeaderPhoneAndSearch()}>
                        <img src={CloseBlockProfession} alt={CloseBlockProfession} />
                    </span>
                </div>

                <div className="block-search_content">
                    <p>Телефон : +1(234) 567-89-01</p>
                </div>
                
            </div>
        </div>
    );
}

