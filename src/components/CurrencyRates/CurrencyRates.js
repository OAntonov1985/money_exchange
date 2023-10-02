import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { valueForSail, actualCourse, } from '../App/store2'


function CurrencyRates(props) {
    const { sellUserMoney, buyUserMoney } = props.course;
    const [actualCourse, setActualCourse] = useState(0)


    const actualRates = useSelector((state) => state.actualCourse.rates);
    const valueForSail = useSelector((state) => state.valueForSail);
    const rates = useSelector((state) => state.actualCourseAnoterBase);


    useEffect(() => {
        if (Object.keys(rates).length === 0) {
            for (let key in actualRates) {
                if (key === buyUserMoney) {
                    setActualCourse(parseFloat(actualRates[key].toFixed(2)));
                }
            }
        }
        else {
            for (let key in rates) {
                if (key === buyUserMoney) {
                    setActualCourse(parseFloat(rates[key].value.toFixed(2)));
                }
            }
        }
    }, [actualCourse, rates])

    return (
        <>
            {!actualCourse ? 'Loading' :
                <div className='actualCourse'>Актуальний курс: 1 {sellUserMoney} = {actualCourse} {buyUserMoney}</div>
            }

        </>
    )
}

export default React.memo(CurrencyRates);