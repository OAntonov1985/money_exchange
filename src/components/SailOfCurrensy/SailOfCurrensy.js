import { useState, useEffect } from 'react';

function SailOfCurrensy(props) {
    const { setSellUserMoney, balanse, userAuthorized, setBalanse, amountСurrencyToSell, setAmountСurrencyToSell, setAmountСurrencyToBuy, setAmountCorrency } = props.sellObj;
    const [nameOfValues, setNameOfValues] = useState([])

    function setupMoney(event) {
        for (let key in userAuthorized[0].money) {
            if (key === event.target.value) {
                setBalanse(userAuthorized[0].money[key])
            }
        }
        setSellUserMoney(event.target.value)
        setAmountСurrencyToSell(0);
        setAmountСurrencyToBuy(0);
    }

    useEffect(() => {
        if (userAuthorized.length !== undefined) {
            console.log()
            setBalanse(userAuthorized[0].money.USD);
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }
    }, [userAuthorized.length])


    function clearInput() {
        setAmountСurrencyToSell('')
    }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <select onChange={setupMoney} >
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="balanse">Баланс Вашого рахунку: {balanse}</div>
                </div>
                <div className="right__sell__money"><input type="number" className='input__sell' value={amountСurrencyToSell} onChange={setAmountCorrency} onClick={clearInput} /></div>
            </div>
        </>
    )
}

export default SailOfCurrensy