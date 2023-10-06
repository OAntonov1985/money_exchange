import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function CurrencyRates(props) {
    const rates = useSelector((state) => state.actualCourseAnoterBase);
    const valueForSail = useSelector((state) => state.valueForSail);
    const valueForBuy = useSelector((state) => state.valueForBuy);
    const startActualCourse = useSelector((state) => state.startActualCourse);


    return (
        <>
            {!rates ? 'Loading' :
                <div className='actualCourse'>Актуальний курс: 1 {valueForSail} =
                    {startActualCourse} {valueForBuy}
                </div>
            }

        </>
    )
}

export default React.memo(CurrencyRates);