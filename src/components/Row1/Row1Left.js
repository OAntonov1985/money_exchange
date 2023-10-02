import { useDispatch, useSelector } from "react-redux";
import { addValueForSail } from "../App/store2";

function Row1Left() {
    const dispatch = useDispatch();
    const userMoney = useSelector((state) => state.userMoney);

    function onChangeValueRow1(event) {
        console.log(event.target.value);
        dispatch(addValueForSail(event.target.value))
    }



    return (
        <>
            <select onChange={onChangeValueRow1}>
                {Object.keys(userMoney).map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </>
    )
}
// Row1Left()
export default Row1Left;