import './Doctor.scss';
import React from 'react';

import Doctor_img from '../../assets/images/Doctor.png';

export default function Doctor() {
    return (
        <section className='section section__blue doctor'>
            <div className="section__container doctor-body">
                <div className="doctor-body__title">
                    <h2 className='section__title'>
                        <b>В</b>рачи с&nbsp;большой буквы
                    </h2>
                    <div className="doctor-body__content">
                        Детская клиника «Персона Детство»&nbsp;— это врачи различных специальностей, широкий спектр услуг, современное оборудование и&nbsp;уникальный дизайн. <br />С любовью и&nbsp;заботой к&nbsp;каждой маленькой Персоне.
                    </div>
                    <a href="/" className='btn btn-font'>Познакомиться с врачами</a>
                </div>
                <div className="doctor-body__img">
                    <img src={Doctor_img} alt={Doctor_img} />
                </div>
            </div>
        </section>
    )
}
