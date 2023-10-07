import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Start from '../Srart/Start';
import Header from '../Header/Header'
import Login from '../Login/Login';
import Main from '../Main/Main';
import UserInfo from '../UserInfo/UserInfo';
import Footer from '../Footer/Footer'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';



function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Start />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/userinfo" element={<UserInfo />} />
                    <Route path="/error" element={<ErrorBoundary />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default React.memo(App);