import Modal from 'react-modal';

function ModalFinishDeal(props) {
    const { modalMakeDeal, amountOfCurrencyRow1, amountOfCurrencyRow2, sellUserMoney, buyUserMoney, buttonFinalDeal } = props.modalFinal

    return (
        <>
            <Modal className={'custom-modal  modal__final__result'}
                isOpen={modalMakeDeal}>
                <h2>Обмін валют пройшов успішно</h2>
                <div>
                    Ви продали {amountOfCurrencyRow1}   {sellUserMoney} і придбали {amountOfCurrencyRow2} {buyUserMoney}
                </div>
                <div>
                    <button onClick={buttonFinalDeal}>OK</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalFinishDeal;