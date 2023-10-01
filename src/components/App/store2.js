import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
const key = '167d57c9ec214838861c8a6de1d14489';
const keyAnotherBase = "cur_live_3mrGIVgKkMheiPzzCT72r3nsjOyWtpWyVfZ22ekH";


export const fetchActualCourse = createAsyncThunk('actualCourse/fetchCourse', async () => {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${key}`);
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

        }
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

export const { addUser, addUserMoney, actualRatesAnotherBase } = userInfo.actions;

export const store = configureStore({
    reducer: userInfo.reducer,
    devTools: true,

});
store.dispatch(fetchActualCourse());

