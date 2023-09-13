import { useState, useEffect } from 'react';
import React from 'react';

function SailOfCurrensy(props) {
    const { finalBalanse, userAuthorized, setAmountCorrency, sellUserMoney, displaySing, input1, setSellUserMoney, input2, sratrBalanseInWallet, setStartBalanseInWallet, setFinalBalanse, setFinalBalanseRow2, buyUserMoney, setStartBalanseInWalletRow2, setDisplaySing } = props.sellObj;

    const [nameOfValues, setNameOfValues] = useState([])

    function selectMoneyInVallet(event) {
        setFinalBalanse(0);
        setFinalBalanseRow2(0);
        setDisplaySing('none')
        for (let key in userAuthorized[0].money) {
            if (key === event.target.value) {
                setStartBalanseInWallet(userAuthorized[0].money[key])
                setSellUserMoney(key);
                input1.current.value = '';
                input2.current.value = '';
            }
        }

        for (let key in userAuthorized[0].money) {
            if (key === buyUserMoney) {
                setStartBalanseInWalletRow2(userAuthorized[0].money[key])

            }
        }
    }

    useEffect(() => {

        if (userAuthorized.length !== undefined) {
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }

    }, [userAuthorized.length])



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

export default SailOfCurrensy