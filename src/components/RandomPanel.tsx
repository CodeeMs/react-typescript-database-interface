import React from 'react';
import GetButton from './UI/button/GetButton';
import AddForm from './AddForm';
import { IRandomPanel } from '../types/types';
import key from '../img/key.png';

const RandomPanel = ({btnDis, getRandomUser, keys, addNote, addTextNote, warningClass, noteValue}:IRandomPanel) => {
    return (
        <div className='random__panel'>
            <div className="random__description">
            Get information about a random profile using a key. You can also add a note right inside the profile card. 
            Keys are replenished with the help of special tasks. Good luck :&#x29;
            </div>
            <div className="random__button__key">
                <GetButton disabled={btnDis} onClick={getRandomUser}>unlock</GetButton>
                <div className="keys"><span>{keys}</span> <img src={key} alt="key"/></div>
            </div>
            <div className="random__description">
                Here you can create a note that will be displayed inside the 
                profile after clicking on the confirm button.
            </div>
            <AddForm addNote={addNote} addTextNote={addTextNote} noteValue={noteValue}/>
            <div className={warningClass}>Unlock profile first!</div>
        </div>
    );
};

export default RandomPanel;