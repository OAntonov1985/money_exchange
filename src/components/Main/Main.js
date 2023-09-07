import './main.css'
import React from 'react';
import { useState } from 'react';
import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default function Main(props) {
    const { userAuthorized } = props;
    const [sellUserMoney, setSellUserMoney] = useState('USD');
    const [amountСurrencyToSell, setAmountСurrencyToSell] = useState(0)// валюта яку продаємо
    // const [buyUserMoney, setBuyUserMoney] = useState('EUR'); // валюта яку купляємо    
    const [balanse, setBalanse] = useState(null)
    const length = userAuthorized.length;
    const data = { sellUserMoney, setSellUserMoney, balanse, userAuthorized, setBalanse, amountСurrencyToSell, setAmountСurrencyToSell }


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





    return (
        <>  {length !== undefined ? <div className='main__page'>
            <div className='moneyOpsion'><div>Продаж {sellUserMoney}</div>
            </div>
            <CurrencyRates data={data} />
            <SailOfCurrensy data={data} />

            <div className="toggle__money">toggle</div>
            <div className="buyMoney"> EUR  </div>
            <div className="submit__deal">
                <button className='button__submit btn__main'>Make a deal</button>
            </div>
        </div> : <ErrorBoundary />}
        </>
    );
}