import '../ModalWindow/modal.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow';
import ImputNumberRow2 from './InputNumberRow2/ImputNumberRow2';
import MoneyInTheWalletRow2 from './MoneuInTheWalletRow2/MoneyInTheWalletRow2';


function BuyUserMoney() {
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const obj = { isModalOpen, setIsModalOpen }


    function findAnotherСurrency() {
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <div value={valueForBuy} onClick={findAnotherСurrency}> {valueForBuy}
                        </div>
                    </div>
                    <ModalWindow obj={obj} />
                    <MoneyInTheWalletRow2 />
                </div>
                <ImputNumberRow2 />
            </div>
        </>
    )
}

export default React.memo(BuyUserMoney);