import React from 'react';
import InputNumberRow1 from './InputNumber/inputNumberRow1';
import MoneyInTheWalletRow1 from './MoneyInTheWalletRow1/MoneyInTheWalletRow1';
import SelectorUsersMoney from './SelectorUsersMoney/SelectorUsersMoney';


function SailOfCurrensy() {
    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <SelectorUsersMoney />
                    <MoneyInTheWalletRow1 />
                </div>
                <InputNumberRow1 />
            </div>
        </>
    )
}

export default React.memo(SailOfCurrensy);