import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../ModalWindow/modal.css';
import './main.css';


import CurrencyRates from '../CurrencyRates/CurrencyRates';
import SailOfCurrensy from '../SailOfCurrensy/SailOfCurrensy';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuyUserMoney from '../BuyUserMoney/BuyUserMoney';
import ModalFinishDeal from '../ModalFinishDeal/ModalFinishDeal';
import ButtonFinishDeal from './ButtonFinishDeal/ButtonFinishDeal';
import MoneyForSailInfoHead from './MoneyForSailInfoHead/MoneyForSailInfoHead';


function Main() {
    const [modalMakeDeal, setmodalmakeDeal] = useState(false)
    const userInfo = useSelector((state) => state.userInfo);

    const buttonClassname = useSelector((state) => state.buttonClassname);
    const modalFinal = { setmodalmakeDeal, modalMakeDeal, finalDeal };

    function finalDeal() {
        if (buttonClassname !== 'btn_inactive') {
            setmodalmakeDeal(true);
        }

    }

    return (
        <>  {Object.keys(userInfo).length !== 0 ?
            <div className='main__page'>
                <MoneyForSailInfoHead />
                <CurrencyRates />
                <SailOfCurrensy />
                <BuyUserMoney />
                <ModalFinishDeal modalFinal={modalFinal} />
                <ButtonFinishDeal onClick={finalDeal} />
            </div> : <ErrorBoundary />}
        </>
    );
}

export default React.memo(Main);




