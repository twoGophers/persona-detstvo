import './Doctor.scss';
import React from 'react';
import { useRef, useEffect, useState} from 'react';

import Doctor_img from '../../assets/images/Doctor.png';

export default function Doctor(props) {


//Hoock
const [scrollBlock, setScrollBlock] = useState(0);
const inputRef = useRef();

    // Для отображения когда до скролили до элемента
    // Положение скролла

    // window.addEventListener('scroll', () => {
    //     let scroll = document.documentElement.scrollTop,
    //     windowWidth = document.documentElement.clientWidth,
    //     windowHeight = document.documentElement.clientHeight,
    //     windowTop = document.documentElement.scrollHeight;

    //     function onEntry(entry) {
    //         entry.forEach(change => {
    //           if (change.isIntersecting) {
    //            console.log("+")
    //           }
    //         });
    //       }
          
    //       let options = {
    //         threshold: [0.5] };
    //       let observer = new IntersectionObserver(onEntry, options);
    //       let elements = document.querySelector('.doctor-body');
    //       observer.observe(elements);

    // })
let scrollHandlerDoctor = () => {
    let position_doctor = Math.round(inputRef.current.getBoundingClientRect().top);

    let scroll_block = position_doctor - props.data;
    let testScroll = 0;

    if(scroll_block < 100 && scroll_block > -600) {
        testScroll = scroll_block;
    } else {
        return scroll_block;
    }

    setScrollBlock(testScroll / 4);
}



    useEffect(() => {
        let doctor_body__content = document.querySelector('.doctor-body__content br');

        if(window.innerWidth < 420) {
            doctor_body__content.remove();
        }
        window.addEventListener("scroll", scrollHandlerDoctor, true);
        return () => {
        window.removeEventListener("scroll", scrollHandlerDoctor, true);
        };
    }, []);


    return (
        <section className='section section__blue doctor'  ref={inputRef}>
            <div className="section__container doctor-body" style={{marginTop : `-${props.data / 10}px`}}>
                <div className="doctor-body__title">
                    <h2 className='section__title' id='about_doctor'>
                        Врачи с большой буквы
                    </h2>
                    <div className="doctor-body__content section__content">
                        Детская клиника «Персона Детство»&nbsp;— это врачи <br/>различных специальностей, широкий спектр услуг,<br/> современное оборудование и&nbsp;уникальный дизайн. <br />С любовью и&nbsp;заботой к&nbsp;каждой маленькой Персоне.
                    </div>
                    <a href="/" className='btn doctor-body__link'>Познакомиться с врачами</a>
                </div>
                <div className="doctor-body__img" style={{marginTop : scrollBlock + 'px'}}>
                    <img src={Doctor_img} alt={Doctor_img} />
                </div>
            </div>
        </section>
    )
}
