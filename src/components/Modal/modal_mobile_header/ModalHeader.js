import React, { useState,  useRef} from 'react';
import './ModalHeader.scss';
import search_orange from '../../../assets/images/search-orange.svg';
import baby from '../../../assets/images/Baby0-1.png';

// Мобильная версия меню
export default function ModalHeader({active, setActive, listItem, iconSearch, iconPhone, iconBurger}) {

    // Style vector active
    let transformDown = {
        transform: 'rotate(45deg)'
    };
    let transformUp = {
        transform: 'rotate(-135deg)'
    };

    const [modalService, setModalService] = useState(transformDown);
    const [modalClinick, setModalClinick] = useState(transformDown);

// Style Links and Item links
    let [showService, setShowService] = useState(false);
    let [showClinick, setShowClinick] = useState(false);

    let showModalService = () => {
        setShowService(true);
        setModalService(transformUp);
        if(showService) {
            setShowService(false);
            setModalService(transformDown);
        }
    };

    let showModalClinick = () => {
        setShowClinick(true);
        setModalClinick(transformUp);
        if(showClinick) {
            setShowClinick(false);
            setModalClinick(transformDown);
        }
    };    

// Link item
    let linkItem = [
        {id : 1, text : 'Наши врачи', style : {
            color: `#81b3ff`
        }, path : '/'},
        {id : 2, text : 'Акции', style : {
            color: `#ffa2a2`
        }, path : '/'},
        {id : 3, text : 'Отзывы', style : {
            color: `#b4a6ff`
        }, path : '/'},
        {id : 4, text : 'Контакты', style : {
            color: `#ff9e80`
        }, path : '/'},
    ];

// Modal search

    let refSearchInput = useRef();
    let [showTitleSearch, setShowTitleSearch] = useState(false);

    let searchModal = () => {
        if(refSearchInput.current.value) {
            setShowTitleSearch(true);
        }
        return refSearchInput.current.value = '';
    }
    
    return (
        <div  className={active ? "modal-header modal-header-active" : "modal-header"} 
        //onClick={() => setActive(false)}
        >
            <div className="modal-header-body" onClick={(e) => e.stopPropagation()}>
                <div className={iconBurger ? "modal-navigation modal-active" : "hide"}>
                    <div className="btn modal-navigation__servise" 
                        onClick={() => { showModalService()}}>
                        <span>Услуги</span>
                        <div className= 'arrow arrow-down' style={modalService}></div>
                    </div>
                    <div className={showService ? "modal-service show mod-service" : "modal-service hide mod-service"}>
                        {listItem[0].listItem.map( item => (
                            <a href="/"  key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    <div className="btn modal-navigation__clinick"
                    onClick={() => {showModalClinick()}}>
                        <span>Клиника</span>
                        <div className= 'arrow-green arrow-down' style={modalClinick}></div>
                    </div>
                    <div className={showClinick ? "modal-service show  mod-clinick" : "modal-service hide mod-clinick"}>
                        {listItem[1].listItem.map( item => (
                            <a href="/" key={item.id}>{item.name}</a>
                        ))}
                    </div>
                    {linkItem.map(({id, text, style, path}) => (
                        <div className="modal-links" key={id}>
                            <a href={path} style={style}>{text}</a>
                        </div>
                    ))}
                </div>
                <div className={iconSearch ? "modal-search modal-active" : " hide"}>
                    <div className="modal-search-title">
                        <h1>Поиск</h1>
                    </div>
                    <div className="title-search">
                        <input type="text" ref={refSearchInput} placeholder='Что будем искать?' onKeyPress={(e) => e.key === 'Enter' && searchModal()} />
                        <img src={search_orange} alt={search_orange} onClick={() => searchModal()} />
                    </div>
                    <div className={showTitleSearch ? "mod-search-title show" : "mod-search-title hide"}>
                        <h1>К сожалению временно не работает...</h1>
                    </div>
                </div>
                <div className={iconPhone ? "modal-contact modal-active" : "hide"}>
                    <div className="modal-contact-title">
                        <h1>Связатсься с клиникой</h1>
                    </div>
                    <div className="modal-contact-title modal-contact-phone">
                        <h1>8(901)000-00-00</h1>
                    </div>
                    <div className="modal-contact-title modal-contact-phone">
                        <h1>Позвоните мне</h1>
                    </div>
                    <div className="modal-contact-img">
                        <img src={baby} alt={baby} />
                    </div>
                </div>
            </div>
        </div>
    )
}
