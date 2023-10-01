import './login.css';
import { useSelector, useDispatch } from "react-redux";
import { addUser, addUserMoney } from '../App/store2'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/data.json'

export default function Login(props) {
    // console.log('renderLogin')
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.addUser);
    // console.log(userInfo)

    const { setUserDataHandler } = props;
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate();

    function userEmailGet(event) {
        setUserEmail(event.target.value)
    }

    function test(event) {
        console.log(event.target.value)
    }

    function userPasswordGet(event) {
        setUserPassword(event.target.value)
    }

    function userIdentification(event) {
        event.preventDefault()
        const result = data.users.filter(user => (user.email === userEmail && user.password === userPassword))
        if (result.length !== 0) {
            dispatch(addUser(result));
            dispatch(addUserMoney(result));
            // setUserDataHandler(result)
            navigate('/main');
        }
        else (alert('Користувача не знайдено'))

    }

    useEffect(() => {
        console.log('Компонент Login');
    }, []);

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