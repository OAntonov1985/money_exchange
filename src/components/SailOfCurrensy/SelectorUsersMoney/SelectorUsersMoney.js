import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualValueForSailRow1, setStartBalanseRow1, setReadInpit } from '../../App/store2';
import useRatesAnotherbase from '../../HelperFunctions/useRatesAnotherbase ';
import { updateCurrencyData } from '../../HelperFunctions/UpdateCurrencyData';

function SelectorUsersMoney() {
    const dispatch = useDispatch();

    const userMoney = useSelector((state) => state.userMoney);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const { fetchRates } = useRatesAnotherbase();

    async function selectMoneyInVallet(event) {
        if (event.target.value === valueForBuy) {
            updateCurrencyData(dispatch, event, userMoney);
        }
        else {
            fetchRates(event.target.value);
            dispatch(setReadInpit(''));
            dispatch(actualValueForSailRow1(event.target.value));
            dispatch(setStartBalanseRow1(userMoney[event.target.value]))
        }
    }


    return (
        <>
            <div className="maney__value">
                <select onChange={selectMoneyInVallet} defaultValue={valueForSail}>
                    {Object.keys(userMoney).map((currency, index) => (
                        <option key={index} value={currency} >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default React.memo(SelectorUsersMoney);