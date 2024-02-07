/*
!Colors
*/
export const FETCH_COLORS_REQUEST = 'FETCH_COLORS_REQUEST';
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS';
export const FETCH_COLORS_FAILURE = 'FETCH_COLORS_FAILURE';
export const CURRENT_COLOR = 'CURRENT_COLOR';

export const fetchColors = () => {
    return dispatch => {
        dispatch(fetchColorsRequest());
        fetch('data/colors.json')
            .then(response => response.json())
            .then(colors => dispatch(fetchColorsSuccess(colors)))
            .catch(error => dispatch(fetchColorsFailure(error)));
    };
};

export const fetchColorsRequest = () => ({
    type: FETCH_COLORS_REQUEST,
});

export const fetchColorsSuccess = colors => ({
    type: FETCH_COLORS_SUCCESS,
    payload: colors,
});

export const fetchColorsFailure = error => ({
    type: FETCH_COLORS_FAILURE,
    payload: error,
});

export const currentColor = (Color) => ({
        type: CURRENT_COLOR,
        payload: Color,
});