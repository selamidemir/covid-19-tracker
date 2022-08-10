import { configureStore } from "@reduxjs/toolkit";
import Covid19Reducer from './covid19Slice';

export const store = configureStore({
    reducer: {
        covid19: Covid19Reducer,
    }
});