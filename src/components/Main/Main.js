import React from 'react';
import { useSelector } from 'react-redux';

import '../ModalWindow/modal.css';
import './main.css';


import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuyUserMoney from '../BuyUserMoney/BuyUserMoney';
import ModalFinishDeal from '../ModalFinishDeal/ModalFinishDeal';
import ButtonFinishDeal from './ButtonFinishDeal/ButtonFinishDeal';


function Main() {
    const userInfo = useSelector((state) => state.userInfo);
    const valueForSail = useSelector((state) => state.valueForSail);

    return (
        <>  {Object.keys(userInfo).length !== 0 ?
            <div className='main__page'>
                <div className='moneyOpsion'><div>Продаж {valueForSail}</div>
                </div>
                <CurrencyRates />
                <SailOfCurrensy />
                <BuyUserMoney />
                {/* <ModalFinishDeal modalFinal={modalFinal} /> */}
                <ButtonFinishDeal />
            </div> : <ErrorBoundary />}
        </>
    );
}

export default React.memo(Main);




