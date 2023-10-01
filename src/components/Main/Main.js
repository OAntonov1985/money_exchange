import '../ModalWindow/modal.css';
import './main.css';

import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuyUserMoney from '../BuyUserMoney/BuyUserMoney';
import ModalFinishDeal from '../ModalFinishDeal/ModalFinishDeal';


export default function Main(props) {

    const userInfo = useSelector((state) => console.log(state.userInfo));
    const userMoney = useSelector((state) => state.userMoney);
    console.log(userMoney)
    const { userAuthorized } = props;

    const [sellUserMoney, setSellUserMoney] = useState('USD');  // назва валюти яку продаємо
    const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // назва валюти яку купляємо

    const [sratrBalanseInWallet, setStartBalanseInWallet] = useState(userMoney.USD)
    const [sratrBalanseInWalletRow2, setStartBalanseInWalletRow2] = useState(userMoney.EUR)
    // стартовий баланс валют в гаманці







    const [finalBalanse, setFinalBalanse] = useState(0); // залишковий баланс рахунку з якого продаємо
    const [finalBalanseRow2, setFinalBalanseRow2] = useState(0);  // залишковий баланс рахунку на який купляємо

    const [amountOfCurrencyRow1, setAmountOfCurrencyRow1] = useState(0); //кількість валюти яку продємо
    const [amountOfCurrencyRow2, setAmountOfCurrencyRow2] = useState(0); //кількість валюти яку купляємо

    const [actualCourse, setActualCourse] = useState(null);   //актуальний курс валюти 

    const [displaySing, setDisplaySing] = useState('none');
    const [buttonActive, setBittonActive] = useState(true);

    const [modalMakeDeal, setmodalmakeDeal] = useState(false)

    const [buttonClassname, setButtonClassname] = useState('btn_inactive')
    const length = userAuthorized.length;

    const input1 = React.createRef(null)
    const input2 = React.createRef(null)


    const sellObj = { finalBalanse, userAuthorized, setFinalBalanse, setAmountCorrency, sellUserMoney, displaySing, input1, setSellUserMoney, input2, sratrBalanseInWallet, setStartBalanseInWallet, setFinalBalanseRow2, buyUserMoney, setStartBalanseInWalletRow2, setDisplaySing };

    const course = { actualCourse, setActualCourse, sellUserMoney, buyUserMoney };

    const buyObj = { userAuthorized, finalBalanseRow2, setFinalBalanseRow2, buyUserMoney, displaySing, input2, input1, actualCourse, setFinalBalanse, sratrBalanseInWallet, finalBalanse, setDisplaySing, sellUserMoney, setStartBalanseInWallet, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney, setAmountCorrency, clearFunction, setAmountOfCurrencyRow2, setAmountOfCurrencyRow1 };

    const modalFinal = { modalMakeDeal, amountOfCurrencyRow1, amountOfCurrencyRow2, sellUserMoney, buyUserMoney, buttonFinalDeal }

    function clearFunction() {
        input1.current.value = '';
        input2.current.value = '';
        setDisplaySing('none');
        setFinalBalanse(0);
        setFinalBalanseRow2(0);
        setAmountOfCurrencyRow1(0);
        setAmountOfCurrencyRow2(0);

        for (let key in userAuthorized[0].money) {
            if (key === sellUserMoney) {
                setStartBalanseInWallet(userAuthorized[0].money[key])
            }
        }

        for (let key in userAuthorized[0].money) {
            if (key === buyUserMoney) {
                setStartBalanseInWalletRow2(userAuthorized[0].money[key]);
                break
            }
            else if (key !== buyUserMoney) {
                setStartBalanseInWalletRow2(0);
            }
        }
    }

    // console.log(userInfo)
    function setAmountCorrency(event) {
        console.log(event)
        console.log(777)
        setAmountOfCurrencyRow1(parseFloat((+input1.current.value).toFixed(2)));
        setAmountOfCurrencyRow2(parseFloat((+input2.current.value * 10).toFixed(2)));


        // змінюємо баланс на рахунку після вводу в input
        setFinalBalanse(parseFloat((sratrBalanseInWallet - (+input1.current.value)).toFixed(2)))
        setFinalBalanseRow2(parseFloat((sratrBalanseInWalletRow2 + (+input1.current.value) * actualCourse).toFixed(2)))

        let result = sratrBalanseInWallet - (+event.target.value);
        let moneyToSell = +input1.current.value * actualCourse;

        if (result >= 0) {
            input2.current.value = parseFloat(moneyToSell.toFixed(2));
            setDisplaySing('block');
        }
        // якщо недостатньо коштів повертаємо початковий балан рахунків
        else if (result < 0) {
            alert('Недостатньо коштів на рахунку');
            clearFunction()
        }
    }



    function buttonPushToMakeDeal() {
        console.log(888)
        setmodalmakeDeal(true);
    }

    function buttonFinalDeal() {
        console.log(999)
        setmodalmakeDeal(false);
        clearFunction()

    }


    useEffect(() => {
        console.log(input1)

        // if (input1.current.value.length === 0 || input2.current.value.length === 0) {
        //     setButtonClassname('btn_inactive');
        //     setDisplaySing('none')
        //     input1.current.value = '';
        //     input2.current.value = '';
        // }
        // else if (input1.current.value.length !== 0 || input2.current.value.length !== 0) {
        //     setButtonClassname('button__submit btn__main');
        //     setDisplaySing('block')
        //     setBittonActive(false);
        // }

    }, [input1, input2])

    return (
        <>  {userInfo === undefined ?
            <div className='main__page'>
                <div className='moneyOpsion'><div>Продаж {sellUserMoney}</div>
                </div>
                <CurrencyRates course={course} />
                <SailOfCurrensy sellObj={sellObj} />
                <BuyUserMoney buyObj={buyObj} />
                <ModalFinishDeal modalFinal={modalFinal} />
                <div className="submit__deal">
                    <button
                        className={buttonClassname}
                        disabled={buttonActive}
                        onClick={buttonPushToMakeDeal}>
                        Продати {sellUserMoney} і купити {buyUserMoney}
                    </button>
                </div>
            </div> : <ErrorBoundary />}
        </>
    );
}




