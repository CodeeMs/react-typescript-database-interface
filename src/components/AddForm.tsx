import React from 'react';
import { IAddForm } from '../types/types';
import AddButton from './UI/button/AddButton';
import AddInput from './UI/input/AddInput';

const AddForm = ({addTextNote, addNote, noteValue}: IAddForm): JSX.Element => {
    return (
        <form className='random__form'>
            <AddInput onChange={addTextNote} value={noteValue}/>
            <AddButton onClick={addNote}>Add</AddButton>
        </form>
    );
};

export default AddForm;