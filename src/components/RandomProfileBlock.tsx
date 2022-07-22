import React, { useState } from 'react';
import RandomProfile from './RandomProfile';
import key from '../img/key.png';
import random from '../img/random.jpg';
import { IRandomUser } from '../types/types';
import axios from 'axios';
import RandomPanel from './RandomPanel';
import { IRandomProfileBlock } from '../types/types';
import { CSSTransition } from 'react-transition-group';


const RandomProfileBlock = ({keyGetter, btnDis, keys, getRandomInt}:IRandomProfileBlock) : JSX.Element => {

    const randomPic = require.context( '../img/random_img', true, /\.jpg$/ );
    const paths = randomPic.keys();
    const randomPicArray = paths.map( path => randomPic(path));

    const [imgState, setImgState] = useState<boolean>(false);
    const [randomUser, setRandomUser] = useState<any>({});
    const [profImage, setProfImage] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const [noteValue, setNoteValue] = useState<string>('');
    const [warningClass, setWarningClass] = useState<string>('random__warning hidden');
    const [getProfileCss, setGetProfileCss] = useState<boolean>(false);
   
    const getRandomUser = async () =>{
        try {
            setGetProfileCss(false);
            const response = await axios.get<IRandomUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10');
            const randNum = getRandomInt(10);
            setRandomUser(response.data[randNum]);
            setProfImage(randomPicArray[randNum]);
            setImgState(true);
            keyGetter(keyGetter);
            setWarningClass('random__warning hidden');
            setNote('');
            setGetProfileCss(true);
        } catch (error) {
            alert(error);
        }
    }
    
    const addTextNote = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.currentTarget.value.length >= 25){
            setNoteValue(e.currentTarget.value.slice(0, 25));
        } else{
            setNoteValue(e.currentTarget.value);
        }
        
    }

    const addNote = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(imgState){
            setNote(noteValue);
            setNoteValue('');
        } else{
            setWarningClass('random__warning');
        }
        
    }

    return (
        <section className='random__block'>
           
            <RandomPanel 
                getRandomUser={getRandomUser}
                addNote={addNote}
                addTextNote={addTextNote}
                btnDis={btnDis} 
                keys={keys} 
                key={key} 
                warningClass={warningClass}
                noteValue={noteValue}
             />
             
            {!imgState
                ? <img className='random__base__img' src={random} alt="prof" /> 
                : <CSSTransition timeout={500} in={getProfileCss} classNames="random__animation">
                    <RandomProfile randomUser={randomUser} note={note} pathFile={profImage}/>
                  </CSSTransition>
            }
        </section>
    );
};

export default RandomProfileBlock;