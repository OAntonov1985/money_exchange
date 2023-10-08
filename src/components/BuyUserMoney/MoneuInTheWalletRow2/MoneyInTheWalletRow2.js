import React from "react";
import { useSelector } from 'react-redux';


function MoneyInTheWalletRow2() {
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow2);
    const inputRow2 = useSelector((state) => state.inputRow2);


    return (
        <>
            <div className="balanse">Баланс Вашого рахунку: <br />
                {inputRow2 === '' ? parseFloat((startBalanseRow2).toFixed(2)) : parseFloat((startBalanseRow2 + inputRow2).toFixed(2))}
            </div>
        </>
    )
}

export default React.memo(MoneyInTheWalletRow2);