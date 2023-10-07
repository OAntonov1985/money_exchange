import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputRow2Number, setDisplaySing, setButtonClassname, setStartBalanseRow1, setInputRow1Number } from '../../App/store2';


function InputNumberRow2() {
    const dispatch = useDispatch();
    const displaySing = useSelector((state) => state.displaySing);
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow1);
    const inputRow2 = useSelector((state) => state.inputRow2);


    function onChangeValue(event) {
        const value = +event.target.value;
        if (!isNaN(value)) {
            if (startBalanseRow2 - (+event.target.value) <= 0) {
                alert("Помилка. Недостатньо коштів на рахунку");
                dispatch(setDisplaySing('none'));
                dispatch(setButtonClassname('btn_inactive'));
                dispatch(setInputRow1Number(''));
                dispatch(setStartBalanseRow1(startBalanseRow2));
                dispatch(setInputRow2Number(''));
                event.target.value = '';
            }
            else {
                dispatch(setInputRow2Number(value));
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
                <div className='row__plus' style={{ display: displaySing }}>+</div>
                <input type="number" className='input__sell'
                    onChange={onChangeValue}
                    value={inputRow2 === 0 ? '' : inputRow2}
                    placeholder="0"
                />
            </div>
        </>
    )
}

export default React.memo(InputNumberRow2)