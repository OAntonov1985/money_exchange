import React from 'react';

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addUser, addUserMoney, setStartBalanseRow1, setStartBalanseRow2 } from '../App/store2';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import './login.css';
import data from '../../data/data.json'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <>
            <div className='login__page'>
                <div className='user__autorization'>Для подальшої роботи потрібно авторизуватися</div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Помилка введення пошти';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Невірно введениа пошта';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {

                        const result = data.users.filter(user => (user.email === values.email && user.password === values.password));
                        if (result.length !== 0) {
                            dispatch(addUser(result));
                            dispatch(addUserMoney(result[0].money));
                            dispatch(setStartBalanseRow1(result[0].money.USD));
                            dispatch(setStartBalanseRow2(result[0].money.EUR));
                            navigate('/main');
                            setSubmitting(false);
                        }
                        else {
                            alert('Користувача не знайдено');
                            resetForm()
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='user__avtorization__form'>
                            <Field type="email" name="email" placeholder='Введіть вашу пошту' className='input__email' />
                            <ErrorMessage name="email" component="div" className='error__masage' />
                            <Field type="password" name="password" placeholder='Введіть ваш пароль' className='input__password' />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" className='button__submit' disabled={isSubmitting}>
                                Авторизуватися
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default React.memo(Login);