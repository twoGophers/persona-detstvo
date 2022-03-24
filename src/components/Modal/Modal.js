import React from 'react';
import './Modal.scss';
import { useState, useEffect} from 'react';

//db
import item_doctor from '../db/Item_doctor';
import item_stock from '../db/Item_stock';

//img
import CloseModalRed from '../../assets/images/Close_Icon_icon-icons.com_69144.svg';

// img list Doctor
import DoctorModalImg from '../../assets/images/Doctor.png';
import IconUserDoctor from '../../assets/images/doctors/doctor-no-img.png';
import FilterDoctor from '../../assets/images/doctors/filter.svg';
import FilterDoctorWhite from '../../assets/images/doctors/filterWhite.svg';
import CloseBlockProfession from '../../assets/images/doctors/x-10329.svg';
//Style
import './Stock.scss';
import './DoctorModal.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectOptions } from '@testing-library/user-event/dist/select-options';

export default function Modal() {

//Получение клика на Main.js - отображение информации и фона в зависимости какое окно вызвали с главной страницы
    let showModal = useSelector(state => state.showModal);
    let titleModal = useSelector(state => state.titleModal);
    let mainModal = useSelector(state => state.mainModal);
    let colorBg = useSelector(state => state.colorBg);
    let doctorModal = useSelector(state => state.doctorModal);

    let dispatch = useDispatch();
    let showModalRedux = () => {
        dispatch({type: "SHOW_MODAL", payload : false, title : '', nameComponent : '', colorBg : ''})
    };

// Категории докторов в выпадающем блоке
    let profDoctor = [
        {id : 1, prof : 'Все'},
        {id : 2, prof : 'Логопед'},
        {id : 3, prof : 'Невролог'},
        {id : 4, prof : 'Хирург'},
        {id : 5, prof : 'Эндокринолог'},
    ];

// Переключение картинки при клике на Выбрать специальность
    const [imgFilterImg, setImgFilterImg] = useState(false);

// Показ выбора специальности докторов при клике на Выбрать специальность
    const [show_block_filter_doctor, setShow_block_filter_doctor] = useState(false);

// Список карточек докторов из базы
    const [profileDoctor, setProfileDoctor] = useState(item_doctor);


// Начало : Фильтр докторов
    const profile_doctor = (item) => {

        if(item == 'Все') {
            setProfileDoctor(item_doctor);
            return;
        };

        const filteredDoctor = item_doctor.filter( it => it.prof === item);
        setProfileDoctor(filteredDoctor);
    };
// Конец : Фильтр докторов


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

                {/*Начало : модалка с услугами */}
                    <div className={mainModal ? 'stock' : 'hide'}>
                        <div className="stock-block">
                            {item_stock.map(({id, path, color, block, colorBlock, images, title, content, timeStock, timeStockTwo}) => (
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
                        </div>
                        <a href="/" className='stock-btn'>Услуги</a>
                    </div>
                {/*Конец : модалка с услугами */}

                {/* Начало : модалка с врачами */}
                    <div className={doctorModal ? "modal-doctor" : "hide"}>
                        <div className="modal-doctor__header">
                            <div className="modal-doctor__header-content">
                                <span className='modal-doctor__header_title'>«Здоровье детей — <br/> наша главная ценность»</span> 
                                <span className='modal-doctor__header_content'>Иванова Софья</span>  
                                <span className='modal-doctor__header_content'>Зав. педиатрическим  отделением</span>
                            </div>
                            <div className="modal-doctor__header-img">
                                <img src={DoctorModalImg} alt={DoctorModalImg} />
                            </div>
                        </div>

                        {/* Начало : Кнопка выбора по категориям */}
                            <div className="modal-doctor__main user-doctor">
                                <div className="user-doctor__filter">
                                    <span>Выберите специальность:</span>

                                    {/* Начало : Выпадающее меню с направлением деятельности врачей  */}
                                        <button className='btn user-doctor__filter-btn' 
                                            onMouseOver={() => setImgFilterImg(true)} 
                                            onMouseLeave={() => setImgFilterImg(false)} 
                                            onClick={() => setShow_block_filter_doctor(true)}>
                                            Все 
                                            <img src={imgFilterImg ? FilterDoctorWhite : FilterDoctor} alt={imgFilterImg ? FilterDoctorWhite : FilterDoctor} />
                                        </button>
                                

                                        <div className={show_block_filter_doctor ? "user-doctor__filter-profession profession" : "hide"}>
                                            <div className="profession__header">
                                                <button className='btn profession-btn'
                                                    onClick={() => setShow_block_filter_doctor(false)}>
                                                    <img src={CloseBlockProfession} alt={CloseBlockProfession} />
                                                </button>
                                            </div>

                                            {/* Начало : фильтрация по категориям деятельности, клик в блоке */}
                                                <div className="profession__content">
                                                    {profDoctor.map(item => (
                                                        <ul key={item.id}>
                                                            <li onClick={() => profile_doctor(item.prof)}>{item.prof}</li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            {/* Конец : фильтрация по категориям деятельности, клик в блоке */}
                                        </div>
                                    {/* конец : Выпадающее меню с направлением деятельности врачей  */}    
                                </div>                  

                                {/*Начало : Карточка докторов */}
                                    <div className="user-doctor__cart">
                                        { profileDoctor.map(({id, images, name, surname, middleName, profile}) => (
                                            <div className="doctor_block" key={id}>
                                                <img className="doctor_block_img" src={require('../../assets/images/doctors/' + images)} alt="" />
                                                <div className="doctor_block_content">
                                                    <p className="doctor_block_content-name">{name}</p>
                                                    <p className="doctor_block_content-surname">{surname}</p>
                                                    <p className="doctor_block_content-patronymic">{middleName}</p>
                                                    <div className="doctor_block_content-specializator">
                                                        {profile}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                {/*Конец : Карточка докторов */}

                            </div>
                        {/* Конец : Кнопка выбора по категориям */}
                    </div>
                {/* Конец : модалка с врачами */}

            </div>
        {/* Конец : Main модального окна */}
    </div>
  </div>
  );
}
