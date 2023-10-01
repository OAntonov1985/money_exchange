import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actualCourseAnoterBase } from '../App/store2'


function CurrencyRates(props) {
    const { actualCourse, setActualCourse, sellUserMoney, buyUserMoney } = props.course;

    const actualRates = useSelector((state) => state.actualCourse.rates);
    const rates = useSelector((state) => state.actualCourseAnoterBase);
    // console.log(actualRates)
    // console.log(actualRatesAnotherBase)

    useEffect(() => {
        if (rates === undefined) {
            for (let key in actualRates) {
                if (key === buyUserMoney) {
                    console.log(rates)
                    setActualCourse(parseFloat(actualRates[key].toFixed(2)));
                }
            }
        }
        else {
            for (let key in rates) {
                if (key === buyUserMoney) {
                    console.log(rates)
                    setActualCourse(parseFloat(actualRates[key].toFixed(2)));
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