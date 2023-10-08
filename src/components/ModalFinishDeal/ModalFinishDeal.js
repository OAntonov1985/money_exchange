import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addUserMoney, setInputRow1Number, setInputRow2Number, setDisplaySing, setStartBalanseRow1, setStartBalanseRow2, setButtonClassname } from '../App/store2';


function ModalFinishDeal(props) {
    const { modalMakeDeal, setmodalmakeDeal } = props.modalFinal;

    const dispatch = useDispatch();
    const inputRow1 = useSelector((state) => state.inputRow1);
    const inputRow2 = useSelector((state) => state.inputRow2);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const userMoney = useSelector((state) => state.userMoney);
    const startBalanseRow1 = useSelector((state) => state.startBalanseRow1);
    const startBalanseRow2 = useSelector((state) => state.startBalanseRow2);


    function buttonFinalDeal() {
        let newStateObject = { ...userMoney, [valueForSail]: (parseFloat((startBalanseRow1 - inputRow1).toFixed(2))), [valueForBuy]: (parseFloat((startBalanseRow2 + inputRow2).toFixed(2))) };
        dispatch(addUserMoney(newStateObject));
        dispatch(setInputRow1Number(''));
        dispatch(setInputRow2Number(''));
        dispatch(setDisplaySing('none'));
        dispatch(setStartBalanseRow1(startBalanseRow1 - inputRow1));
        dispatch(setStartBalanseRow2(startBalanseRow2 + inputRow2));
        dispatch(setButtonClassname('btn_inactive'));
        setmodalmakeDeal(false);
    }


    return (
        <>
            <Modal className={'custom-modal  modal__final__result'}
                isOpen={modalMakeDeal}>
                <h2>Обмін валют пройшов успішно</h2>
                <div>
                    Ви продали {inputRow1}   {valueForSail} і придбали {inputRow2} {valueForBuy}
                </div>
                <div>
                    <button onClick={buttonFinalDeal}>OK</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalFinishDeal;