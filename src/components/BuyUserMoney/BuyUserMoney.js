import '../ModalWindow/modal.css'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalWindow from '../ModalWindow/ModalWindow';
// const appRoot = document.getElementById('root'); // Знайдіть кореневий елемент свого додатку
// Modal.setAppElement(appRoot);
// import ModalWindow from '../ModalWindow/ModalWindow';



function BuyUserMoney(props) {
    const { userAuthorized, finalBalanseRow2, setFinalBalanseRow2, buyUserMoney, secondRowSign, displaySing, input2, input1, actualCourse, setFinalBalanse, sratrBalanseInWallet, sellUserMoney, setDisplaySing, setStartBalanseInWallet, setStartBalanseInWalletRow2, sratrBalanseInWalletRow2, setBuyUserMoney } = props.buyObj;
    const [nameOfValues, setNameOfValues] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const obj = { isModalOpen, setIsModalOpen }



    function changeValue() {

        if ((sratrBalanseInWallet - (+input2.current.value)) >= 0) {
            let res = (+input2.current.value) / actualCourse;
            input1.current.value = parseFloat(res.toFixed(2));
            setFinalBalanse(parseFloat((sratrBalanseInWallet - res).toFixed(2)))
            setFinalBalanseRow2(parseFloat((sratrBalanseInWalletRow2 + res * actualCourse).toFixed(2)))

        }
        // якщо недостатньо коштів повертаємо початковий балан рахунків
        else if ((sratrBalanseInWallet - (+input2.current.value)) < 0) {
            alert('Недостатньо коштів на рахунку');
            setDisplaySing('none');
            input1.current.value = '';
            input2.current.value = '';
            setStartBalanseInWallet(sratrBalanseInWallet)

            for (let key in userAuthorized[0].money) {
                if (key === sellUserMoney) {
                    setFinalBalanse(0)
                    setStartBalanseInWallet(userAuthorized[0].money[key])
                }
            }

            for (let key in userAuthorized[0].money) {
                if (key === buyUserMoney) {
                    setFinalBalanseRow2(userAuthorized[0].money[key])
                }
            }
        }
    }

    function changeMoneyInVallet2(event) {

        for (let key in userAuthorized[0].money) {
            if (key === event.target.value) {
                setBuyUserMoney(key)
                setStartBalanseInWalletRow2(userAuthorized[0].money[key]);
                input1.current.value = '';
                input2.current.value = '';
            }
        }
    }

    function findAnotherСurrency(event) {
        console.log(777)
        // setIsModalOpen(true)
        setIsModalOpen(true);
    }





    useEffect(() => {

        if (userAuthorized.length !== undefined) {
            setNameOfValues(Object.keys(userAuthorized[0].money));
        }

    }, [userAuthorized.length])


    // function setupMoney(event) {

    //     for (let key in userAuthorized[0].money) {
    //         if (key === event.target.value) {
    //             setBalanseBuy(userAuthorized[0].money[key])
    //         }
    //     }

    //     // setSellUserMoney(event.target.value)
    //     // setAmountСurrencyToSell(0);
    //     // setAmountСurrencyToBuy(0);
    // }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value">
                        <select value={buyUserMoney} onChange={changeMoneyInVallet2} onClick={findAnotherСurrency}>
                            {nameOfValues.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ModalWindow obj={obj} />

                    <div className="balanse">Баланс Вашого рахунку: <br />
                        {finalBalanseRow2 === 0 ? sratrBalanseInWalletRow2 : finalBalanseRow2}  {buyUserMoney}
                        {/* {sratrBalanseInWalletRow2} {buyUserMoney} */}
                    </div>
                </div>

                <div className="right__sell__money"><div className='row__plus' style={{ display: displaySing }}>{secondRowSign}</div><input type="number" className='input__sell'
                    placeholder="0"
                    onChange={changeValue}
                    ref={input2} /></div>
            </div>
        </>
    )

}

export default BuyUserMoney;