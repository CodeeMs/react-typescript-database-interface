import React, { useState } from 'react';
import { IGetUserList } from '../types/types';
import UserItem from './UserItem';

const GetUserList = ({globalUsers}:IGetUserList): JSX.Element => {

    const [showBtnClass, setShowBtnClass] = useState<string>('more__btn');
    const [userItemClass, setUserItemClass] = useState<string>('user__item');

    const showItems = () =>{
        setShowBtnClass('more__btn hidden');
        setUserItemClass('user__item show__elems')
    }

    return (
        <section className='users'>
            <h2 className='users__title'>Here you can get a complete list from the database with basic data</h2>
            <div className="users__block">
                {globalUsers.map(glUser =>
                    <UserItem glUser={glUser} key={glUser.id} userItemClass={userItemClass}/>    
                )}
            </div>
            <button onClick={showItems} className={showBtnClass}>show more</button>
        </section>
    );
};

export default GetUserList;