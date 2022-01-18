import './Direction.scss';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Analyzes from '../../assets/images/Analyzes.png';
import Syringe from '../../assets/images/syringe.png';
import ultrasound from '../../assets/images/ultrasound.png';
import medChest from '../../assets/images/4firstaidkit.png';
import stethoscope from '../../assets/images/stethoscope.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.scss';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);



export default function Direction(props) {

    //Hoock
    const sliderActiv = useRef();
    const directionRef = useRef();

    let [directionBlock, setDirectionBlock] = useState(0);

    let slider_item = [
        {id : 1, images : Analyzes, title : 'Анализы', content : 'Диагностика состояния здоровья  для профилактики и контроля  лечения заболеваний.', button : 'Список анализов'},
        {id : 2, images : Syringe, title : 'Вакцинация', content : 'Вакцинация детей по национальному календарю, а также для защиты ребенка от вирусов и бактерий', button : 'Вакцины и рекомендации'},
        {id : 3, images : ultrasound, title : 'УЗИ', content : 'Высокоточная УЗИ-диагностика на оборудовании экспертного класса.', button : 'Оборудование и рекомендации'},
        {id : 4, images : medChest, title : 'Патронаж', content : 'Комплексное индивидуальное медицинское сопровождение ребенка в клинике или с выездом врачей на дом.', button : 'Программы и преимущества'},
        {id : 5, images : stethoscope, title : 'Приём врача', content : 'Наши волшебники врачи делают всё, чтобы дети были здоровые и счастливые.', button : 'Специалисты в клинике'}
    ];

    let scrollHandlerDoctor = () => {
        let position_direction = Math.round(directionRef.current.getBoundingClientRect().top);
        
        let testScrollDirection = 0;
    
        if(position_direction < 600 && position_direction > -600) {
            testScrollDirection = position_direction;
        } else {
            return position_direction;
        }

        setDirectionBlock(600 - testScrollDirection);


        // let direction = document.querySelector('.direction');
        // if(window.innerWidth < 420) {
        //     direction.style.marginTop = `-10vh`;
        // }
        
    }

    
    
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandlerDoctor, true);
        return () => {
        window.removeEventListener("scroll", scrollHandlerDoctor, true);
        };
    }, []);


    return (
        <section className='section section__orange direction' ref={directionRef} >
            <div className='section__container direction-body'>
                <div className='direction-body__title'>
                    <div className='section__title'>
                        Достигли высот в важном
                    </div>
                </div>
                <div className='direction-body__slider'>
                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{'clickable': true}} navigation={true} className='mySwiper'>
                        {slider_item.map(({id, images, title, content, button}) => (
                        <SwiperSlide ref={sliderActiv} key={id}>
                            <div className='mySwiper__img'>
                                <img src={images} alt={images}  />
                            </div>
                            <div className='mySwiper__content'>
                                <div className="mySwiper__title section__content-title">
                                    {title}
                                </div>
                                <div className="mySwiper__content-text section__content">
                                    {content}
                                </div>
                                <button className='btn btn-analysez'>{button}</button>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
