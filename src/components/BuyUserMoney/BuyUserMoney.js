import '../ModalWindow/modal.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow';


function BuyUserMoney(props) {
    const { userAuthorized, setFinalBalanseRow2, buyUserMoney, displaySing, input2, input1, actualCourse, setFinalBalanse, sellUserMoney, setDisplaySing, setStartBalanseInWallet, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney, setAmountOfCurrencyRow2, inputNumberRow1 } = props.buyObj;

    const userMoney = useSelector((state) => state.userMoney);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const obj = { isModalOpen, setIsModalOpen, setBuyUserMoney, setStartBalanseInWalletRow2, setFinalBalanseRow2, setFinalBalanse, sellUserMoney, setDisplaySing, input2, input1 }



    function changeMoneyInVallet2(event) {

        for (let key in userMoney) {
            if (key === event.target.value) {
                setBuyUserMoney(key)
                setFinalBalanse(0)
                setStartBalanseInWalletRow2(userMoney[key]);
            }
        }
    };


    function findAnotherСurrency() {
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <div value={buyUserMoney} onChange={changeMoneyInVallet2} onClick={findAnotherСurrency}> {buyUserMoney}
                        </div>
                    </div>
                    <ModalWindow obj={obj} />
                    <div className="balanse">Баланс Вашого рахунку: <br />
                        {sratrBalanseInWalletRow2 + (actualCourse * inputNumberRow1)}
                        {buyUserMoney}
                    </div>
                </div>
                <div className="right__sell__money">
                    <div className='row__plus' style={{ display: displaySing }}>+</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                        ref={input2} />
                </div>
            </div>
        </>
    )
}

export default React.memo(BuyUserMoney);;