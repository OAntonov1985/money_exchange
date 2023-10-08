import React from 'react';
import { useSelector } from 'react-redux';

function MoneyForSailInfoHead() {
    const valueForSail = useSelector((state) => state.valueForSail);
    return (
        <>
            <div className='moneyOption'><div>Продаж {valueForSail}</div>
            </div>
        </>
    )
}

export default React.memo(MoneyForSailInfoHead);