import './main.css'
import React from 'react';
import { useState, useEffect } from 'react';
import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuyUserMoney from '../BuyUserMoney/BuyUserMoney';
import Arrow from '../../img/pngegg.png'

export default function Main(props) {
    const { userAuthorized } = props;
    const [rotation, setRotation] = useState(180);

    const [sellUserMoney, setSellUserMoney] = useState('USD');  // назва валюти яку продаємо
    const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // назва валюти яку купляємо   


    const [amountСurrencyToSell, setAmountСurrencyToSell] = useState(0)// кілкість валюти яку продаємо
    const [amountСurrencyToBuy, setAmountСurrencyToBuy] = useState(0)// кілкість валюти яку купляємо

    const [balanse, setBalanse] = useState(null) // залишковий баланс рахунку з якого продаємо
    const [balanseBuy, setBalanseBuy] = useState(null)  // залишковий баланс рахунку на який купляємо

    const [actualCourse, setActualCourse] = useState(null);   //актуальний курс валюти
    const [column, setColumn] = useState('column') // для тоглу строк
    const length = userAuthorized.length;


    const sellObj = { setSellUserMoney, balanse, userAuthorized, setBalanse, amountСurrencyToSell, setAmountСurrencyToSell, setAmountСurrencyToBuy, setAmountCorrency, sellUserMoney };

    const course = { actualCourse, setActualCourse, sellUserMoney, buyUserMoney };

    const buyObj = { amountСurrencyToBuy, userAuthorized, balanseBuy, setBalanseBuy, buyUserMoney }



    function setAmountCorrency(event) {
        setAmountСurrencyToSell(event.target.value);

        // змінюємо баланс на рахунках після вводу в input
        let result = balanse - (+event.target.value);
        let moneyToSell = +event.target.value * actualCourse;
        let moneyToBuy = balanseBuy + moneyToSell;

        if (result >= 0) {
            setBalanse(parseFloat(result.toFixed(2)));
            setAmountСurrencyToBuy(parseFloat(moneyToSell.toFixed(2)))
            setBalanseBuy(parseFloat(moneyToBuy.toFixed(2)))
        }
        else if (result < 0) {
            alert('Недостатньо коштів на рахунку');
            setAmountСurrencyToSell(0);
            setAmountСurrencyToBuy(0);

            // якщо недостатньо коштів повертаємо початковий балан рахунків
            for (let key in userAuthorized[0].money) {
                if (key === sellUserMoney) {
                    setBalanse(userAuthorized[0].money[key])
                }
            }

            for (let key in userAuthorized[0].money) {
                if (key === buyUserMoney) {
                    setBalanseBuy(userAuthorized[0].money[key])
                }
            }
        }

        setBuyUserMoney("EUR")
    }


    function toggleRows() {
        setRotation(rotation + 180);
        setColumn('column-reverse')
    }


    // console.log(buyMoney)
    // console.log(amountСurrencyToBuy)
    // console.log(actualCourse)
    // async function fetchSupportedSymbols() {
    //     try {
    //         const response = await fetch(
    //             `https://api.exchangerate.host/symbols`
    //         );
    //         const data = await response.json();
    //         sumbolsOfValues = Object.keys(data.symbols);

    //         // console.log(sumbolsOfValues)
    //         // setActualCourse(data.rates.EUR);
    //         // setLoading(false);

    //     } catch (error) {
    //         // setLoading(false);
    //     }
    // }
    // fetchSupportedSymbols();
    // function currencyCalc() {
    //     console.log(amountСurrencyToSell)
    // }





    return (
        <>  {length !== undefined ?
            <div className='main__page'>
                <div className='moneyOpsion'><div>Продаж {sellUserMoney}</div>
                </div>
                <CurrencyRates course={course} />
                <SailOfCurrensy sellObj={sellObj} />

                <div className="toggle__money" onClick={toggleRows}>
                    <img className="arrow__img"
                        src={Arrow} // Зображення стрілки
                        alt="Стрілка"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                </div>

                <BuyUserMoney buyObj={buyObj} />
                <div className="submit__deal">
                    <button className='button__submit btn__main'>Make a deal</button>
                </div>
            </div> : <ErrorBoundary />}
        </>
    );
}



// когда удаляю все цифри нужно вернуть баланс