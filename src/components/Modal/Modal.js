import React from 'react';
import './Modal.scss';

//Stock лок с картинками
import StockModal from './stock_modal/StockModal';

// Doctor
import DoctorModal from './doctor_modal/DoctorModal';

//img
import CloseModalRed from '../../assets/images/Close_Icon_icon-icons.com_69144.svg';

import { useDispatch, useSelector } from 'react-redux';

// Pagination
import 'react-pagination-bar/dist/index.css'

export default function Modal() {

//Получение клика на Main.js - отображение информации и фона в зависимости какое окно вызвали с главной страницы
    let showModal = useSelector(state => state.showModal);
    let titleModal = useSelector(state => state.titleModal);
    let stockModal = useSelector(state => state.mainModal);
    let colorBg = useSelector(state => state.colorBg);
    let doctorModal = useSelector(state => state.doctorModal);

    let dispatch = useDispatch();
    let showModalRedux = () => {
        dispatch({type: "SHOW_MODAL", payload : false, title : '', nameComponent : '', colorBg : ''})
    };

  return (
  <div className={showModal ? 'modal' : 'hide'} style={{background : colorBg}}>
    <div className="modal-container section__container">

        {/* Начало : Header модального окна */}
            <div className="modal-head">
                <div className="modal-head__title section__content-title">
                    {titleModal}
                </div>
                <div className="modal-head__close" onClick={() => showModalRedux()}>
                    <img src={CloseModalRed} alt={CloseModalRed} />
                </div>
            </div>
        {/* Конец : Header модального окна */}

        {/* Начало : Main модального окна */}
            <div className="modal-main">

                {/* Stock модалка с картинками */}
                <StockModal stockModal={stockModal}></StockModal>

                {/* Doctor модалка с картинками докторов*/}
                <DoctorModal doctorModal={doctorModal}></DoctorModal>

            </div>
        {/* Конец : Main модального окна */}
    </div>
  </div>
  );
}
