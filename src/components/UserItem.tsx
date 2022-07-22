import React from 'react';
import { IGlobalUsers } from '../types/types';

interface IGlUserItem{
    glUser: IGlobalUsers;
    userItemClass: string;
}

const UserItem = ({glUser, userItemClass}: IGlUserItem) => {
    return (
        <div className={userItemClass}>
            <h3 className='user__title'>General info:</h3>
            <p className='user__text'>ID: <span className='card__data'>{glUser.id}</span></p>
            <p className='user__text'>Name: <span className='card__data'>{glUser.name}</span></p>
            <p className='user__text'>Username: <span className='card__data'>{glUser.username}</span></p>
            <p className='user__text'>E-mail: <span className='card__data'>{glUser.email}</span></p>
            <p className='user__text'>Phone: <span className='card__data'>{glUser.phone}</span></p>
            <p className='user__text__adress'>Street: <span className='card__data'>{glUser.address.street}</span></p>
            <p className='user__text__adress'>City: <span className='card__data'>{glUser.address.city}</span></p>
            <p className='user__text__adress'>Zipcode: <span className='card__data'>{glUser.address.zipcode}</span></p>
    </div>
    );
};

export default UserItem;