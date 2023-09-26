import './start.css'
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
// import fetchCurrencyRates from '../HelperFunctions/fetchCurrencyRates';
const key = '167d57c9ec214838861c8a6de1d14489';



export default function Start() {

    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchCurrencyRates = useCallback(async () => {
        try {
            const response = await fetch(
                `https://openexchangerates.org/api/latest.json?app_id=${key}`
            );
            const data = await response.json();
            if (data.base === 'USD') {
                setRates(data.rates);
                setLoading(false)
                // return data;
            } else {
                // Возвращайте ошибку или обработайте ее здесь
                throw new Error('Ошибка загрузки данных');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, []);

    // const res2 = useCallback(async () => {

    //     try {
    //         fetchCurrencyRates().then(item => {
    //             if (item.status !== undefined) {
    //                 alert("Помилка з'єднання - спробуйте пізніше")
    //             }
    //             else {
    //                 setRates(item.rates);
    //                 setLoading(false)
    //             }
    //         })
    //     } catch (error) {
    //         alert("Помилка з'єднання - спробуйте пізніше")
    //     }
    // }, [])



    useEffect(() => {
        console.log(777)
        fetchCurrencyRates()
    }, []);

    return (
        <>
            <div className='start__page'>
                <div className='current__values'>
                    <h3>Курси валют на сьогодні</h3>
                </div>
                <div className='usd'>Один доллар коштує:
                    {loading ? 'Loading' : <ul>
                        <li key='1' className='value__list'>{parseFloat(rates.PLN.toFixed(2))} польських злотих (PLN)</li>
                        <li key='2' className='value__list'>{parseFloat(rates.CHF.toFixed(2))} швейцарський франки (GBP)</li>
                        <li key='3' className='value__list'>{parseFloat(rates.EUR.toFixed(2))} євро (EUR)</li>
                        <li key='4' className='value__list'>{parseFloat(rates.GBP.toFixed(2))} британських фунти (GBP)</li>
                    </ul>}
                </div>
            </div>

        </>
    );
}

