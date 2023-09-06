import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Start from './components/Srart/Start';
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import UserInfo from './components/UserInfo/UserInfo';
import Footer from './components/Footer/Footer'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [userAuthorized, setUserAuthorized] = useState({}) // чи авторизований юзер


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
