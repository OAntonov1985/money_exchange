import './login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/data.json'

export default function Login(props) {
    const { setUserDataHandler } = props;
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate();

    function userEmailGet(event) {
        setUserEmail(event.target.value)
    }

    function userPasswordGet(event) {
        setUserPassword(event.target.value)
    }




    function userIdentification(event) {
        event.preventDefault()
        const result = data.users.filter(user => (user.email === userEmail && user.password === userPassword))
        if (result.length !== 0) {
            setUserDataHandler(result)
            navigate('/main');

        }
        else (alert('Користувача не знайдено'))


    }


    return (
        <>

            <div className='login__page'>
                <div className='user__autorization'>Для подальшої роботи потрібно авторизуватися</div>
                <form action="" className='user__avtorization__form'>
                    <input type="text" placeholder='Введіть вашу пошту' className='input__email' onChange={userEmailGet} />
                    <input type="password" placeholder='Введіть ваш пароль' className='input__password' onChange={userPasswordGet} />
                    <button type='submit' className='button__submit' onClick={userIdentification}>Авторизуватися</button>
                </form>
            </div>
        </>
    );
}