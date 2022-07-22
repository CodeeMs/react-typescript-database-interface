import React from 'react';
import { IUsers } from '../types/types';
import MostProfileItem from '../components/MostProfileItem';



interface IUserList{
    users: IUsers[]
}

const MostProfileList = ({users} : IUserList ) : JSX.Element => {

    return (
        <section className='mostProfile__list'>
                {users.map(user =>
                    <MostProfileItem user={user} key={user.id}/>
                )}
        </section>
    );
};

export default MostProfileList;