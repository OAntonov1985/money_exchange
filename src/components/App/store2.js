import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import namesOfCyrrebcies from '../../data/namesOfCyrrebcies.json';


const keyAnotherBase = "cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH";


export const fetchActualCourse = createAsyncThunk('actualCourse/fetchCourse', async () => {
    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${keyAnotherBase}&currencies=&base_currency=USD`);
    console.log("API")
    const data = await response.json();
    return data;
});


const userInfo = createSlice({
    name: '@@exchnge__store',
    initialState: {
        userInfo: {

        },
        userMoney: {

        },
        actualCourse: {

        },
        actualCourseAnoterBase: {

        },
        namesOfCyrrebcies: namesOfCyrrebcies,
        valueForSail: "USD",
        valueForBuy: "EUR",
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
        actualRatesAnotherBase: {
            reducer: (state, action) => {
                console.log(action.payload)
            },
        },
        addValueForSail: {
            reducer: (state, action) => {
                console.log(action.payload)
                state.actualCourseAnoterBase = action.payload
            },
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchActualCourse.fulfilled, (state, action) => {
            state.actualCourse = action.payload;
        });
    },
});

export const { addUser, addUserMoney, actualRatesAnotherBase, addValueForSail } = userInfo.actions;

export const store = configureStore({
    reducer: userInfo.reducer,
    devTools: true,

});
store.dispatch(fetchActualCourse());

