import '../ModalWindow/modal.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualValueForBuyRow2 } from '../App/store2'
import ModalWindow from '../ModalWindow/ModalWindow';
import ImputNumberRow2 from './InputNumberRow2/ImputNumberRow2';
import MoneyInTheWalletRow2 from './MoneuInTheWalletRow2/MoneyInTheWalletRow2';


function BuyUserMoney(props) {


    const userMoney = useSelector((state) => state.userMoney);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow2);
    const startActualCourse = useSelector((state) => state.startActualCourse);
    const displaySing = useSelector((state) => state.displaySing);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const obj = { isModalOpen, setIsModalOpen }




    // function handleChange(event) {
    //     // console.log(+event.target.value);
    //     // setButtonClassname('button__submit btn__main')
    //     // if ((sratrBalanseInWalletRow2 + (+event.target.value)) >= 0) {
    //     //     setDisplaySing('block');
    //     //     // setInputNumberRow1(+event.target.value);
    //     //     // setButtonClassname('button__submit btn__main')

    //     //     input1.current.value = +event.target.value / actualCourse;
    //     // }
    //     // else {
    //     //     // alert("Помилка! Недостатньо коштів на рахунку");
    //     //     // setInputNumberRow1(0);
    //     //     // setDisplaySing('none');
    //     //     // input1.current.value = '';
    //     //     // input2.current.value = '';
    //     //     // setFinalBalanse(0);
    //     //     // setButtonClassname('btn_inactive');
    //     // }
    // }


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
                    {/* <div className="balanse">Баланс Вашого рахунку: <br />
                        {parseFloat((startBalanseRow2 + (startActualCourse * 0)).toFixed(2))}                          {valueForBuy}
                    </div> */}
                </div>
                <ImputNumberRow2 />
            </div>
        </>
    )
}

export default React.memo(BuyUserMoney);;