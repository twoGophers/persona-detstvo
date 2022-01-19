import React from 'react';
import './Main.scss';
import baby from '../../assets/images/Baby0-1.png';
import girl from '../../assets/images/Girl4.png';
import boy from '../../assets/images/Skater1.png';
import Btn_icon from '../ui/Btn_icon';
import ModalItem from '../Modal/ModalItem';

//
import { useState, useEffect} from 'react';
import {Link} from 'react-scroll';

export default function Main() {

    //Hoock

    let main__block_age_list = [
        {
            id : 1, 
            age : '0-1', 
            ageName : 'год',
            ageMobile : '0 до 1 года', 
            color : 'linear-gradient(137.64deg,#ffa2a2 0,#ffbab6 97.97%)',
            images : baby,
            status : false,
            positionRight : `-22%`,
            positionMobile : {
                background : 'linear-gradient(137.64deg,#ffa2a2 0,#ffbab6 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Патронаж'},
                {key : 2, text : 'Вакцинация'},
                {key : 3, text : 'Прием педиатра'},
                {key : 4, text : 'УЗИ'},
                {key : 5, text : 'Неонатальный скрининг'},
            ],
        },
        {
            id : 2, 
            age : '1-3', 
            ageName : 'годa', 
            ageMobile : '1 до 3 лет', 
            color : 'linear-gradient(145deg,#80c1b7 0,#8fceca 97.97%)',
            images : girl,
            status : false,
            positionRight : `-13%`,
            positionMobile : {
                background: 'linear-gradient(145deg,#80c1b7 0,#8fceca 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Вызов врача на дом'},
                {key : 2, text : 'Прием педиатра'},
                {key : 3, text : 'Вакцинация'},
                {key : 4, text : 'УЗИ'}
            ],
        },
        {
            id : 3, 
            age : '3-18', 
            ageName : 'лет',
            ageMobile : '3 до 8 лет', 
            color : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
            images : boy,
            status : false,
            positionRight : `-5%`,
            positionMobile : {
                background : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
            },
            display : `none`,
            backgroundPosition : `10%`,
            list : [
                {key : 1, text : 'Вызов врача на дом'},
                {key : 2, text : 'УЗИ'},
                {key : 3, text : 'Лабораторные исследования'},
                {key : 4, text : 'Прием невролога'}
            ],
        },
    ];
    
    const [indexItem, setIndexItem] = useState({})
    const [styleItem, setStyleItem] = useState({main__block_age_list});

    let click__item = (index) => {
        setStyleItem( {
            ...styleItem, indexItem : styleItem.main__block_age_list[index]
        })
    };
    

    let style__item = (positionRight, index) => {
        if( index === 0 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return positionRight = '0%';
        } else if(index === 1 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return positionRight = '5%';
        } else if (index === 2 &&  styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return positionRight = '15%';
        } else {
            return positionRight;
        }
    };

    let style__item_display = (index, display) => {
        if( index === 0 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return display = 'flex';
        } else if(index === 1 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return display = 'flex';
        } else if (index === 2 &&  styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return display = 'flex';
        } else {
            return display;
        }
    };
        
    let style__item_backgroundPosition = (index, backgroundPosition) => {
        if( index === 0 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return backgroundPosition = `100%`;
        } else if(index === 1 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return backgroundPosition = `100%`;
        } else if (index === 2 &&  styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return backgroundPosition = `100%`;
        } else {
            return backgroundPosition
        }
    };
    
    // Try close itemList in click button exit
    function toggleRunning (event) {
        let main__block_age = document.querySelectorAll('.main-block');
        main__block_age.forEach(item => {
            if(item.getAttribute('name') == event.target.getAttribute('name') && event.target.getAttribute('name') == 1) {
                item.style.right = `-20%`;
            } else if(item.getAttribute('name') == event.target.getAttribute('name') && event.target.getAttribute('name') == 2) {
                item.style.right = `-13%`;
            } else if(item.getAttribute('name') == event.target.getAttribute('name') && event.target.getAttribute('name') == 3) {
                item.style.right = `-5%`;
            }
        })
    }; 

    let main__item = styleItem.main__block_age_list.map(({id, age, ageName, color, images, status, positionRight, list, display, backgroundPosition}, index) => (
        <div name={id} className="main-block" style={{right : style__item(positionRight, index, display)}}  key={id} onClick={() => {click__item(index)}}>
            <div className="main__container" 
            style={{ background: color}}>
            <div className="main__block-item" 
            style={{
                background: `url(${images})`, 
                backgroundSize : `65%`,
                backgroundPosition : style__item_backgroundPosition(index, backgroundPosition), 
                backgroundRepeat : `no-repeat`,
                }}>
                    <div className="main__title-age">
                        <div className="main__year">
                            <h1>{age}</h1>
                            <h3>{ageName}</h3>
                        </div>
                        <div  className="main__close-item" onClick={toggleRunning}>
                            <div name={id} className="main__close-btn"
                                style={{ background : color, borderRadius : `1px solid ${color}`}}>
                            </div>
                        </div>
                    </div>
                    <div className="main__list"
                            style={{display : style__item_display(index, display)}}
                    >
                        {list.map( item_list => (
                            <ul key={item_list.key}>
                                <li><Btn_icon/>{item_list.text}</li>
                            </ul>
                        ))}
                        
                    </div>
                    <div className="main__block-btn">
                        <button style={{background : color, display : style__item_display(index, display)}} className='btn'><a href="/">Все услуги</a></button>
                    </div>
                </div> 
            </div>
        </div>  
    ));


    // mobile
    let style__item__mobile = (positionMobile, index) => {
        if( index === 0 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return positionMobile = {
                background : 'linear-gradient(137.64deg,#ffa2a2 0,#ffbab6 97.97%)',
                borderTopLeftRadius: `0%`,
                borderTopRightRadius: `0%`,
            }
        } else if(index === 1 && styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return  positionMobile = {
                background : 'linear-gradient(145deg,#80c1b7 0,#8fceca 97.97%)',
                borderTopLeftRadius: `0%`,
                borderTopRightRadius: `0%`,
            };
        } else if (index === 2 &&  styleItem.main__block_age_list[index] === styleItem.indexItem) {
            return positionMobile = {
                background : 'linear-gradient(137.64deg,#ff9e80 0,#ffc9ab 97.97%)',
                borderTopLeftRadius: `0%`,
                borderTopRightRadius: `0%`,
            };
        } else {
            return positionMobile;
        }
    };

    // const closeItemMobile = (index) => {
    //     let itemClick = document.querySelectorAll('.mobile__header-close');
    //     itemClick.forEach(item => {
    //         console.log(item)
    //     })
    // }

    function positionMobileStart () {
        let itemMobile = document.querySelectorAll('.main-block__mobile');
        itemMobile.forEach(item => {
            if(item.getAttribute('name') == 1) {
                return item.style.marginTop = `0vw`;
            } else if(item.getAttribute('name') == 2) {
                return item.style.marginTop = `-20vw`;
            } else if(item.getAttribute('name') == 3) {
                return item.style.marginTop = `-20vw`;
            }
        })
    };

    useEffect(() => {
        positionMobileStart();
    },[]);

    const [modalActive, setModalActive] = useState(false);
    const [showItemModal, setShowItemModal] = useState({});

    let firsItem = main__block_age_list[0].list;

    let showHeader = () => {
        let header = document.querySelector('.header');
        header.style.display = 'none';
    }

