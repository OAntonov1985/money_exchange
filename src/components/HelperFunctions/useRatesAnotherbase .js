import { useDispatch } from "react-redux";
import { addValueForSail } from '../App/store2';

const key = 'cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH';

function useRatesAnotherbase() {
    const dispatch = useDispatch();

    async function fetchRates(value) {
        try {
            const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=&base_currency=${value}`);
            console.log("API_Base");
            const data = await response.json();
            dispatch(addValueForSail(data.data));
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { fetchRates };
}

export default useRatesAnotherbase;




