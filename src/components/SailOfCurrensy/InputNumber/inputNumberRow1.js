import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputRow1Number, setDisplaySing, setButtonClassname, setInputRow2Number, setStartBalanseRow2 } from '../../App/store2';

function InputNumberRow1() {
    const dispatch = useDispatch();
    const inputRow1 = useSelector((state) => state.inputRow1);
    const inputRow2 = useSelector((state) => state.inputRow2);
    const startBalanseRow1 = useSelector((state) => state.startBalanseRow1);
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow2);
    const displaySing = useSelector((state) => state.displaySing);
    const startActualCourse = useSelector((state) => state.startActualCourse);

    function onChangeValue(event) {
        const value = +event.target.value;
        if (!isNaN(value)) {
            if (startBalanseRow1 - (+event.target.value) <= 0) {
                alert("Помилка. Недостатньо коштів на рахунку");
                dispatch(setDisplaySing('none'));
                dispatch(setButtonClassname('btn_inactive'));
                dispatch(setInputRow1Number(''));
                dispatch(setStartBalanseRow2(startBalanseRow2));
                dispatch(setInputRow2Number(''));
                event.target.value = '';
            }
            else {
                dispatch(setInputRow1Number(value));
                dispatch(setInputRow2Number(parseFloat((value * startActualCourse).toFixed(2))));
            };

        };
        if (+event.target.value.length === 0) {
            dispatch(setDisplaySing('none'));
            dispatch(setButtonClassname('btn_inactive'));
        }
        else if (+event.target.value.length !== 0) {
            dispatch(setDisplaySing('block'));
            dispatch(setButtonClassname('button__submit btn__main'));
        }
    }

    return (
        <>
            <div className="right__sell__money">
                <div className='row__sing'
                    style={{ display: displaySing }}>-</div>
                <input type="number" className='input__sell'
                    onChange={onChangeValue}
                    value={inputRow1 === 0 ? '' : inputRow1}
                    placeholder="0"
                />
            </div>
        </>
    )
}

export default React.memo(InputNumberRow1);