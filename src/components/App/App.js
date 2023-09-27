import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Start from '../Srart/Start';
import Header from '../Header/Header'
import Login from '../Login/Login';
import Main from '../Main/Main';
import UserInfo from '../UserInfo/UserInfo';
import Footer from '../Footer/Footer'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';



function App() {
    const [userAuthorized, setUserAuthorized] = useState({}
        //     [{
        // "username": "user1",
        // "email": "user1@example.com",
        // "password": "password1",
        // "tel": "+1234567890",
        // "money": {
        //   "USD": 10012.36,
        //   "EUR": 877.15,
        //   "GBP": 750.00,
        //   "JPY": 12099.03
        // }
        //     }]
    ) // чи авторизований юзер


    const setUserDataHandler = (data) => {
        setUserAuthorized(data);
    };


    return (
        <>
            <Router>
                <Header userAuthorized={userAuthorized} setUserDataHandler={setUserDataHandler} />
                <Routes>
                    <Route exact path="/" element={<Start setUserDataHandler={setUserDataHandler} />} />
                    <Route path="/login" element={<Login setUserAuthorized={setUserAuthorized} setUserDataHandler={setUserDataHandler} />} />
                    <Route path="/main" element={<Main userAuthorized={userAuthorized} />} />
                    <Route path="/userinfo" element={<UserInfo userAuthorized={userAuthorized} />} />
                    <Route path="/error" element={<ErrorBoundary userAuthorized={userAuthorized} />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
