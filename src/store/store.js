import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";

const store = configureStore({
    reducer: {
        counterReducer,
    },
    devTools: true,
});

export default store;