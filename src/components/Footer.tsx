import React from 'react';
import logo from '../img/logo.png';
import { IFooter } from '../types/types';

const Footer = ({openModal}: IFooter): JSX.Element => {
    return (
        <footer className='footer'>
             <img className='footer__logo' src={logo} alt="logo" />
            <div className="footer__copy">All rights Reserved 2022</div>
            <div onClick={openModal} className="footer__link">Earn keys</div>
        </footer>
    );
};

export default Footer;