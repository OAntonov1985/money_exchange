import './start.css'
import React from 'react';
import { useSelector } from 'react-redux';




export default function Start() {

    const actualCourse = useSelector((state) => state.actualCourse.rates);

    return (
        <>
            <div className='start__page'>
                <div className='current__values'>
                    <h3>Курси валют на сьогодні</h3>
                </div>
                <div className='usd'>Один доллар коштує:
                    {!actualCourse ? 'Loading' : <ul>
                        <li key='1' className='value__list'>{parseFloat(actualCourse.PLN.toFixed(2))} польських злотих (PLN)</li>
                        <li key='2' className='value__list'>{parseFloat(actualCourse.CHF.toFixed(2))} швейцарський франки (GBP)</li>
                        <li key='3' className='value__list'>{parseFloat(actualCourse.EUR.toFixed(2))} євро (EUR)</li>
                        <li key='4' className='value__list'>{parseFloat(actualCourse.GBP.toFixed(2))} британських фунти (GBP)</li>
                    </ul>}
                </div>
            </div>

        </>
    );
}

