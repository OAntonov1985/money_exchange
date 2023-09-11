import './modal.css'

import { useState } from 'react';
import Modal from 'react-modal';
const appRoot = document.getElementById('root'); // Знайдіть кореневий елемент свого додатку
Modal.setAppElement(appRoot);

function ModalWindow(props) {
    const { isModalOpen, setIsModalOpen } = props.obj

    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('');

    //  function findAnotherСurrency(event) {
    //     console.log(777)
    //     setIsModalOpen(true)
    // }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
        setIsModalOpen(false); // Закрити модальне вікно після вибору валюти
    };





    return (
        <>
            <Modal className={'custom-modal'}
                style={{ height: '50vh' }}
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Модальне вікно для пошуку валюти"
            >
                <h2>Пошук назви валюти</h2>
                {/* Додайте тут функціональність для пошуку і вибору валюти */}
                <button onClick={handleCloseModal}>Закрити</button>                        </Modal>
        </>
    )
}

export default ModalWindow