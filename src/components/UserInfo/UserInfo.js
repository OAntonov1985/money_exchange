import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './userinfo.css'

export default function UserInfo(props) {
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.userInfo);
    const lengthArr = Object.keys(userInfo).length

    function goToMain() {
        navigate('/main');
    }

    return (
        <>
            {lengthArr !== undefined ? <div className='userinfo__page'>
                <div>Баланс Ваших рахунків</div>
                <div className='user__balanse'><ul>
                    {Object.entries(userInfo[0].money).map(([currency, rate]) => (
                        <li key={currency}>
                            {currency}: {rate}
                        </li>
                    ))}
                </ul></div>
                <div className='btn__goTo__main'>
                    <button className='button__submit' onClick={goToMain}>Перейти на головну</button>
                </div>
            </div> : <ErrorBoundary />}
        </>
    );
}