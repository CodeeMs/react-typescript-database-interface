import React from 'react';
import { ISuccessBanner } from '../types/types';

const SuccessBanner = ({successBannerClass, onClick}: ISuccessBanner): JSX.Element => {
    return (
        <section className={successBannerClass} onClick={onClick}>
            <div className="success__container">
                <h2 className='success__title'>You have earned the key!</h2>
                <h3 className='success__subtitle'>Сlick on any part of the screen to return to the main page</h3>
            </div>
        </section>
    );
};

export default SuccessBanner;