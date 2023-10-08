import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../App/store2'
import { NavLink } from 'react-router-dom';

import './header.css'


function Header() {

    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();
    const lengthArr = Object.keys(userInfo).length
    const [displayHelloText, setDisplayHelloText] = useState('block')
    const [displayAutorizerUser, setDisplayAutorizerUser] = useState('none')
    const [loginIndicator, setLoginIndicator] = useState('Login')


    useEffect(() => {

        if (lengthArr === 0) {
            setDisplayHelloText('block')
            setDisplayAutorizerUser('none')
            setLoginIndicator('Login')
        }
        else {
            setDisplayHelloText('none')
            setDisplayAutorizerUser('block')
            setLoginIndicator('Log Out')
        }
    }, [lengthArr]);


    function goToLogin() {
        if (lengthArr === 0) {
        }
        else if (lengthArr === 1) {
            dispatch(addUser({}));
        }
    };

    return (
        <>
            <div className='header'>

                <div className='header__hello__users' style={{ display: displayHelloText }}>
                    <div className='hello__user' >Вітаємо в додатку обміну валют</div>
                    <div className='hello__user__autorization'>Виповніть авторизацію для доспуту до рахунків</div>
                </div>

                {lengthArr !== 0 ? <div className='greetings__user' style={{ display: displayAutorizerUser }}>З поверненням, {userInfo[0].username}
                </div> : null}

                <div className='user__info' style={{ display: displayAutorizerUser }}>
                    <NavLink to='/userinfo' >Інформація про стан рахунків</NavLink>
                </div>

                <div className='header__linktolog'>
                    <NavLink to='/login' onClick={goToLogin}>{loginIndicator}</NavLink>
                </div>
            </div>
        </>
    );
}

export default React.memo(Header);
