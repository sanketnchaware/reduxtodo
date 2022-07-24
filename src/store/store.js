import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/todoSlice";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;