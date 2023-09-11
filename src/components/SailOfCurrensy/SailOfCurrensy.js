import { useState, useEffect } from 'react';
import React from 'react';

function SailOfCurrensy(props) {
    const { finalBalanse, userAuthorized, setAmountCorrency, sellUserMoney, firstRowSign, displaySing, input1, setSellUserMoney, input2, sratrBalanseInWallet, setStartBalanseInWallet } = props.sellObj;

    const [nameOfValues, setNameOfValues] = useState([])

    function selectMoneyInVallet(event) {

        for (let key in userAuthorized[0].money) {
            if (key === event.target.value) {
                setStartBalanseInWallet(userAuthorized[0].money[key])
                setSellUserMoney(key);
                input1.current.value = '';
                input2.current.value = '';
            }
        }
    }

    useEffect(() => {

        if (userAuthorized.length !== undefined) {
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }

    }, [userAuthorized.length])
    // console.log(balanse2)




    // function clearInput() {
    //     setAmountСurrencyToSell('')
    // }

    // function test() {
    //     // console.log(event.target)
    //     for (let key in userAuthorized[0].money) {
    //         if (key === sellUserMoney) {
    //             setBalanse(userAuthorized[0].money[key])
    //         }
    //     }

    //     for (let key in userAuthorized[0].money) {
    //         if (key === "EUR") {
    //             setBalanseBuy(userAuthorized[0].money[key])
    //         }
    //     }

    //     setAmountСurrencyToSell(0);
    //     setAmountСurrencyToBuy(0);
    // }




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
                        style={{ display: displaySing }}>{firstRowSign}</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                        onChange={setAmountCorrency} ref={input1} />
                </div>
            </div>
        </>
    )
}

export default SailOfCurrensy