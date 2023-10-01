import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
const key = '167d57c9ec214838861c8a6de1d14489';

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
        isLoading: true
    },
    reducers: {
        addUser: {
            reducer: (state, action) => {
                console.log(action.payload)
                state.userInfo = action.payload
            },
        },
        addUserMoney: {
            reducer: (state, action) => {
                console.log(action.payload[0].money)
                state.userMoney = action.payload[0].money
            },
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchActualCourse.fulfilled, (state, action) => {
            state.actualCourse = action.payload;
            state.isLoading = false;
        });
    },
});

export const { addUser, addUserMoney, toggleTodo } = userInfo.actions;

export const store = configureStore({
    reducer: userInfo.reducer,
    // reducer: {
    //     usetInfo: userInfo.reducer,
    //     addUserMoney: addUserMoney.reduser
    // },
    devTools: true,
    // middleware: (getDeafaultMiddlware) => getDeafaultMiddlware().concat(logger),
    // preloadedState: [{ id: 1, title: 'Redux', completed: true, }],
    // preloadedState: [],
    // enhancers: []
});
store.dispatch(fetchActualCourse());
