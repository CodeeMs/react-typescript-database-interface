import React from 'react';
import { IAddInput } from '../../../types/types';

const AddInput = ({onChange, value}: IAddInput): JSX.Element => {
    return (
        <input value={value} type="text" className='addInput' placeholder='Enter your note here (no more than 25 characters)' onChange={onChange}/>
    );
};

export default AddInput;