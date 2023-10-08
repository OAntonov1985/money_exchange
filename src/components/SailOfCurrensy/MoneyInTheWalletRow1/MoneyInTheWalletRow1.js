import React from 'react';
import { useSelector } from 'react-redux';


function MoneyInTheWallet() {
    const valueForSail = useSelector((state) => state.valueForSail);
    const startBalanseRow1 = useSelector((state) => state.startBalanseRow1);
    const inputRow1 = useSelector((state) => state.inputRow1);
    const rowIndex = useSelector((state) => state.rowIndex);

    return (
        <>
            <div className="balanse">Баланс Вашого рахунку: <br />
                {rowIndex ? parseFloat((startBalanseRow1 - inputRow1).toFixed(2)) : parseFloat((startBalanseRow1 - inputRow1).toFixed(2))}                {valueForSail}
            </div>
        </>
    )
}

export default React.memo(MoneyInTheWallet);