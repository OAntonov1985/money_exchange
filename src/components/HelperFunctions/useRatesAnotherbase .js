import { useDispatch, useSelector } from "react-redux";
import { actualCourseAfterChangeValue } from '../App/store2';

const key = 'cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH';

function useRatesAnotherbase() {
    const dispatch = useDispatch();
    const valueForBuy = useSelector((state) => state.valueForBuy);

    async function fetchRates(value) {
        try {
            const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=&base_currency=${value}`);
            console.log("API_Base");
            const data = await response.json();
            for (let key in data.data) {
                if (key === valueForBuy) {
                    dispatch(actualCourseAfterChangeValue(parseFloat((data.data[key].value).toFixed(2))));
                }
            }
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { fetchRates };
}

export default useRatesAnotherbase;




