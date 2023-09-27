const key = '167d57c9ec214838861c8a6de1d14489';

export default async function fetchCurrencyRates() {
    // console.log('fetch')
    const response = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=${key}`
    );
    const data = await response.json();
    if (data.base === 'USD') {
        console.log('fetch')
        return data;
    }
    else {
        // data = 'error';
        return response
    }
}


