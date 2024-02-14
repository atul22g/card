import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./slices/colors";

const store = configureStore({
    reducer: {
        colors: colorsSlice.reducer,
    },
});

export default store;
