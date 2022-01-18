import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo.svg';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__logo">
                <img src={logo} alt={logo}  />
            </div>
            <a href="/">Политика кондифициальности</a>
            <p>Сдедано в TEST, запрограммированно в TEST</p>
        </div>
    )
}
