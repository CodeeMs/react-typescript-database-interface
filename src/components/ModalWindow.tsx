import React, { useEffect, useState } from 'react';
import { IDragList, IModalWindow, ITarget } from '../types/types';
import GetButton from './UI/button/GetButton';
import close from '../img/close.png';

const ModalWindow = ({modal, closeModal, addOneKey, x, y, z, currentSum, justCloseModal}: IModalWindow): JSX.Element => {

    const [cardList, setCardList] = useState<IDragList[]>([
        {id: 1, order: 1, text: 'CARD 1', note: 'this card has num 1', num: 1},
        {id: 2, order: 2, text: 'CARD 2', note: 'this card has num 2', num: 2},
        {id: 3, order: 3, text: 'CARD 3', note: 'this card has num 3', num: 3},
        {id: 4, order: 4, text: 'CARD 4', note: 'this card has num 4', num: 4},
        {id: 5, order: 5, text: 'CARD 5', note: 'this card has num 5', num: 5},
    ]);

    const [currentCard, setCurrentCard] = useState<any | null>(null),
    [inputValue, setInputValue] = useState<string | number>(''),
    [modalWrong, setModalWrong] = useState<string>('modal__wrong hidden'),
    [wrongText, setWrongText] = useState<string>('');
    
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: IDragList): void => {
        setCurrentCard(card);
        const target = e.target as ITarget;
        target.closest('.drag__card').style.border = '.2rem solid #7a8087';
        target.closest('.drag__card').style.opacity = '.7';
    }
    
    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        const target = e.target as ITarget;
        target.closest('.drag__card').style.border = '.2rem solid #e8ff62';
        target.closest('.drag__card').style.opacity = '1';
    }
    
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    }
    
    const dropHandler = (e: React.DragEvent<HTMLDivElement>, card: IDragList): void =>{
        e.preventDefault();
        setCardList(cardList.map(c =>{
            if(c.id === card.id){
                return {...c, order: currentCard.order}
            }
            if(c.id === currentCard.id){
                return {...c, order: card.order}
            }
            return c;
        }))
        
    } 

    const sortCards = (a: IDragList, b: IDragList) =>{
        if(a.order > b.order){
            return 1;
        } else{
            return -1;        
        }
    }

    const checkOrder = () =>{
        let temp = 0;
        for(let i = 0; i < cardList.length-1; i++){
            if(cardList[i].num > cardList[i+1].num){
                temp++;
            }
        }
        if(temp === cardList.length-1){
            addOneKey();
            closeModal(modalReset());
        }
    }

    const modalReset = () =>{
        setModalWrong('modal__wrong hidden');
        setInputValue('');
    }

    const checkAnswer = () =>{
        if(inputValue === currentSum){
            console.log(currentSum);
            setModalWrong('modal__wrong hidden');
            addOneKey();
            closeModal(modalReset());
        } else if(inputValue === ''){
            setWrongText('Empty field!')
            setModalWrong('modal__wrong');
        } else if(inputValue !== currentSum){
            setWrongText('Wrong answer!');
            setModalWrong('modal__wrong');
        }
    }

    const recordAnswer = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(Number(e.currentTarget.value));
    }

    
    useEffect( () =>{
        checkOrder();
    },[cardList]);

    return (
        <section className={modal}>
            <div className='modal__hidden'>
                <h2 className='modal__title'>Complete one of the suggested tasks to get the key</h2>
                <h3 className='modal__subtitle'>Arrange the cards in descending order</h3>
                <div className='drag__list'>
                    {cardList.sort(sortCards).map(card =>
                        <div
                         onDragStart={(e) => dragStartHandler(e, card)}
                         onDragLeave={(e) => dragEndHandler(e)}
                         onDragEnd={(e) => dragEndHandler(e)}
                         onDragOver={(e) => dragOverHandler(e)}
                         onDrop={(e) => dropHandler(e, card)}
                         key={card.id}
                         className='drag__card'
                         draggable={true}
                        >
                            <div className="drag__point">{card.text}</div>
                        </div>
                    )}
                </div>
                <button onClick={justCloseModal} className='modal__close'><img  className='modal__cross' src={close} alt="alt" /></button>
                <h3 className='modal__subtitle'>Or solve a random math example</h3>
                <div className="modal__random">
                    <div className="modal__example"> <span className='modal__bold'>X = </span> ( {x} + ( {y} &#215; {z} ) - ( {x} - {y} + ( - {z} ) ) - {y} ) </div>
                    <div className="modal__checkNum">
                        <span className='modal__bold'>X = </span>
                        <input className='modal__input' type="text" onChange={recordAnswer}/>
                        <GetButton onClick={checkAnswer}>Check</GetButton>
                    </div>
                    <div className={modalWrong}>{wrongText}</div>
                </div>
            </div>
        </section>
    );
};

export default ModalWindow;




