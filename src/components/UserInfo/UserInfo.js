import React from 'react';
import { useNavigate } from 'react-router-dom';
import './userinfo.css'

export default function UserInfo(props) {
    const { userAuthorized } = props;
    const navigate = useNavigate();

    function goToMain() {
        navigate('/main');
    }

    return (
        <>
            <div className='userinfo__page'>
                <div>Баланс Ваших рахунків</div>
                {userAuthorized.length !== undefined ? <div className='user__balanse'><ul>
                    {Object.entries(userAuthorized[0].money).map(([currency, rate]) => (
                        <li key={currency}>
                            {currency}: {rate}
                        </li>
                    ))}
                </ul></div> : null}
                {/* <div className='user__balanse'><ul>
                    {Object.entries(userAuthorized[0].money).map(([currency, rate]) => (
                        <li key={currency}>
                            {currency}: {rate}
                        </li>
                    ))}
                </ul></div> */}
                <div className='btn__goTo__main'>
                    <button className='button__submit' onClick={goToMain}>Перейти на головну</button>
                </div>
            </div>

        </>
    );
}