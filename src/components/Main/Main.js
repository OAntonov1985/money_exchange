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


function Main(props) {

    const userInfo = useSelector((state) => state.userInfo);
    const userMoney = useSelector((state) => state.userMoney);
    // console.log(userMoney)
    const lengthArr = Object.keys(userInfo).length


    const [sellUserMoney, setSellUserMoney] = useState('USD');  // назва валюти яку продаємо
    const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // назва валюти яку купляємо

    const [sratrBalanseInWalletRow2, setStartBalanseInWalletRow2] = useState(userMoney.EUR)
    // стартовий баланс валют в гаманці
    const [inputNumberRow1, setInputNumberRow1] = useState(0);
    const valueForSail = useSelector((state) => state.valueForSail);







    const [finalBalanse, setFinalBalanse] = useState(0); // залишковий баланс рахунку з якого продаємо
    const [finalBalanseRow2, setFinalBalanseRow2] = useState(0);  // залишковий баланс рахунку на який купляємо

    const [amountOfCurrencyRow1, setAmountOfCurrencyRow1] = useState(0); //кількість валюти яку продємо
    const [amountOfCurrencyRow2, setAmountOfCurrencyRow2] = useState(0); //кількість валюти яку купляємо

    const [actualCourse, setActualCourse] = useState(null);   //актуальний курс валюти 

    const [displaySing, setDisplaySing] = useState('none');
    const [buttonActive, setBittonActive] = useState(true);

    const [modalMakeDeal, setmodalmakeDeal] = useState(false)

    const [buttonClassname, setButtonClassname] = useState('btn_inactive')


    const input1 = React.createRef(null)
    const input2 = React.createRef(null)


    const sellObj = { displaySing };


    const buyObj = { finalBalanseRow2, setFinalBalanseRow2, buyUserMoney, displaySing, input2, input1, actualCourse, setFinalBalanse, finalBalanse, setDisplaySing, sellUserMoney, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney, setAmountCorrency, setAmountOfCurrencyRow2, setAmountOfCurrencyRow1, inputNumberRow1 };

    const modalFinal = { modalMakeDeal, amountOfCurrencyRow1, amountOfCurrencyRow2, sellUserMoney, buyUserMoney }

    // function clearFunction() {
    //     input1.current.value = '';
    //     input2.current.value = '';
    //     setDisplaySing('none');
    //     setFinalBalanse(0);
    //     setFinalBalanseRow2(0);
    //     setAmountOfCurrencyRow1(0);
    //     setAmountOfCurrencyRow2(0);

    //     // for (let key in userMoney) {
    //     //     if (key === sellUserMoney) {
    //     //         setStartBalanseInWallet(userMoney[key])
    //     //     }
    //     // }

    //     for (let key in userMoney.money) {
    //         if (key === buyUserMoney) {
    //             setStartBalanseInWalletRow2(userMoney[key]);
    //             break
    //         }
    //         else if (key !== buyUserMoney) {
    //             setStartBalanseInWalletRow2(0);
    //         }
    //     }
    // }


    function setAmountCorrency(event) {

        // setAmountOfCurrencyRow1(parseFloat((+input1.current.value).toFixed(2)));
        // setAmountOfCurrencyRow2(parseFloat((+input2.current.value * 10).toFixed(2)));


        // // змінюємо баланс на рахунку після вводу в input
        // // setFinalBalanse(parseFloat((sratrBalanseInWallet - (+input1.current.value)).toFixed(2)))
        // setFinalBalanseRow2(parseFloat((sratrBalanseInWalletRow2 + (+input1.current.value) * actualCourse).toFixed(2)))

        // let result = sratrBalanseInWallet - (+event.target.value);
        let moneyToSell = +input1.current.value * actualCourse;

        // if (result >= 0) {
        //     input2.current.value = parseFloat(moneyToSell.toFixed(2));
        //     setDisplaySing('block');
        // }
        // // якщо недостатньо коштів повертаємо початковий балан рахунків
        // else if (result < 0) {
        //     alert('Недостатньо коштів на рахунку');
        //     clearFunction()
        // }
    }



    function buttonPushToMakeDeal() {
        setmodalmakeDeal(true);
    }

    // function buttonFinalDeal() {
    //     console.log(999)
    //     setmodalmakeDeal(false);
    //     // clearFunction()

    // }

    return (
        <>  {lengthArr !== 0 ?
            <div className='main__page'>
                <div className='moneyOpsion'><div>Продаж {valueForSail}</div>
                </div>
                <CurrencyRates />
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

export default React.memo(Main);




