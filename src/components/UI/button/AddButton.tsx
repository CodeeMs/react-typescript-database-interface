import React from 'react';
import { IButton } from '../../../types/types';

const AddButton = ({children, onClick, disabled}:IButton) => {
    return (
        <button className='addBtn' onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default AddButton;