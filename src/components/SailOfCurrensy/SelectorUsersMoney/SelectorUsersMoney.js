import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualValueForSailRow1, actualCourseAfterChangeValue, setStartBalanseRow1 } from '../../App/store2';
import useRatesAnotherbase from '../../HelperFunctions/useRatesAnotherbase ';

function SelectorUsersMoney() {
    const dispatch = useDispatch();
    const [nameOfValues, setNameOfValues] = useState([]);

    const userMoney = useSelector((state) => state.userMoney);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const { fetchRates } = useRatesAnotherbase();

    async function selectMoneyInVallet(event) {
        if (event.target.value === valueForBuy) {
            dispatch(actualCourseAfterChangeValue(1));
            dispatch(actualValueForSailRow1(event.target.value));
            dispatch(setStartBalanseRow1(userMoney[event.target.value]))
        }
        else {
            fetchRates(event.target.value);
            dispatch(actualValueForSailRow1(event.target.value));
            dispatch(setStartBalanseRow1(userMoney[event.target.value]))
        }
    }

    useEffect(() => {
        if (Object.keys(userMoney).length !== undefined) {
            setNameOfValues(Object.keys(userMoney));
        }
    }, [Object.keys(userMoney).length]);



    return (
        <>
            <div className="maney__value">
                <select onChange={selectMoneyInVallet}>
                    {nameOfValues.map((currency, index) => (
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default React.memo(SelectorUsersMoney);