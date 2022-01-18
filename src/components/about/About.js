import './About.scss';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import AboutFirst from '../../assets/images/about-first.png';

export default function About() {

        //Hoock
        const AboutRef = useRef();
    
        let [directionBlock, setDirectionBlock] = useState(0);

    
        let scrollHandlerDoctor = () => {
            let about = Math.round(AboutRef.current.getBoundingClientRect().top);
            let testScrollAbout = 0;
        
            if(about < 600 && about > -600) {
                testScrollAbout = about;
            } else {
                return about;
            }
    
            setDirectionBlock(600 - testScrollAbout);

            // let aboutMobile = document.querySelector('.about');
            // let about_body__img = document.querySelector('.about-body__img');
            // if(window.innerWidth < 420) {
            //     aboutMobile.style.marginTop = `-50px`;
            //     about_body__img.style.marginTop = `0px`;
            // }
            
        }
        
        useEffect(() => {
            window.addEventListener("scroll", scrollHandlerDoctor, true);
            return () => {
            window.removeEventListener("scroll", scrollHandlerDoctor, true);
            };
        }, []);

    return (
        <section className='section section__green about' ref={AboutRef} style={{marginTop : `-${(directionBlock + 1000) / 10}px`}}>
            <div className="section__container about-body">
                <div className="about-body__title">
                    <div className="about-body__title-title section__title">
                        Много веселья и ни одного вируса!        
                    </div>
                    <div className="about-body__title-content">
                        <div className="section__content">
                            Детская клиника «Персона Детство» всегда под надежной защитой от вирусов и бактерий. Атмосфера веселья радует ваших детей и помогает посещать врача с удовольствием.
                        </div>
                        <button  className='btn btn-font'><a href="/" className='about-body__link'>Узнать про клинику</a></button>
                    </div>
                </div>
                <div className="about-body__img" style={{marginTop : `10vh`}}>
                    <img src={AboutFirst} alt={AboutFirst}  />
                </div>
            </div>
        </section>
    )
}
