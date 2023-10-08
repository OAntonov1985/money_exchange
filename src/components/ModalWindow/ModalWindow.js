import './modal.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualValueForBuyRow2, actualCourseAfterChangeValue, setStartBalanseRow2, setReadInpit, setInputRow1Number, setInputRow2Number, setDisplaySing } from '../App/store2';
import namesOfCyrrebcies from '../../data/namesOfCyrrebcies.json'

import Modal from 'react-modal';
const appRoot = document.getElementById('root');
Modal.setAppElement(appRoot);

function ModalWindow(props) {
    const { isModalOpen, setIsModalOpen } = props.obj

    const userMoney = useSelector((state) => state.userMoney);
    const actualCourseAnoterBase = useSelector((state) => state.actualCourseAnoterBase);
    const valueForSail = useSelector((state) => state.valueForSail);

    const [initialValueOfArray, setInitialValueOfArray] = useState(Object.entries(namesOfCyrrebcies));
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const dispatch = useDispatch();



    // фільтр
    function handleSearchChange(event) {
        setSelectedCurrency(event.target.value);

        const results = Object.entries(namesOfCyrrebcies).filter(([key, value]) =>
            key.toLowerCase().includes(selectedCurrency.toLowerCase()) ||
            value.toLowerCase().includes(selectedCurrency.toLowerCase())
        );
        setInitialValueOfArray(results);
    };

    // зміна валюти
    function catchNameOfСurrency(abbreviation) {
        if (abbreviation === valueForSail) {
            dispatch(setReadInpit('readOnly'))
        }
        else if (abbreviation !== valueForSail) {
            dispatch(setReadInpit(''))
        }


        if (Object.keys(actualCourseAnoterBase).length !== 0) {
            dispatch(actualCourseAfterChangeValue(parseFloat((actualCourseAnoterBase[abbreviation].value).toFixed(2))));
            dispatch(actualValueForBuyRow2(abbreviation));
            dispatch(setInputRow1Number(''));
            dispatch(setInputRow2Number(''));
            dispatch(setDisplaySing('none'));
        }
        if (userMoney[abbreviation] === undefined) {
            dispatch(setStartBalanseRow2(0))
        }
        else {
            dispatch(setStartBalanseRow2(userMoney[abbreviation]))
        }
        setIsModalOpen(false);
        setInitialValueOfArray(Object.entries(namesOfCyrrebcies))
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