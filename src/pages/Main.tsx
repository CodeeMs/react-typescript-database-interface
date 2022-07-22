import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import MostProfileList from '../components/MostProfileList';
import { IGlobalUsers, IUsers } from '../types/types';
import axios from 'axios';
import RandomProfileBlock from '../components/RandomProfileBlock';
import { LocalStorage } from 'ts-localstorage';
import { LocalKey } from 'ts-localstorage';
import Statistics from '../components/Statistics';
import GetUserList from '../components/GetUserList';
import Footer from '../components/Footer';
import ModalWindow from '../components/ModalWindow';
import { CSSTransition } from 'react-transition-group';
import SuccessBanner from '../components/SuccessBanner';


const Main = () => {

    const [users, setUsers] = useState<IUsers[]>([]),
    [keys, setKeys] = useState<any>(3),
    [btnDis, setBtnDis] = useState<boolean>(false),
    [totalUnlock, setTotalUnlock] = useState<any>(0),
    [globalUsers, setGlobalUsers] = useState<IGlobalUsers[]>([]),
    [showModalCss, setShowModalCss] = useState<boolean>(false),
    [modal, setModal] = useState<string>('modal hidden'),
    [successBannerClass, setSuccessBannerClass] = useState<string>('success__page hidden');
    

    const key = new LocalKey("keys", 0, {
        hasDefaultValue: true,
    });

    const keyOfTrue = new LocalKey("true", false, {
        hasDefaultValue: true,
    });

    const keyStat = new LocalKey("stat", 0, {
        hasDefaultValue: true,
    });

    const getRandomInt = (arg: number) => {
        return Math.floor(Math.random() * arg);
    }

    const [x, setX] = useState<number>(getRandomInt(101)),
    [y, setY] = useState<number>(getRandomInt(101)),
    [z, setZ] = useState<number>(getRandomInt(10)),
    [currentSum, setCurrentSum] = useState<number>((x + (y*z) - (y -x + (-z)) - y));

    const keyGetter = () =>{
        let temp: number = Number(LocalStorage.getItem(key));
        if(temp > 0){
            LocalStorage.setItem(key, keys-1);
            let temp = LocalStorage.getItem(key);
            setKeys(temp);
            LocalStorage.setItem(keyStat, totalUnlock+1);
            temp = LocalStorage.getItem(keyStat);
            setTotalUnlock(temp);
        }
        if (temp === 1){
            setBtnDis(true);
        }
    }
    
    const fetching = async (arg: number, func: Function ) =>{
        try {
            const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users?_limit=' + arg);
            func(response.data);
        } catch (error) {
            alert(error);
        }
    }


    const openModal = () =>{
        setModal('modal');
        setShowModalCss(true);
        setX(getRandomInt(101));
        setY(getRandomInt(101));
        setZ(getRandomInt(10));
        setCurrentSum((x + (y*z) - (y -x + (-z)) - y));
    }

    const justCloseModal = (callback: any) => {
        setModal('modal hidden');
        setShowModalCss(false);
    }

    const closeModal = (callback: any) => {
        setModal('modal hidden');
        setSuccessBannerClass('success__page');
        setShowModalCss(false);
    }

    const addOneKey = () =>{
        setKeys(keys + 1);
        LocalStorage.setItem(key, keys+1);
        setBtnDis(false);
    }

    useEffect( () =>{
        if(!LocalStorage.getItem(keyOfTrue)){
            LocalStorage.setItem(keyOfTrue, true);
            LocalStorage.setItem(key, 3);
            setKeys(3);
        }

        let temp = LocalStorage.getItem(key);
        setKeys(temp);
        fetching(4, setUsers);
        fetching(10, setGlobalUsers);

        if(temp === 0){
            setBtnDis(true);
          
        } else{
            setBtnDis(false);
        }

        let tempLock = LocalStorage.getItem(keyStat);
        setTotalUnlock(tempLock);

    }, []);


    return (
        <section className='main'>
            <Header keys={keys} openModal={openModal}/>
            <Content/>
            <MostProfileList users={users}/>
            <RandomProfileBlock keys={keys} keyGetter={keyGetter} btnDis={btnDis} getRandomInt={getRandomInt}/>
            <Statistics totalUnlock={totalUnlock}/>
            <GetUserList globalUsers={globalUsers}/>
            <CSSTransition timeout={500} in={showModalCss} classNames="modal__animation" unmountOnExit>
                <ModalWindow modal={modal} closeModal={closeModal} addOneKey={addOneKey} x={x} y={y} z={z} currentSum={currentSum} justCloseModal={justCloseModal}/>
            </CSSTransition>
            <SuccessBanner successBannerClass={successBannerClass} onClick={() => setSuccessBannerClass('success__page hidden')}/>
            <Footer openModal={openModal}/>
        </section>
    );
};

export default Main;