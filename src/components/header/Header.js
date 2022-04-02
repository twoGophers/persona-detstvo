import './Header.scss';
import logo from '../../assets/images/logo.svg';
import services_header from '../../assets/images/services-header.png';
import search_orange from '../../assets/images/search-orange.svg';
import search_phone from '../../assets/images/phone-orange.svg';
import emergency_help from '../../assets/images/emergency-help.svg';
import about_first from '../../assets/images/about-first.png';
import Burger from '../../assets/images/menu-orange.svg';
import CloseMobile from '../../assets/images/close-white.svg';

//Mobile version header
import ModalHeader from '../Modal/modal_mobile_header/ModalHeader';

import React, { useState } from 'react';

function Header () {
    
    //Hoock
    let [arrowTransform, setarrowTransform] = useState({
            transform: 'rotate(45deg)'
        }),

        [arrowTransformClinic, setarrowTransformClinic] = useState({
            transform: 'rotate(45deg)'
        });

    let list = [
        {
            id : 1, 
            status : false, 
            listItem : [
                {id : 1, name : 'Прием в клинике' },
                {id : 2, name : 'Патронаж' },
                {id : 3, name : 'Анализы' },
                {id : 4, name : 'УЗИ' },
                {id : 5, name : 'Вакцинация' },
                {id : 6, name : 'Ренген' },
                {id : 7, name : 'Онлайн-консультация' },
                {id : 8, name : 'Вызов врача на дом' },
                {id : 9, name : 'Справки, медосмотры' },
                {id : 10, name : 'Массаж' },
                {id : 11, name : 'Физиотерапия' },
                {id : 12, name : 'Школа будущих родителей' },
                {id : 13, name : 'Комплексные программы' }, 
            ],
        },
        {
            id : 2, 
            status : false, 
            listItem : [
                {id : 1, name : 'О нас' },
                {id : 2, name : 'Пациентам' },
                {id : 3, name : 'Новости' },
                {id : 4, name : 'Справочник родителя' },
                {id : 5, name : 'Статьи' },
            ],
        },

    ];

//Mobile modal

    const [activeModalHeader, setActiveModalHeader] = useState(false);

    let modal_header_fixed = () => {
        let header = document.querySelector('.header');
        header.style.position = 'fixed';
    }

    let modal_header_absolute = () => {
        let header = document.querySelector('.header');
        header.style.position = 'absolute';
    }

//Click navigation show window
    const [activeModalClick, setActiveModalClick] = useState(false);
    const [activeModalClickClinick, setActiveModalClinick] = useState(false);

    function showListServ () {
        if(activeModalClick) {
            setActiveModalClick(false);
            setarrowTransform({
                transform: 'rotate(45deg)' 
            });
        } else {
            setActiveModalClick(true);
            setarrowTransform({
                transform: 'rotate(-135deg)' 
            });
        };

        setActiveModalClinick(false);
        setarrowTransformClinic({
            transform: 'rotate(45deg)'
        });
    };

    function showListClinic() {
        
        if(activeModalClickClinick) {
            setActiveModalClinick(false);
            setarrowTransformClinic({
                transform: 'rotate(45deg)' 
            });
        } else {
            setActiveModalClinick(true);
            setarrowTransformClinic({
                transform: 'rotate(-135deg)'
            });
        };

        setActiveModalClick(false);
        setarrowTransform({
            transform: 'rotate(45deg)'
        });
    };

// Navigation
    function ItemNavigation() {
        return (
            <div className= 'header-navigation '>
                <div className='header-dropdown header-menu-item'>
                    <button className='header-dropdown-btn' id='oneBlock' 
                    // onClick={showListServ}
                    onClick={() => {
                        showListServ();
                    }}
                    >
                        <span >Услуги</span>
                        <div className= 'arrow arrow-down ' style={arrowTransform}></div>
                    </button>
                </div>
                <div className='header-dropdown header-menu-item'>
                    <button className='header-dropdown-btn 'id='twoBlock' 
                    onClick={() => {
                        showListClinic();
                    }}
                    >
                        <span >Клиника</span>
                        <div className= 'arrow arrow-down ' style={arrowTransformClinic}></div>
                    </button>
                </div>
                <a href= '/ '>Наши врачи</a>
                <a href= '/ '>Акции</a>
                <a href= '/ '>Отзывы</a>
                <a href= '/ '>Контакты</a>
            </div>
        )
    }

//Header modal

    //Background
    let [iconSearch, setIconSearch] = useState(false);
    let [iconPhone, setIconPhone] = useState(false);
    let [iconBurger, setIconBurger] = useState(false);

    // let fixedModal = () => {
    //     if(activeModalHeader) {
    //         modal_header_absolute();
    //     } else {
    //         modal_header_fixed();
    //     }
    // };

//Orange
    let handlerSearchOrange = () => {
        setIconBurger(false);
        setIconSearch(true);
        setIconPhone(false);
        if(iconSearch) {
            setIconSearch(false);
        };
        setActiveModalHeader(true);
        modal_header_fixed();
    };
//Phone
    let handlerSearchPhone = () => {
        setIconBurger(false);
        setIconSearch(false);
        setIconPhone(true);
        if(iconPhone) {
            setIconPhone(false);
        };
        setActiveModalHeader(true);
        modal_header_fixed();
    };

//Burger
    let handlerSearchBurger = () => {
        setIconBurger(true);
        setIconPhone(false);
        setIconSearch(false);
        if(iconBurger) {
            setIconBurger(false);
        };
        setActiveModalHeader(true);
        modal_header_fixed();
    };

    return (
        <section className='header'>
            <div className='header-container'>
                <div className= 'header-logotip-block '>
                    <a href='/' className='header-logo'>
                            <img src={logo} alt={logo} />
                    </a>        
                </div>
                {ItemNavigation()}
                <div className= 'header-contact '>
                    <div className={iconSearch ? " bg-icon-active" : "bg-icon "} 
                    style={{backgroundImage : iconSearch ? `url('${CloseMobile}')` : `url('${search_orange}')`}}
                        onClick={() => {
                            handlerSearchOrange();
                            if(iconSearch) {
                                setActiveModalHeader(false);
                                modal_header_absolute();
                            }
                        }} >   
                    </div>
                    <div className={iconPhone ? "bg-icon-active" : "bg-icon "}  
                    style={{backgroundImage : iconPhone ? `url('${CloseMobile}')` : `url('${search_phone}')`}}
                        onClick={() => {
                            handlerSearchPhone();
                            if(iconPhone) {
                                setActiveModalHeader(false);
                                modal_header_absolute();
                            }
                        }}>
                        
                    </div>
                    <div className= 'header-recording'>
                        <button  className='btn btn-bg header-recorting-btn'> 
                            <div className="header-recorting__singUp">Записаться</div> 
                            <svg className="header-recorting__singUp-svg" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.178 2.695L13.03.66a1.822 1.822 0 00-1.418.055c-.466.21-.85.593-1.067 1.064L4.687 14.478c-.03.055-.057.112-.078.17a.755.755 0 00-.106.31.663.663 0 00.04.312l1.704 4.364c.138.322.392.569.714.696.322.128.69.126 1.037-.004l4.597-1.873a.78.78 0 00.439-.474c.03-.055.057-.112.079-.17l5.857-12.7c.214-.46.25-.971.102-1.422a1.622 1.622 0 00-.894-.992zm-1.53 2.464l-3.666 7.949a.567.567 0 01-.278.276.502.502 0 01-.187.045.446.446 0 01-.181-.03l-3.617-1.43a.42.42 0 01-.244-.256.507.507 0 01.024-.377l3.667-7.95a.564.564 0 01.277-.276.473.473 0 01.369-.014l3.617 1.43a.418.418 0 01.243.256c.02.059.03.122.025.187a.535.535 0 01-.049.19zM8.006 17.715l-1.016-2.63a.66.66 0 01.007-.493l.305-.661 4.483 1.772-.305.661a.75.75 0 01-.393.374l-2.745 1.118a.268.268 0 01-.203.005.24.24 0 01-.136-.14l.003-.006z" fill="#fff"/></svg>
                        </button>
                    </div>
                    <div className={iconBurger ? "header-burger bg-icon-active" : "header-burger bg-icon"} 
                        style={{backgroundImage : iconBurger ? `url('${CloseMobile}')` : `url('${Burger}')`}}
                        onClick={() => {
                            handlerSearchBurger();
                            if(iconBurger) {
                                setActiveModalHeader(false);
                                modal_header_absolute();
                            }
                            }}>
                    </div>
                    <div className= 'header-help btn btn-bg '>
                        <img src={emergency_help} alt={emergency_help} />
                    </div>
                </div>
            </div>


            <div className= 'header-service-body '>
                {/* Service block */}
                <div 
                    className= {activeModalClick ? 'header-servise show header-servise-list' : 'header-servise hide header-servise-list'}
                    onMouseLeave={() => {
                        setActiveModalClick(false);
                        setarrowTransform({
                            transform: 'rotate(45deg)'
                        });
                        }}>
                    <div className= 'header-servise-list' onClick={(e) => e.stopPropagation()}>
                        {list[0].listItem.map(item => (
                            <a className='header-servise-link hoverLink' href= '/ ' key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    <div className= 'header-servise-img'>
                        <img className= 'header-servise-img__keys' src={services_header} alt={services_header} />
                    </div>
                </div>

                {/* Clinick block */}
                <div 
                    className= {activeModalClickClinick ? 'header-servise show header-servise-clinick' : 'header-servise hide header-servise-clinick ' }
                    onMouseLeave={() => {
                            setActiveModalClinick(false);
                            setarrowTransformClinic({
                                transform: 'rotate(45deg)'
                            });
                        }}>
                    <div className= 'header-servise-list '>
                        {list[1].listItem.map(item => (
                            <a className='header-servise-link hoverLink clinick-color' href= '/ ' key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    <div className= 'header-servise-img '>
                        <img src={about_first} alt={about_first} />
                    </div>
                </div>
            </div>

            <ModalHeader 
                active={activeModalHeader}
                setActive={setActiveModalHeader}
                listItem={list}
                iconSearch={iconSearch}
                iconPhone={iconPhone}
                iconBurger={iconBurger}
                >
            </ModalHeader>

        </section>
    )
}

export default Header;