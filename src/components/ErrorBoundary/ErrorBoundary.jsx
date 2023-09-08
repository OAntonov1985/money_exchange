import { useNavigate } from 'react-router-dom';
import './error.css'

export default function ErrorBoundary() {
    const navigate = useNavigate();

    function goToLoginPage(event) {
        event.preventDefault()
        navigate('/login');

    }

    return (
        <>
            <div className="main__page"> <div className="error">
                <div className="h1__error"><h1 className="h1__error">Ви не авторизовані</h1></div>
                <div> <button className='button__submit' onClick={goToLoginPage}> Авторизуйтесь для доступу до рахунків</button> </div>
            </div>
            </div>
        </>
    );
}