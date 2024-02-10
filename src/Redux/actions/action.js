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

/*
! Card Details
*/

export const FETCT_DETAILS_REQUEST = 'FETCT_DETAILS_REQUEST';
export const FETCT_DETAILS_SUCCESS = 'FETCT_DETAILS_SUCCESS';
export const FETCT_DETAILS_FAILURE = 'FETCT_DETAILS_FAILURE';

export const fetchDetails = () => {
    return dispatch => {
        dispatch(fetchDetailsRequest());
        fetch('data/details.json')
            .then(data => data.json())
            .then(details => dispatch(fetchDetailsSuccess(details)))
            .catch(error => dispatch(fetchDetailsFailure(error)));
    };
};

export const fetchDetailsRequest = () => ({
    type: FETCT_DETAILS_REQUEST,
});

export const fetchDetailsSuccess = details => ({
    type: FETCT_DETAILS_SUCCESS,
    payload: details,
});

export const fetchDetailsFailure = error => ({
    type: FETCT_DETAILS_FAILURE,
    payload: error,
});

/*
! Modals
*/

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalId) => ({
    type: 'OPEN_MODAL',
    payload: modalId
});

export const closeModal = (modalId) => ({
    type: 'CLOSE_MODAL',
    payload: modalId
});

