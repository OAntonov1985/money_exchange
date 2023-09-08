import { useState, useEffect } from 'react';

function SailOfCurrensy(props) {
    const { balanse, userAuthorized, setBalanse, amountСurrencyToSell, setAmountСurrencyToSell, setAmountCorrency, sellUserMoney } = props.sellObj;

    const [nameOfValues, setNameOfValues] = useState([])

    // function setupMoney(event) {

    //     for (let key in userAuthorized[0].money) {
    //         if (key === event.target.value) {
    //             setBalanse(userAuthorized[0].money[key])
    //         }
    //     }

    //     setSellUserMoney(event.target.value)
    //     setAmountСurrencyToSell(0);
    //     setAmountСurrencyToBuy(0);
    // }

    useEffect(() => {

        if (userAuthorized.length !== undefined) {
            setBalanse(userAuthorized[0].money.USD);
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }

    }, [userAuthorized.length])




    function clearInput() {
        setAmountСurrencyToSell('')
        // console.log(777)
    }

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
                        <select  >
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="balanse">Баланс Вашого рахунку: <br /> {balanse} {sellUserMoney} </div>
                </div>
                <div className="right__sell__money"><input type="number" className='input__sell' value={amountСurrencyToSell} onChange={setAmountCorrency} onFocus={clearInput} />
                </div>
            </div>
        </>
    )
}

export default SailOfCurrensy