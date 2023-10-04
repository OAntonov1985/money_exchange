import './modal.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from 'react-modal';
const appRoot = document.getElementById('root');
Modal.setAppElement(appRoot);

function ModalWindow(props) {
    const { isModalOpen, setIsModalOpen, setBuyUserMoney, setStartBalanseInWalletRow2, setFinalBalanseRow2, setFinalBalanse, sellUserMoney, setDisplaySing, input2, input1 } = props.obj

    const namesOfCyrrebcies = useSelector((state) => state.namesOfCyrrebcies);
    const userMoney = useSelector((state) => state.userMoney);

    const [initialValueOfArray, setInitialValueOfArray] = useState(Object.entries(namesOfCyrrebcies));
    const [selectedCurrency, setSelectedCurrency] = useState('');




    function handleSearchChange(event) {
        setSelectedCurrency(event.target.value);

        const results = Object.entries(namesOfCyrrebcies).filter(([key, value]) =>
            key.toLowerCase().includes(selectedCurrency.toLowerCase()) ||
            value.toLowerCase().includes(selectedCurrency.toLowerCase())
        );
        setInitialValueOfArray(results);
    };


    function catchNameOfСurrency(abbreviation) {
        setBuyUserMoney(abbreviation);
        setInitialValueOfArray(Object.entries(namesOfCyrrebcies))
        setIsModalOpen(false);
        setDisplaySing('none');
        setSelectedCurrency('');
        input1.current.value = '';
        input2.current.value = '';

        for (let key in userMoney) {
            if (key === abbreviation) {
                setStartBalanseInWalletRow2(userMoney[key]);
                break
            }
            else {
                setFinalBalanseRow2(0);
                setStartBalanseInWalletRow2(0);
                setFinalBalanse(0);
                for (let key in userMoney) {
                    if (key === sellUserMoney) {

                        // setStartBalanseInWallet(userMoney[key])
                    }
                }
            }
        }
    }

    return (
        <>
            <Modal className={'custom-modal'}
                style={{ height: '50vh' }}
                isOpen={isModalOpen}
                contentLabel="Модальне вікно для пошуку валюти"
            >
                <h2>Пошук назви валюти</h2>
                <div className='serach__currensy'>
                    <input type="text" className='input__in__serachcurrensy' onChange={handleSearchChange} />
                </div>
                <div className='list__of__currensyNames' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <ul>
                        {initialValueOfArray.map(([abbreviation, fullName], index) => (
                            <li key={index} onClick={() => catchNameOfСurrency(abbreviation)} className='li__list__of__symbols'>
                                <div className='currency__symbols'>{abbreviation}</div>
                                <div className='currency__fullnamed'>{fullName}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </>
    )
}

export default React.memo(ModalWindow);