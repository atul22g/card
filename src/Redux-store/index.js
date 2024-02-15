import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./slices/colors";
import detailSlice from "./slices/detailSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
    reducer: {
        colors: colorsSlice,
        details: detailSlice,
        data: dataSlice,
    },
});

export default store;
