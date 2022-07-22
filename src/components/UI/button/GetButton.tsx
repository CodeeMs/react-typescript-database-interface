import React from 'react';
import { IButton } from '../../../types/types';

const GetButton = ({children, disabled, onClick}: IButton): JSX.Element => {
    return (
        <button className='get__btn' disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default GetButton;