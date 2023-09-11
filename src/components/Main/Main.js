import '../ModalWindow/modal.css'
import './main.css'
import React from 'react';
import { useState, useEffect } from 'react';
import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuyUserMoney from '../BuyUserMoney/BuyUserMoney';
import ModalWindow from '../ModalWindow/ModalWindow';
import Arrow from '../../img/pngegg.png'

export default function Main(props) {
    const { userAuthorized } = props;
    const [rotation, setRotation] = useState(180);


    const [sellUserMoney, setSellUserMoney] = useState('USD');  // назва валюти яку продаємо
    const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // назва валюти яку купляємо   



    const [sratrBalanseInWallet, setStartBalanseInWallet] = useState(userAuthorized[0].money.USD)
    const [sratrBalanseInWalletRow2, setStartBalanseInWalletRow2] = useState(userAuthorized[0].money.EUR)
    // стартовий баланс валют в гаманці

    const [finalBalanse, setFinalBalanse] = useState(0) // залишковий баланс рахунку з якого продаємо
    const [finalBalanseRow2, setFinalBalanseRow2] = useState(0)  // залишковий баланс рахунку на який купляємо

    const [actualCourse, setActualCourse] = useState(null);   //актуальний курс валюти
    const [column, setColumn] = useState('column') // для тоглу строк

    const [firstRowSign, setFirstRowfirstRowSign] = useState('-')
    const [secondRowSign, setSekondRowfirstRowSign] = useState('+')

    const [displaySing, setDisplaySing] = useState('none')
    const length = userAuthorized.length;


    const input1 = React.createRef(null)
    const input2 = React.createRef(null)


    const sellObj = { finalBalanse, userAuthorized, setFinalBalanse, setAmountCorrency, sellUserMoney, firstRowSign, displaySing, input1, setSellUserMoney, input2, sratrBalanseInWallet, setStartBalanseInWallet };

    const course = { actualCourse, setActualCourse, sellUserMoney, buyUserMoney };

    const buyObj = { userAuthorized, finalBalanseRow2, setFinalBalanseRow2, buyUserMoney, secondRowSign, displaySing, input2, input1, actualCourse, setFinalBalanse, sratrBalanseInWallet, finalBalanse, setDisplaySing, sellUserMoney, setStartBalanseInWallet, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney }



    function setAmountCorrency(event) {
        // змінюємо баланс на рахунку після вводу в input
        setFinalBalanse(parseFloat((sratrBalanseInWallet - (+input1.current.value)).toFixed(2)))
        setFinalBalanseRow2(parseFloat((sratrBalanseInWalletRow2 + (+input1.current.value) * actualCourse).toFixed(2)))


        let result = sratrBalanseInWallet - (+event.target.value);
        let moneyToSell = +input1.current.value * actualCourse;

        if (result >= 0) {
            input2.current.value = parseFloat(moneyToSell.toFixed(2))
        }
        // якщо недостатньо коштів повертаємо початковий балан рахунків
        else if (result < 0) {
            alert('Недостатньо коштів на рахунку');
            setFinalBalanse(0)
            setDisplaySing('none');
            input1.current.value = ''
            input2.current.value = ''

            for (let key in userAuthorized[0].money) {
                if (key === sellUserMoney) {
                    setFinalBalanse(userAuthorized[0].money[key])
                }
            }

            for (let key in userAuthorized[0].money) {
                if (key === buyUserMoney) {
                    setFinalBalanseRow2(userAuthorized[0].money[key])
                }
            }
        }

        setBuyUserMoney("EUR")
    }
    // console.log(finalBalanse)


    function toggleRows() {
        setRotation(rotation + 180);
        setColumn(column === 'column' ? 'column-reverse' : 'column');
        setFirstRowfirstRowSign(firstRowSign === '-' ? '+' : '-');
        setSekondRowfirstRowSign(secondRowSign === '+' ? '-' : '+')
    }


    useEffect(() => {

        if (finalBalanse !== 0) {
            if (column === 'column') {
                setDisplaySing('block')
            }
        }

    }, [finalBalanse])



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