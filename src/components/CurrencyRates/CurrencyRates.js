import { useState } from 'react';

function CurrencyRates(props) {
    const { sellUserMoney } = props.data
    // const [sellUserMoney, setSellUserMoney] = useState('USD');
    // const [buyUserMoney, setBuyUserMoney] = useState('EUR');
    const [actualCourse, setActualCourse] = useState(null)

    async function fetchCurrencyRates() {
        try {
            const response = await fetch(
                `https://api.exchangerate.host/latest?base=${sellUserMoney}`
            );
            const data = await response.json();
            setActualCourse(data.rates.EUR);
            // setLoading(false);

        } catch (error) {
            // setLoading(false);
        }
    }
    fetchCurrencyRates();
    // setBuyUserMoney('EUR')

    return (
        <>
            <div className='actualCourse'>Астуальний курс: 1 {sellUserMoney} = {actualCourse} "EUR"</div>
        </>
    )
}

export default CurrencyRates