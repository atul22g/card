import { createSlice } from "@reduxjs/toolkit";

export const fetchColors = () => {
    return dispatch => {
        dispatch(fetchColorsRequest());
        fetch('data/colors.json')
            .then(response => response.json())
            .then(colors => dispatch(fetchColorsSuccess(colors)))
            .catch(error => dispatch(fetchColorsFailure(error)));
    };
};

const colorsSlice = createSlice({
    name: "Colors",
    initialState: [],
    reducers: {

    },
});

export default colorsSlice;
