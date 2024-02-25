import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./slices/colors";
import detailSlice from "./slices/detailSlice";
import dataSlice from "./slices/dataSlice";
import togglePassordSlice from "./slices/togglePassord";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        colors: colorsSlice,
        details: detailSlice,
        data: dataSlice,
        togglePassord: togglePassordSlice,
        auth: authSlice
    },
});

export default store;
