import React from 'react';
import { IUsers } from '../types/types';
import profile from '../img/most-profile.png';

interface IUserItem{
    user: IUsers
}

const MostProfileItem = ({user} : IUserItem) : JSX.Element => {

    return (
        <div className='card'>
            <div className="card__head">
                <img className='card__img' src={profile} alt="profile" />
                <div className="card__subhead">
                    <h3 className='card__title'>General info:</h3>
                    <p className='card__text'>ID: <span className='card__data'>{user.id}</span></p>
                    <p className='card__text'>Name: <span className='card__data'>{user.name}</span></p>
                    <p className='card__text'>Username: <span className='card__data'>{user.username}</span></p>
                </div>
            </div>
            <div className="card__content">
                <div className="card__block">
                    <h3 className='card__title'>Contact info:</h3> 
                    <p className='card__text'>E-mail: <span className='card__data'>{user.email}</span></p>
                    <p className='card__text'>Phone: <span className='card__data'>{user.phone}</span></p>
                    <p className='card__text'>City: <span className='card__data'>{user.address.city}</span></p>
                    <p className='card__text'>Street: <span className='card__data'>{user.address.street}</span></p>
                    <p className='card__text'>Zipcode: <span className='card__data'>{user.address.zipcode}</span></p>
                    <p className='card__text'>
                        Location: x: <span className='card__data'>{user.address.geo.lat}</span>  y: <span className='card__data'>{user.address.geo.lng}</span>
                    </p>
                </div>
                <div className="card__block">
                    <h3 className='card__title'>Company info:</h3> 
                    <p className='card__text'>Website: <span className='card__data'>{user.website}</span></p>
                    <p className='card__text'>Designation: <span className='card__data'>{user.company.name}</span></p>
                    <p className='card__text'>Tagline: <span className='card__data'>{user.company.bs}</span></p>
                    <p className='card__text'>Catchphrase: <span className='card__data'>{user.company.catchPhrase}</span></p>
                </div>
            </div>
        </div>
    );
};

export default MostProfileItem;