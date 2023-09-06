import './start.css'
import React from 'react';
import { useState, useEffect } from 'react';

export default function Start() {
    const key = '167d57c9ec214838861c8a6de1d14489'


    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchCurrencyRates() {
            try {
                const response = await fetch(
                    `https://openexchangerates.org/api/latest.json?app_id=${key}`
                );
                const data = await response.json();
                setRates(data.rates);
                setLoading(false);

            } catch (error) {
                setLoading(false);
            }
        }
        fetchCurrencyRates();
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