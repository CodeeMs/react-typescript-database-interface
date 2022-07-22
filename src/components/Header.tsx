import React, { useContext, useState } from 'react';
import logo from '../img/logo.png';
import key from '../img/key.png';
import openClose from '../img/get-menu.png';
import { IHeader } from '../types/types';
import { LogContext } from '../context/context';

const Header = ({keys, openModal}: IHeader ) : JSX.Element => {
   
    const {isLogedIn, setIsLogedIn}: any = useContext(LogContext);

    const [hiddenMenuClass, setHiddenMenuClass] = useState<string>('hidden__menu');
    const [hiddenBtnClass, setHiddenBtnClass] = useState<string>('hidden__btn');
    const [temp, setTemp] = useState<number>(0);

    const logIn = (): void =>{
        setIsLogedIn(true);
    }

    const logOut = (): void =>{
        setIsLogedIn(false);
    }

    const reversMenu = (): void =>{
        if(temp % 2 === 0){
            setHiddenMenuClass('hidden__menu hidden-transform');
            setHiddenBtnClass('hidden__btn hidden__btn--active');
            setTemp(temp + 1);
        } else{
            setHiddenMenuClass('hidden__menu');
            setHiddenBtnClass('hidden__btn');
            console.log('click');
            setTemp(temp + 1);
        }
    }

    return (
        <header className='header'>
            <div className="header__container">
                <img className='header__logo' src={logo} alt="logo" />
                <h1 className='header__title'>Modern data base</h1>
                <div className="header__panel">
                    <div className="header__attemps"> <span>{keys}</span> <img className='header__key' src={key} alt="key"/></div>
                    <div className="header__get" onClick={openModal}>Earn keys</div>
                    {isLogedIn
                        ? <a className='header__link' href="#" onClick={logOut}>Log out &#8617;</a>
                        : <a className='header__link' href="#" onClick={logIn}>Log in &#10144;</a>
                    }
                </div>
            </div>

            <div className={hiddenMenuClass}>
                    <div className="header__attemps"> <span>{keys}</span> <img className='header__key' src={key} alt="key"/></div>
                    <div className="header__get" onClick={openModal}>Earn keys</div>
                    {isLogedIn
                        ? <a className='header__link' href="#" onClick={logOut}>Log out &#8617;</a>
                        : <a className='header__link' href="#" onClick={logIn}>Log in &#10144;</a>
                    }
            </div>
            <button onClick={reversMenu} className={hiddenBtnClass}><img src={openClose} alt="open-close" /></button>
        </header>
    );
};

export default Header;