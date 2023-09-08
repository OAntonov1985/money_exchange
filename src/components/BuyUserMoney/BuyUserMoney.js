import { useState, useEffect } from 'react';

function BuyUserMoney(props) {
    const { amountСurrencyToBuy, userAuthorized, balanseBuy, setBalanseBuy, buyUserMoney } = props.buyObj;
    const [nameOfValues, setNameOfValues] = useState([])

    function changeValue(event) {
        console.log(event.target.value)
    }

    useEffect(() => {

        if (userAuthorized.length !== undefined) {
            setBalanseBuy(userAuthorized[0].money.EUR);
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }

    }, [userAuthorized.length])

    // function setupMoney(event) {

    //     for (let key in userAuthorized[0].money) {
    //         if (key === event.target.value) {
    //             setBalanseBuy(userAuthorized[0].money[key])
    //         }
    //     }

    //     // setSellUserMoney(event.target.value)
    //     // setAmountСurrencyToSell(0);
    //     // setAmountСurrencyToBuy(0);
    // }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <select value={buyUserMoney} onChange={changeValue}>
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="balanse">Баланс Вашого рахунку: <br /> {balanseBuy} {buyUserMoney} </div>
                </div>

                <div className="right__sell__money"><input type="number" className='input__sell' value={amountСurrencyToBuy} onChange={changeValue} /></div>
            </div>
        </>
    )

}

export default BuyUserMoney;
// parseFloat(amountСurrencyToSell * actualCourse.toFixed(2))
// value={amountСurrencyToBuy }