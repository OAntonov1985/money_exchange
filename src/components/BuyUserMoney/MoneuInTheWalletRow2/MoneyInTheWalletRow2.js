import React from "react";
import { useSelector } from 'react-redux';


function MoneyInTheWalletRow2() {
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow2);
    const startActualCourse = useSelector((state) => state.startActualCourse);
    const inputRow2 = useSelector((state) => state.inputRow2);

    return (
        <>
            <div className="balanse">Баланс Вашого рахунку: <br />
                {parseFloat((startBalanseRow2 + (inputRow2 / startActualCourse)).toFixed(2))}                          {valueForBuy}
            </div>
        </>
    )
}

export default React.memo(MoneyInTheWalletRow2);