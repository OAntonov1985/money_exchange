import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function CurrencyRates(props) {
    const { sellUserMoney, buyUserMoney } = props.course;
    const [actualCourse, setActualCourse] = useState(0);

    const actualRates = useSelector((state) => state.actualCourse.data);
    const rates = useSelector((state) => state.actualCourseAnoterBase);

    useEffect(() => {

        if (Object.keys(rates).length === 0) {
            for (let key in actualRates) {
                if (key === buyUserMoney) {
                    setActualCourse(parseFloat(actualRates[key].value.toFixed(2)));
                }
            }
        }
        else {
            for (let key in actualRates) {
                if (key === buyUserMoney) {
                    setActualCourse(parseFloat(rates[key].value.toFixed(2)));
                }
            }
        }
    }, [buyUserMoney, sellUserMoney, rates])

    return (
        <>
            {!actualRates ? 'Loading' :
                <div className='actualCourse'>Актуальний курс: 1 {sellUserMoney} = {actualCourse} {buyUserMoney}
                </div>
            }

        </>
    )
}

export default React.memo(CurrencyRates);