//Style active modal

// Body mobile

    let main__item__mobile = styleItem.main__block_age_list.map((item, index) => (
        <div name={item.id} className="main-block__mobile main-block__mobile-passive"   
        key={item.id} 
        onClick={() => {
            setModalActive(!item.status);
            setShowItemModal(item);
            showHeader();
        }}
        >
            <div className="main__container__mobile"
                style={style__item__mobile(item.positionMobile, index)}
                >
                <div className="main__block-item__mobile mobile">
                    <div className="mobile__header">
                        <div className="mobile__header-title">
                            <h1 className='mobileH1'>{item.age}</h1>
                            <h3 className='mobileH1'>{item.ageName}</h3>
                        </div>
                    </div>
                </div>
                <div className="main__block-item__mobile-img"
                    style={{
                        background: `url(${item.images})`, 
                        backgroundSize : `75%`,
                        backgroundPosition : `top`, 
                        backgroundRepeat : `no-repeat`,
                    }}>  
                </div>
            </div>
        </div> 
    ));
    
    


    return (
        <div className='main'>
            <div className="main__title">
                <div className="main__title-stock">
                    <button className='btn-bg main-btn'> Акции и события</button>
                </div>
                <div className="main__title-title title">
                    <div className="title__clinick-title">
                        <h1>Клиника уверенных родителей</h1>
                    </div>
                    <div className="title__clinick-info">
                        <span>Медицинские услуги <br/>для детей всех возрастов.</span>            
                    </div>
                    <div className="title__clinick-reseption-btn">
                        <button className='btn btn-font title__clinick-reseption-btn'>
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.6248 5.21568L15.3356 1.67403C14.7961 1.37025 14.1531 1.29034 13.5481 1.4519C12.9431 1.61346 12.4255 2.00324 12.1094 2.53551L3.59275 16.8728C3.54942 16.934 3.51114 16.9984 3.47831 17.0655C3.39659 17.1709 3.34135 17.2935 3.31713 17.4232C3.2929 17.553 3.30037 17.6862 3.33894 17.8119L5.08583 23.4985C5.23065 23.9207 5.5272 24.2753 5.92061 24.4969C6.31402 24.7184 6.77764 24.7918 7.22565 24.7035L13.1756 23.3511C13.3067 23.321 13.429 23.2609 13.5324 23.1758C13.6359 23.0906 13.7175 22.9828 13.7706 22.8613C13.8139 22.8001 13.8522 22.7357 13.885 22.6686L22.4016 8.33135C22.7116 7.81018 22.8038 7.19358 22.6588 6.61207C22.5139 6.03055 22.143 5.52975 21.6248 5.21568V5.21568ZM19.4775 7.91667L14.1463 16.8915C14.1056 16.96 14.0516 17.0202 13.9874 17.0685C13.9232 17.1169 13.8501 17.1525 13.7722 17.1733C13.6943 17.1941 13.6132 17.1997 13.5334 17.1898C13.4537 17.1798 13.3769 17.1546 13.3075 17.1155L8.88951 14.6276C8.74925 14.5487 8.64739 14.4179 8.60634 14.2642C8.56529 14.1105 8.58841 13.9464 8.67061 13.808L14.0018 4.83319C14.084 4.6948 14.2186 4.59346 14.3759 4.55145C14.5332 4.50945 14.7004 4.53022 14.8407 4.60921L19.2586 7.09707C19.3281 7.13617 19.3888 7.1884 19.4374 7.25075C19.486 7.31311 19.5214 7.38437 19.5418 7.46048C19.5621 7.53659 19.5669 7.61605 19.5559 7.69432C19.5448 7.77259 19.5182 7.84815 19.4775 7.91667ZM7.47197 21.5105L6.43309 18.0866C6.36956 17.8878 6.3888 17.6715 6.48662 17.4847L6.9301 16.7381L12.4058 19.8216L11.9623 20.5682C11.9051 20.6631 11.8287 20.7456 11.7378 20.8106C11.6469 20.8755 11.5435 20.9215 11.434 20.9456L7.88214 21.7522C7.79499 21.7732 7.70331 21.7607 7.62608 21.7172C7.54885 21.6737 7.49196 21.6026 7.4672 21.5186L7.47197 21.5105Z" fill="#FFA180"></path>
                            </svg>
                            Записаться на прием
                        </button>
                    </div>
                    <Link className="title__clinick-anchor" to='about_doctor' smooth={true} duration={1000}>
                        <div className="title__clinick-anchor">
                            <p>о нашей клинке</p> 
                        </div>
                    </Link>
                </div>
            </div>
            <div className="main__block-age">
                {main__item}
                {main__item__mobile}
            </div>
            <ModalItem 
                active = {modalActive} 
                setActive = {setModalActive}
                children = {showItemModal}
                listModal = {firsItem}
                >
            </ModalItem>
        </div>
    )

}
