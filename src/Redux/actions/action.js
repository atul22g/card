/*
!Colors
*/

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
    type: 'FETCH_COLORS_REQUEST',
});

export const fetchColorsSuccess = colors => ({
    type: 'FETCH_COLORS_SUCCESS',
    payload: colors,
});

export const fetchColorsFailure = error => ({
    type: 'FETCH_COLORS_FAILURE',
    payload: error,
});

export const currentColor = (Color) => ({
    type: 'CURRENT_COLOR',
    payload: Color,
});

/*
! Card Details
*/

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
    type: 'FETCT_DETAILS_REQUEST',
});

export const fetchDetailsSuccess = details => ({
    type: 'FETCT_DETAILS_SUCCESS',
    payload: details,
});

export const fetchDetailsFailure = error => ({
    type: 'FETCT_DETAILS_FAILURE',
    payload: error,
});

/*
! Modals
*/

export const openModal = (modalId) => ({
    type: 'OPEN_MODAL',
    payload: modalId
});

export const closeModal = (modalId) => ({
    type: 'CLOSE_MODAL',
    payload: modalId
});

export const saveData = (modalId) => ({
    type: 'SAVE_DATA',
    payload: modalId
});


/*
! Card Data
*/

export const updateCardData = (modal, field, value) => {
    return {
        type: 'UPDATE_CARD_DATA',
        payload: {modal, field, value }
    };
};