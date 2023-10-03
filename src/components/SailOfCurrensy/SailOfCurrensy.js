import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addValueForSail } from "../App/store2";
import Row1Left from '../Row1/Row1Left';
import useRatesAnotherbase from '../HelperFunctions/useRatesAnotherbase ';


function SailOfCurrensy(props) {
    const { finalBalanse, setAmountCorrency, sellUserMoney, displaySing, input1, setSellUserMoney, input2, setFinalBalanse, setFinalBalanseRow2, buyUserMoney, setStartBalanseInWalletRow2, setDisplaySing, setAmountOfCurrencyRow1 } = props.sellObj;

    const userMoney = useSelector((state) => state.userMoney);
    const { fetchRates } = useRatesAnotherbase();

    const [nameOfValues, setNameOfValues] = useState([]);
    const [sratrBalanseInWallet, setStartBalanseInWallet] = useState(userMoney.USD)
    // console.log(userMoney.USD)

    const dispatch = useDispatch();





    function selectMoneyInVallet(event) {
        // setFinalBalanse(0);
        // setFinalBalanseRow2(0);
        setDisplaySing('none');


        for (let key in userMoney) {
            if (key === event.target.value) {
                setSellUserMoney(event.target.value)
                setStartBalanseInWallet(userMoney[key])
                console.log(key)
                // setSellUserMoney(key);
                input1.current.value = '';
                input2.current.value = '';
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

    }, [Object.keys(userMoney).length])



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
                        {finalBalanse === 0 ? sratrBalanseInWallet : finalBalanse}  {sellUserMoney}
                    </div>
                </div>
                <div className="right__sell__money">
                    <div className='row__sing'
                        style={{ display: displaySing }}>-</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                        onChange={setAmountCorrency} ref={input1} />
                </div>
            </div>
        </>
    )
}

export default React.memo(SailOfCurrensy);