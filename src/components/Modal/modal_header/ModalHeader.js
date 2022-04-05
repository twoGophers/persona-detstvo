// Блок, который появляется по клику из навигации по телефону или поиску

import React from 'react';
import './ModalHeader.scss';

import { useState } from 'react';

import CloseBlockProfession from '../../../assets/images/doctors/x-10329.svg';

const ModalHeader = ({showSearchAndPhone}) => {

    // Показ блока по нажатию на поис или телефон


    return (
        <div className={showSearchAndPhone ? "modal_header_desctop" : "hide"}>

        {/* Блок с поиском по клику из навигации > 1000px  */}
            <div className="modal_header_desctop-search block-search">
                <div className="block-search_title">
                    <h3>Поиск</h3>
                    <span className="btn close_modal_header" >
                        <img src={CloseBlockProfession} alt={CloseBlockProfession} />
                    </span>
                </div>

                <div className="block-search_content ">
                    <input  type="text" placeholder="Что будем искать?" />
                </div>
            </div>

        {/* Блок с телефоном по клику из навигации > 1000px  */}
            <div className="modal_header_desctop-phone block-phone">
                <div className="block-search_title">
                    <h3>Связатсься с клиникой</h3>
                    <span className="btn close_modal_header" >
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

export default ModalHeader;
