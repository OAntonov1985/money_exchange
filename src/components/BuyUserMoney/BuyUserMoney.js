
function BuyUserMoney(props) {
    const { amountСurrencyToBuy } = props.buyObj;

    function changeValue(event) {
        console.log(event)
    }

    return (
        <>
            <div className="sellMoney">
                <div className="left__sell__money">
                    <div className="maney__value"> EUR

                    </div>

                </div>
                <div className="right__sell__money"><input type="number" className='input__sell' value={amountСurrencyToBuy} onChange={changeValue} /></div>
            </div>
        </>
    )

}

export default BuyUserMoney;
// parseFloat(amountСurrencyToSell * actualCourse.toFixed(2))
// value={amountСurrencyToBuy }