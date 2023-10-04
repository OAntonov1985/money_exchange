import { useSelector, useDispatch } from 'react-redux';
import { actualValueRow1 } from '../App/store2';


export default function InputPatr() {
    const dispatch = useDispatch();
    const valuerInput1 = useSelector((state) => state.valuerInput1);
    console.log(valuerInput1)
    function setAmountCorrency(event) {
        // console.log(event.target.value);
        dispatch(actualValueRow1(+event.target.value))
    }

    return (
        <>
            <div className="right__sell__money">
                {/* <div className='row__sing'
                    style={{ display: displaySing }}>-</div> */}
                <input type="number" className='input__sell'
                    placeholder="0"
                    onChange={setAmountCorrency}
                // ref={input1}
                />
            </div>

        </>
    )
}