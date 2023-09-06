import { useEffect, useState } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    const { userAuthorized, setUserDataHandler } = props;
    const [displayHelloText, setDisplayHelloText] = useState('block')
    const [displayAutorizerUser, setDisplayAutorizerUser] = useState('none')
    const [loginIndicator, setLoginIndicator] = useState('Login')
    const length = userAuthorized.length;


    useEffect(() => {
        if (userAuthorized.length === undefined) {
            setDisplayHelloText('block')
            setDisplayAutorizerUser('none')
            setLoginIndicator('Login')
        }
        else {
            setDisplayHelloText('none')
            setDisplayAutorizerUser('block')
            setLoginIndicator('Log Out')
        }
    }, [userAuthorized.length])




    function goToLogin() {
        if (Object.entries(userAuthorized).length === 0) {
        }
        else if (userAuthorized.length === 1) {
            setUserDataHandler({})
        }
    }



    return (
        <>
            <div className='header'>
                <div className='header__hello__users' style={{ display: displayHelloText }}>
                    <div className='hello__user' >Вітаємо в додатку обміну валют</div>
                    <div className='hello__user__autorization'>Виповніть авторизацію для доспуту до рахунків</div>
                </div>
                {length !== undefined ? <div className='greetings__user' style={{ display: displayAutorizerUser }}>З поверненням, {userAuthorized[0].username}
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

// {props.userAuthorized[0].username}