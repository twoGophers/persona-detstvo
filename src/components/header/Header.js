import './Header.scss';
import logo from '../../assets/images/logo.svg';
import services_header from '../../assets/images/services-header.png';
import search_orange from '../../assets/images/search-orange.svg';
import search_phone from '../../assets/images/phone-orange.svg';
import emergency_help from '../../assets/images/emergency-help.svg';
import about_first from '../../assets/images/about-first.png';

import React, { useState } from 'react';

function Header () {
    
    //Hoock
    let [arrowTransform, setarrowTransform] = useState({
            transform: 'rotate(45deg)'
        }),

        [arrowTransformClinic, setarrowTransformClinic] = useState({
            transform: 'rotate(45deg)'
        });

    let services_list = [
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
    ];

    let clinick_list = [
        {id : 1, name : 'О нас' },
        {id : 2, name : 'Пациентам' },
        {id : 3, name : 'Новости' },
        {id : 4, name : 'Справочник родителя' },
        {id : 5, name : 'Статьи' },
    ];


    function showListServ () {
        
        let header_servise_service = document.querySelector('.header-servise-service');
            header_servise_service.classList.toggle('show');

        let header_service_body = document.querySelector('.header-service-body');
            header_service_body.addEventListener('mouseleave', () => {
                header_servise_service.addEventListener('mouseleave', () =>{
                    header_servise_service.classList.add('hide');
                    header_servise_service.classList.remove('show');
                    setarrowTransform({
                        transform: 'rotate(45deg)'
                    });
                })
        });

        let header_servise_clinick = document.querySelector('.header-servise-clinick');
            header_servise_clinick.classList.add('hide');
            header_servise_clinick.classList.remove('show');

            setarrowTransform({
                transform: 'rotate(-135deg)'
            });

    };

    function showListClinic() {
        let header_servise_clinick = document.querySelector('.header-servise-clinick');
        header_servise_clinick.classList.toggle('show');


        let header_service_body = document.querySelector('.header-service-body');
        header_service_body.addEventListener('mouseleave', () => {
            header_servise_clinick.addEventListener('mouseleave', () =>{
                header_servise_clinick.classList.add('hide');
                header_servise_clinick.classList.remove('show');
                setarrowTransformClinic({
                    transform: 'rotate(45deg)'
                });
            })
        });

        let header_servise_service = document.querySelector('.header-servise-service');
        header_servise_service.classList.add('hide');
        header_servise_service.classList.remove('show');

        setarrowTransformClinic({
            transform: 'rotate(-135deg)'
        });
    };


    return (
        <section className='header'>
            <div className='header-container'>
                <div className= 'header-logotip-block '>
                    <a href='/' className='header-logo'>
                            <img src={logo} alt={logo} />
                    </a>        
                </div>
                <div className= 'header-navigation '>
                    <div className='header-dropdown header-menu-item'>
                        <button className='header-dropdown-btn' id='oneBlock' onClick={showListServ}>
                            <span >Услуги</span>
                            <div className= 'arrow arrow-down ' style={arrowTransform}></div>
                        </button>
                    </div>
                    <div className='header-dropdown header-menu-item'>
                        <button className='header-dropdown-btn 'id='twoBlock' onClick={showListClinic}>
                            <span >Клиника</span>
                            <div className= 'arrow arrow-down ' style={arrowTransformClinic}></div>
                        </button>
                    </div>
                    <a href= '/ '>Наши врачи</a>
                    <a href= '/ '>Акции</a>
                    <a href= '/ '>Отзывы</a>
                    <a href= '/ '>Контакты</a>
                </div>
                <div className= 'header-contact '>
                    <img src={search_orange} alt={search_orange}  />
                    <img src={search_phone} alt={search_phone}  />
                    <div className= 'header-recording '>
                        <button  className='btn btn-bg header-recorting-btn'> Записаться </button>
                    </div>
                    <div className= 'header-help btn btn-bg '>
                        <img src={emergency_help} alt={emergency_help} />
                    </div>
                </div>
            </div>


            <div className= 'header-service-body '>
                <div className= 'header-servise hide header-servise-service' >
                    <div className= 'header-servise-list '>
                        {services_list.map(item => (
                            <a className='header-servise-link hoverLink' href= '/ ' key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    <div className= 'header-servise-img'>
                        <img className= 'header-servise-img__keys' src={services_header} alt={services_header} />
                    </div>
                </div>
                <div className= 'header-servise hide header-servise-clinick '>
                    <div className= 'header-servise-list '>
                        {clinick_list.map(item => (
                            <a className='header-servise-link hoverLink clinick-color' href= '/ ' key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    <div className= 'header-servise-img '>
                        <img src={about_first} alt={about_first} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header;