import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import useRatesAnotherbase from '../HelperFunctions/useRatesAnotherbase ';



function SailOfCurrensy(props) {
    const { displaySing, input1, setSellUserMoney, buyUserMoney, setStartBalanseInWalletRow2, setDisplaySing, inputNumberRow1, setInputNumberRow1, sellUserMoney, setFinalBalanse, sratrBalanseInWalletRow2, actualCourse } = props.sellObj;

    const userMoney = useSelector((state) => state.userMoney);
    const { fetchRates } = useRatesAnotherbase();


    const [nameOfValues, setNameOfValues] = useState([]);
    const [sratrBalanseInWallet, setStartBalanseInWallet] = useState(userMoney.USD);

    function selectMoneyInVallet(event) {
        setDisplaySing('none');

        for (let key in userMoney) {
            if (key === event.target.value) {
                setSellUserMoney(event.target.value)
                setStartBalanseInWallet(userMoney[key])
                fetchRates(key);
            }
        }

        for (let key in userMoney) {
            if (key === buyUserMoney) {
                setStartBalanseInWalletRow2(userMoney[key]);
            }
        }
    }

    useEffect(() => {

        if (Object.keys(userMoney).length !== undefined) {
            setNameOfValues(Object.keys(userMoney));
        }

        if (input1.current.value.length === 0) {
            setDisplaySing('none');
        }

    }, [Object.keys(userMoney).length, input1]);


    function event(event) {
        if ((sratrBalanseInWallet - (+event.target.value)) >= 0) {
            setDisplaySing('block');
            setInputNumberRow1(+event.target.value);
        }
        else {
            alert("Помилка! Недостатньо коштів на рахунку");
            setInputNumberRow1(0);
            setDisplaySing('none');
            input1.current.value = '';
            setFinalBalanse(0)
        }
    };

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <select onChange={selectMoneyInVallet}>
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="balanse">Баланс Вашого рахунку: <br />
                        {parseFloat((sratrBalanseInWallet - inputNumberRow1).toFixed(2))}
                        {sellUserMoney}
                    </div>
                </div>
                <div className="right__sell__money">
                    <div className='row__sing'
                        style={{ display: displaySing }}>-</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                        onChange={event}
                        ref={input1}
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(SailOfCurrensy);