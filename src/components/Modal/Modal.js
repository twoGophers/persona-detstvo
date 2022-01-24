import React from 'react';
import './Modal.scss';
import { useState, useEffect} from 'react';
//img
import CloseModalRed from '../../assets/images/Close_Icon_icon-icons.com_69144.svg';
//img list
import MomAndChild from '../../assets/images/stock/mom.jpg';
import Girl from '../../assets/images/stock/2.jpg';
import GirlOrange from '../../assets/images/stock/girl.jpg';
import Uzy from '../../assets/images/stock/uzy.jpg';
import Checkup from '../../assets/images/stock/checkup.jpg';

import './Stock.scss';

import { useDispatch, useSelector } from 'react-redux';

export default function Modal() {

    //Получение клика на Main,js
    let showModal = useSelector(state => state.showModal);
    let titleModal = useSelector(state => state.titleModal);
    let mainModal = useSelector(state => state.mainModal);

    let dispatch = useDispatch();
    let showModalRedux = () => {
        dispatch({type: "SHOW_MODAL", payload : false, title : '', nameComponent : ''})
    };

// List item
    let itemStock = [
        {
            id : 1,
            path : '/',
            color : `linear-gradient(137.64deg,#81b3ff 14.8%,#9cc7ff 97.97%)`,
            block : false,
            colorBlock : '',
            images : '',
            title : 'Режим работы детской клиники «Персона Детство» в январе',
            content : 'В предпраздничные и праздничные дни клиника «Персона Детство» работает в следующем режиме.',
            timeStock : '21 января 2022 – ',
            timeStockTwo : '21 января 2022'
        },
        {
            id : 2,
            path : '/',
            color : 'linear-gradient(137.64deg,#b4a6ff 14.8%,#c7bcff 97.97%)',
            block : true,
            colorBlock : '',
            images : MomAndChild,
            title : 'Пусть мама будет прекрасна!',
            content : 'При покупке любой Программы патронажа дарим каждой маме Подарочный Сертификат от...',
            timeStock : '01 декабря 2021 – ',
            timeStockTwo : '28 февраля 2021'
        },
        {
            id : 3,
            path : '/',
            color : 'linear-gradient(137.64deg,#7ebfb3 0,#8fceca 97.97%)',
            block : true,
            colorBlock : '',
            images : GirlOrange,
            title : 'CHECK-UP гастро энтерологический со скидкой 15% всего за 4 380 руб.!',
            content : 'Благодаря прохождению гастроэнтерологического CHECK-UP становится возможной ранняя...',
            timeStock : '01 декабря 2021 – ',
            timeStockTwo : '28 февраля 2022'
        },
        {
            id : 4,
            path : '/',
            color : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
            block : true,
            colorBlock : '',
            images : Uzy,
            title : 'Скидка 10% на комплекс УЗИ',
            content : 'Спешите воспользоваться нашим специальным предложением!',
            timeStock : '01 декабря 2021 – ',
            timeStockTwo : '28 февраля 2022'
        },
        {
            id : 5,
            path : '/',
            color : 'linear-gradient(137.64deg,#81b3ff 14.8%,#9cc7ff 97.97%)',
            block : true,
            colorBlock : '',
            images : Checkup,
            title : 'CHECK-UP обследование подростка (10-17лет) со скидкой всего за 6 700 руб.',
            content : 'Комплексное обследование в клинике Персона Детство по программе «Check-up ОБСЛЕДОВАНИЕ...',
            timeStock : '01 сентября 2021 – ',
            timeStockTwo : '30 ноября 2021'
        },
        {
            id : 6,
            path : '/',
            color : 'linear-gradient(137.64deg,#b4a6ff 14.8%,#c7bcff 97.97%)',
            block : true,
            colorBlock : '',
            images : Girl,
            title : 'CHECK-UP педиатрический',
            content : 'Позволяет контролировать состояние здоровья ребенка, намечать план оздоровительных мероприятий и предупреждать развитие болезней на ранней стадии.',
            timeStock : '01 сентября 2021 – ',
            timeStockTwo : '30 ноября 2021'
        },
    ];

  return (
  <div className={showModal ? 'modal' : 'hide'}>
    <div className="modal-container section__container">
        <div className="modal-head">
            <div className="modal-head__title section__content-title">
                {titleModal}
            </div>
            <div className="modal-head__close" onClick={() => showModalRedux()}>
                <img src={CloseModalRed} alt={CloseModalRed} />
            </div>
        </div>
        <div className="modal-main">
            <div className={mainModal ? 'stock' : 'hide'}>
                {itemStock.map(({id, path, color, block, colorBlock, images, title, content, timeStock, timeStockTwo}) => (
                    <a href={path} className="stock-item" key={id} style={{background : color, outline: `1px solid ${color}`}}>
                        <div className={ block ? "stock-item__images" : "hide"}>
                            <img src={images} alt={images} />
                        </div>
                        <div className="stock-content">
                            <div className="stock-item__title">
                                <span>
                                    {title}
                                </span>
                            </div>
                            <div className="stock-item__content">
                                <span>{content}</span>
                            </div>
                            <div className="stock-item__stock-time">
                                <span>{timeStock}</span>
                                <span>{timeStockTwo}</span>
                            </div>
                        </div>
                    </a>
                ))}
                <a href="/" className='btn btn-bg stock-btn'>Услуги</a>
            </div>
        </div>
    </div>
  </div>
  );
}
