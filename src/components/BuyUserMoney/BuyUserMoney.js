import { useState, useEffect } from 'react';

function BuyUserMoney(props) {
    const { amountСurrencyToBuy, userAuthorized, balanseBuy, setBalanseBuy, buyUserMoney, secondRowSign, displaySing, input2, setAmountСurrencyToBuy, setAmountCorrency } = props.buyObj;
    const [nameOfValues, setNameOfValues] = useState([])

    function changeValue(event) {
        // console.log(event.target.value)
        // console.log(+input2.current.value)


        setAmountСurrencyToBuy(+input2.current.value)
        setBalanseBuy(balanseBuy + amountСurrencyToBuy)
        // let result = balanseBuy + amountСurrencyToBuy;
        console.log('func')
        // console.log(result)
    }
    // let result = balanseBuy + amountСurrencyToBuy;
    // // console.log('func')
    // console.log(result)

    // console.log(amountСurrencyToBuy)


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

                <div className="right__sell__money"><div className='row__plus' style={{ display: displaySing }}>{secondRowSign}</div><input type="number" className='input__sell'
                    placeholder="0"
                    value={amountСurrencyToBuy}
                    onChange={changeValue}
                    ref={input2} /></div>
            </div>
        </>
    )

}

export default BuyUserMoney;