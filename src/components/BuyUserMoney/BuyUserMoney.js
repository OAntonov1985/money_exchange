import '../ModalWindow/modal.css'
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';


function BuyUserMoney(props) {
    const { userAuthorized, finalBalanseRow2, setFinalBalanseRow2, buyUserMoney, displaySing, input2, input1, actualCourse, setFinalBalanse, sratrBalanseInWallet, sellUserMoney, setDisplaySing, setStartBalanseInWallet, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney, clearFunction, setAmountOfCurrencyRow2, setAmountOfCurrencyRow1 } = props.buyObj;


    const [isModalOpen, setIsModalOpen] = useState(false);

    const obj = { isModalOpen, setIsModalOpen, setBuyUserMoney, setStartBalanseInWalletRow2, userAuthorized, setFinalBalanseRow2, setFinalBalanse, setStartBalanseInWallet, sellUserMoney, setDisplaySing, input2, input1 }


    function changeValue() {
        setAmountOfCurrencyRow1(parseFloat((+input1.current.value).toFixed(2)));
        setAmountOfCurrencyRow2(parseFloat((+input2.current.value * 10).toFixed(2)));

        if ((sratrBalanseInWallet - (+input2.current.value)) >= 0) {
            let res = (+input2.current.value) / actualCourse;
            input1.current.value = parseFloat(res.toFixed(2));
            setFinalBalanse(parseFloat((sratrBalanseInWallet - res).toFixed(2)))
            setFinalBalanseRow2(parseFloat((sratrBalanseInWalletRow2 + res * actualCourse).toFixed(2)))

        }
        // якщо недостатньо коштів повертаємо початковий балан рахунків
        else if ((sratrBalanseInWallet - (+input2.current.value)) < 0) {
            alert('Недостатньо коштів на рахунку');
            clearFunction()
        }
    }

    function changeMoneyInVallet2(event) {

        for (let key in userAuthorized[0].money) {
            if (key === event.target.value) {
                setBuyUserMoney(key)
                setFinalBalanse(0)
                setStartBalanseInWalletRow2(userAuthorized[0].money[key]);
            }
        }
    }

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
                        {finalBalanseRow2 === 0 ? sratrBalanseInWalletRow2 : finalBalanseRow2}  {buyUserMoney}
                    </div>
                </div>
                <div className="right__sell__money">
                    <div className='row__plus' style={{ display: displaySing }}>+</div>
                    <input type="number" className='input__sell'
                        placeholder="0"
                        onChange={changeValue}
                        ref={input2} />
                </div>
            </div>
        </>
    )
}

export default BuyUserMoney;