
function CurrencyRates(props) {
    const { actualCourse, setActualCourse, sellUserMoney, buyUserMoney } = props.course

    async function fetchCurrencyRates() {
        try {
            const response = await fetch(
                `https://api.exchangerate.host/latest?base=${sellUserMoney}`
            );
            const data = await response.json();
            setActualCourse(data.rates.EUR);
            // console.log(data.rates)
            // setLoading(false);

        } catch (error) {
            // setLoading(false);
        }
    }
    fetchCurrencyRates();
    // setBuyUserMoney('EUR')

    return (
        <>
            <div className='actualCourse'>Актуальний курс: 1 {sellUserMoney} = {actualCourse} {buyUserMoney}</div>
        </>
    )
}

export default CurrencyRates