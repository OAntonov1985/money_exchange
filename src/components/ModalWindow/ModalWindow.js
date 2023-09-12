import './modal.css';
import React, { useState, useEffect } from 'react';
// import sumbols from '../../data/sumbols.json';
import axios from 'axios';

import Modal from 'react-modal';
const appRoot = document.getElementById('root'); // Знайдіть кореневий елемент свого додатку
Modal.setAppElement(appRoot);

function ModalWindow(props) {
    const { isModalOpen, setIsModalOpen, setBuyUserMoney, setStartBalanseInWalletRow2, userAuthorized, setFinalBalanseRow2, setStartBalanseInWallet, setFinalBalanse, sellUserMoney, setDisplaySing } = props.obj

    const [initialValueOfArray, setInitialValueOfArray] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('');


    // let [sumbolsOfValues, setSumbolsOfValues] = useState(sumbols);

    // function findAnotherСurrency(event) {
    //     let string = event.target.value
    //     console.log(string.toUpperCase())
    //     // setIsModalOpen(true)
    // }

    // function catchNameOfСurrency(event) {
    //     console.log(event.target.textContent)
    //     setBuyUserMoney(event.target.textContent)
    //     setIsModalOpen(false)
    // }



    useEffect(() => {
        axios.get('https://openexchangerates.org/api/currencies.json')
            .then((response) => {
                const entries = Object.entries(response.data);
                console.log('go')
                setInitialValueOfArray(entries);
            })
            .catch((error) => {
                console.error('Ошибка при запросе:', error);
            });
    }, []);







    let filteredResults;


    // console.log(Object.entries(sumbols))


    const handleSearchChange = (event) => {
        setSelectedCurrency(event.target.value);
        filteredResults = initialValueOfArray.filter(([abbreviation]) =>
            abbreviation.toLowerCase().includes(selectedCurrency.toLowerCase())
        );
        setInitialValueOfArray(filteredResults)
    };
    // console.log(filteredResults)



    function catchNameOfСurrency(abbreviation) {
        setBuyUserMoney(abbreviation);
        setIsModalOpen(false);
        setDisplaySing('none')
        for (let key in userAuthorized[0].money) {
            if (key === abbreviation) {
                setStartBalanseInWalletRow2(userAuthorized[0].money[key]);
                console.log(filteredResults)

                break
            }
            else {
                setFinalBalanseRow2(0);
                setStartBalanseInWalletRow2(0);
                setFinalBalanse(0);
                for (let key in userAuthorized[0].money) {
                    if (key === sellUserMoney) {
                        setStartBalanseInWallet(userAuthorized[0].money[key])
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

export default ModalWindow