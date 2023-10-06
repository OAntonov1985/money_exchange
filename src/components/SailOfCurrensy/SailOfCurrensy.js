import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualValueForSailRow1, valueForSail, valueForBuy, startActualCourse, actualCourseAfterChangeValue, setStartBalanseRow1 } from '../App/store2';
import useRatesAnotherbase from '../HelperFunctions/useRatesAnotherbase ';



function SailOfCurrensy(props) {
    // const { displaySing, input1, setSellUserMoney, buyUserMoney, setStartBalanseInWalletRow2, setDisplaySing, inputNumberRow1, setInputNumberRow1, sellUserMoney, setFinalBalanse, setButtonClassname, buttonClassname, actualCourse, input2 } = props.sellObj;

    const { displaySing } = props.sellObj;

    const userMoney = useSelector((state) => state.userMoney);
    const valueForSail = useSelector((state) => state.valueForSail);
    // const actualCourseAnoterBase = useSelector((state) => state.actualCourseAnoterBase);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const startBalanseRow1 = useSelector((state) => state.startBalanseRow1);
    const { fetchRates } = useRatesAnotherbase();
    // console.log(Object.keys(userMoney))


    const [nameOfValues, setNameOfValues] = useState([]);
    // const [sratrBalanseInWallet, setStartBalanseInWallet] = useState(userMoney.USD);
    const dispatch = useDispatch();

    async function selectMoneyInVallet(event) {
        if (event.target.value === valueForBuy) {
            console.log(1);
            dispatch(actualCourseAfterChangeValue(1));
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
    }, [Object.keys(userMoney).length, startBalanseRow1, valueForSail]);


    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <select onChange={selectMoneyInVallet}>
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="balanse">Баланс Вашого рахунку: <br />
                        {parseFloat((startBalanseRow1).toFixed(2))}                          {valueForSail}
                    </div>
                </div>
                <div className="right__sell__money">
                    <div className='row__sing'
                        style={{ display: displaySing }}>-</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                    // onChange={handleChange}
                    // ref={input1}
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(SailOfCurrensy);