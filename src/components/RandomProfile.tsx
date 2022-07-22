import React from 'react';
import { IRandomUser } from '../types/types';

interface IRandom{
    randomUser: IRandomUser;
    note: string;
    pathFile: string;
}

const RandomProfile = ({randomUser, note, pathFile}: IRandom) : JSX.Element => {
    return (
        
        <div className='random'>
            <div className="random__container">
                <h3 className='card__title'>General info:</h3>
                <p className='card__text'>ID: <span className='card__data'>{randomUser.id}</span></p>
                <p className='card__text'>Name: <span className='card__data'>{randomUser.name}</span></p>
                <p className='card__text'>Username: <span className='card__data'>{randomUser.username}</span></p>
                <p className='card__text'>E-mail: <span className='card__data'>{randomUser.email}</span></p>
                <p className='card__text'>Phone: <span className='card__data'>{randomUser.phone}</span></p>
                <p className='card__text'>Your notes: <span className='card__data'>{note}</span></p>
            </div>
            <img src={pathFile} alt="prof" />
        </div>
    );
};

export default RandomProfile;