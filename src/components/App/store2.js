import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import namesOfCyrrebcies from '../../data/namesOfCyrrebcies.json';


const keyAnotherBase = "cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH";


export const fetchActualCourse = createAsyncThunk('actualCourse/fetchCourse', async () => {
    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${keyAnotherBase}&currencies=&base_currency=USD`);
    console.log("API")
    const data = await response.json();
    return data;
});

// https://api.currencyapi.com/v3/latest?apikey=cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH&currencies=&base_currency=USD


const userInfo = createSlice({
    name: '@@exchnge__store',
    initialState: {
        valueForSail: "USD",
        valueForBuy: "EUR",
        startActualCourse: 0.95,
        startBalanseRow1: 0,
        startBalanseRow2: 0,
        userInfo: {

        },
        userMoney: {

        },

        actualCourseAnoterBase: {

        },
        namesOfCyrrebcies: namesOfCyrrebcies,

        // valuerInput1: 0,
    },
    reducers: {
        addUser: {
            reducer: (state, action) => {
                state.userInfo = action.payload
            },
        },
        addUserMoney: {
            reducer: (state, action) => {
                state.userMoney = action.payload[0].money
            },
        },
        addValueForSail: {
            reducer: (state, action) => {
                console.log(action.payload)
                state.actualCourseAnoterBase = action.payload
            },
        },
        actualValueForSailRow1: {
            reducer: (state, action) => {
                state.valueForSail = action.payload
            },
        },
        actualValueForBuyRow2: {
            reducer: (state, action) => {
                state.valueForBuy = action.payload
            },
        },
        actualCourseAfterChangeValue: {
            reducer: (state, action) => {
                state.startActualCourse = action.payload
            },
        },
        setStartBalanseRow1: {
            reducer: (state, action) => {
                state.startBalanseRow1 = action.payload
            },
        },
        setStartBalanseRow2: {
            reducer: (state, action) => {
                state.startBalanseRow2 = action.payload
            },
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchActualCourse.fulfilled, (state, action) => {
            state.actualCourseAnoterBase = action.payload;
        });
    },
});

export const { addUser, addUserMoney, actualRatesAnotherBase, addValueForSail, actualValueForSailRow1, actualValueForBuyRow2, actualCourseAfterChangeValue, setStartBalanseRow1, setStartBalanseRow2 } = userInfo.actions;

export const store = configureStore({
    reducer: userInfo.reducer,
    devTools: true,

});
store.dispatch(fetchActualCourse());
// setInterval(() => {
//     store.dispatch(fetchActualCourse());
// }, 10000);


