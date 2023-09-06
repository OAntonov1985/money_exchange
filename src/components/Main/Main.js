import './main.css'
import React from 'react';
import { useState, useEffect } from 'react';

export default function Main(props) {
    const { userAuthorized } = props;
    const [sellUserMoney, setSellUserMoney] = useState('USD');
    const [buyUserMoney, setBuyUserMoney] = useState('EUR');
    const [actualCourse, setActualCourse] = useState(null)
    const [balanse, setBalanse] = useState(null)
    const length = userAuthorized.length;

    let nameOfValies = [];
    useEffect(() => {
        if (userAuthorized.length !== undefined) {
            setBalanse(userAuthorized[0].money.USD);
            nameOfValies = Object.keys(userAuthorized[0].money);
        }
    }, [userAuthorized.length])


    function setupMoney(event) {
        for (let key in userAuthorized[0].money) {
            if (key === sellUserMoney) {
                setBalanse(userAuthorized[0].money[key])
            }

        }
        setSellUserMoney(event.target.value)
    }

    async function fetchCurrencyRates() {
        try {
            const response = await fetch(
                `https://api.exchangerate.host/latest?base=${sellUserMoney}`
            );
            const data = await response.json();
            console.log(data.rates.EUR)
            setActualCourse(data.rates.EUR);
            // setLoading(false);

        } catch (error) {
            // setLoading(false);
        }
    }
    // fetchCurrencyRates();


    return (
        <>  {length !== undefined ? <div className='main__page'>
            <div className='moneyOpsion'><div>Продаж {sellUserMoney}</div>
                {/* <div>Обрати іншу валюту
                    <select onChange={setupMoney}>
                        {nameOfValies.map((currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div> */}
            </div>
            <div className='actualCourse'>Астуальний курс: 1 {sellUserMoney} = {actualCourse} {buyUserMoney}</div>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value"><select onChange={setupMoney}>
                        {nameOfValies.map((currency, index) => (
                            <option key={index} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="balanse">Баланс рахунку: {balanse}</div>
                </div>

                <div className="right__sell__money"><input type="number" className='input__sell' /></div>
            </div>
            <div className="toggle__money">toggle</div>
            <div className="buyMoney">buy</div>
            <div className="submit__deal">
                <button className='button__submit btn__main'>Make a deal</button>
            </div>
        </div> : null}


        </>
    );
}