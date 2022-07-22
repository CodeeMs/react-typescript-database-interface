import React, { useContext } from 'react';
import { IStatistics } from '../types/types';
import { LogContext } from '../context/context';

const Statistics = ({totalUnlock}: IStatistics): JSX.Element => {
    const {isLogedIn, setIsLogedIn}: any = useContext(LogContext);
    return (
       <section>
            {isLogedIn
                ? <h2 className='statistics'>For all the time you have unlocked profiles <span className='statistics__count'>{totalUnlock}</span> times!</h2>
                : <h2 className='statistics'>For all the time you have unlocked profiles <span className='statistics__count'>?</span> times! Log in, to see statistics</h2>
            }
        </section>
    );
};

export default Statistics;