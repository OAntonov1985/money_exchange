import React from 'react';
import { useSelector } from 'react-redux';


function MoneyInTheWallet() {
    const valueForSail = useSelector((state) => state.valueForSail);
    const startBalanseRow1 = useSelector((state) => state.startBalanseRow1);
    const inputRow1 = useSelector((state) => state.inputRow1);

    return (
        <>
            <div className="balanse">Баланс Вашого рахунку: <br />
                {parseFloat((startBalanseRow1 - inputRow1).toFixed(2))}                          {valueForSail}
            </div>
        </>
    )
}

export default React.memo(MoneyInTheWallet);