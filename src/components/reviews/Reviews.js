import './Reviews.scss';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

export default function Reviews() {

    //Hoock
    const ReviewsRef = useRef();

    let [reviewsBlock, setDirectionBlock] = useState(0);


    let scrollHandlerDoctor = () => {
        let testScroll = 0;

        if(window.innerWidth > 900) {
            let position_doctor = Math.round(ReviewsRef.current.getBoundingClientRect().top);

            if(position_doctor < 1200 && position_doctor > -400) {
                testScroll = position_doctor;
            } else {
                return position_doctor;
            }

            setDirectionBlock((1200 - testScroll) / 5);
        } else {
            testScroll = 50;
            setDirectionBlock(testScroll);
        }

        
    }
    
    useEffect(() => {
        if(window.innerWidth < 420) {
            window.addEventListener("scroll", scrollHandlerDoctor, false);
        }
        window.addEventListener("scroll", scrollHandlerDoctor, true);
        return () => {
        window.removeEventListener("scroll", scrollHandlerDoctor, true);
        };
    }, []);

    return (
        <section className='section section__purple reviews' ref={ReviewsRef} style={{marginTop : `-${reviewsBlock}px`}}>
            <div className="section__container reviews-body">
                <div className="section__title">
                    Даем родителям спокойствие и уверенность
                </div>
                <div className="section__content reviews-body__content">
                    «Персона Детство» — клиника уверенных родителей! С нашими экспертами-врачами вы можете быть спокойными за здоровье вашего ребенка.
                </div>
                <div className="reviews-body__link">
                    <a href="/" className='btn reviews__link'>Что говорят пациенты</a>
                </div>
            </div>
        </section>
    )
}
