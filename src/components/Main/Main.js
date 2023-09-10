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

    // function reduser(state, action) {
    // }

    // const [test, dispatch] = useReduser()

    const bal = userAuthorized[0].money.USD
    // console.log(userAuthorized[0].money.USD)

    const [sellUserMoney, setSellUserMoney] = useState('USD');  // назва валюти яку продаємо
    const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // назва валюти яку купляємо   


    const [amountСurrencyToSell, setAmountСurrencyToSell] = useState(null)// кілкість валюти яку продаємо
    // const [amountСurrencyToBuy, setAmountСurrencyToBuy] = useState(null)// кілкість валюти яку купляємо

    const [balanse, setBalanse] = useState(null) // залишковий баланс рахунку з якого продаємо
    const [balanseBuy, setBalanseBuy] = useState(null)  // залишковий баланс рахунку на який купляємо

    const [actualCourse, setActualCourse] = useState(null);   //актуальний курс валюти
    const [column, setColumn] = useState('column') // для тоглу строк

    const [firstRowSign, setFirstRowfirstRowSign] = useState('-')
    const [secondRowSign, setSekondRowfirstRowSign] = useState('+')

    const [displaySing, setDisplaySing] = useState('none')
    const length = userAuthorized.length;


    const input1 = React.createRef(null)
    const input2 = React.createRef(null)


    const sellObj = { balanse, userAuthorized, setBalanse, setAmountCorrency, sellUserMoney, firstRowSign, displaySing, input1, setSellUserMoney };

    const course = { actualCourse, setActualCourse, sellUserMoney, buyUserMoney };

    const buyObj = { userAuthorized, balanseBuy, setBalanseBuy, buyUserMoney, secondRowSign, displaySing, input2, input1, actualCourse }



    function setAmountCorrency(event) {

        setAmountСurrencyToSell(+input1.current.value);

        // змінюємо баланс на рахунку після вводу в input
        setBalanse(parseFloat((bal - (+input1.current.value)).toFixed(2)))


        let result = balanse - (+event.target.value);
        let moneyToSell = +input1.current.value * actualCourse;

        if (result >= 0) {
            input2.current.value = parseFloat(moneyToSell.toFixed(2))
        }
        // якщо недостатньо коштів повертаємо початковий балан рахунків
        else if (result < 0) {
            alert('Недостатньо коштів на рахунку');
            // setAmountСurrencyToSell(null);
            // setAmountСurrencyToBuy(null);
            setDisplaySing('none');
            input1.current.value = ''
            input2.current.value = ''

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
        setColumn(column === 'column' ? 'column-reverse' : 'column');
        setFirstRowfirstRowSign(firstRowSign === '-' ? '+' : '-');
        setSekondRowfirstRowSign(secondRowSign === '+' ? '-' : '+')
    }


    useEffect(() => {

        if (amountСurrencyToSell !== null) {
            if (column === 'column') {
                setDisplaySing('block')
            }
        }

    }, [input1])


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
                {/* <button onClick={() => dispatch}>Push</button> */}

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