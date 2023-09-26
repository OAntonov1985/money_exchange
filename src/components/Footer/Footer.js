import './footer.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const navigate = useNavigate();
    function push() {
        navigate('/');
    }
    return (
        <>
            <div className='fooret'>Створено із натхненням від дій ЗСУ  і особливо 3 штурмової Бригади АЗОВ за їх же підтримки</div>
            <button onClick={push}>на головнку</button>
        </>
    );
}