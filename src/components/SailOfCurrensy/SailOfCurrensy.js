import { useState, useEffect } from 'react';

function SailOfCurrensy(props) {
    const { sellUserMoney, setSellUserMoney, balanse, userAuthorized, setBalanse, amountСurrencyToSell, setAmountСurrencyToSell } = props.data;
    const [nameOfValues, setNameOfValues] = useState([])

    function setupMoney(event) {
        for (let key in userAuthorized[0].money) {
            if (key === sellUserMoney) {
                setBalanse(userAuthorized[0].money[key])
            }

        }
        setSellUserMoney(event.target.value)
    }

    useEffect(() => {
        if (userAuthorized.length !== undefined) {
            setBalanse(userAuthorized[0].money.USD);
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }
    }, [userAuthorized.length])

    function setAmountCorrency(event) {
        setAmountСurrencyToSell(event.target.value);
        let result = balanse - (+event.target.value);
        if (result >= 0) {
            setBalanse(parseFloat(result.toFixed(2)));
        }
        else if (result <= 0) {
            alert('Недостатньо коштів на рахунку');
            setAmountСurrencyToSell(0);
            for (let key in userAuthorized[0].money) {
                if (key === sellUserMoney) {
                    setBalanse(userAuthorized[0].money[key])
                }
            }
        }

    }

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