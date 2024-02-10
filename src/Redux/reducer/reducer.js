/*
!Colors
*/

const colorState = {
    loading: false,
    color: '244, 90, 87',
    colors: [],
    error: '',
};

const colorReducer = (state = colorState, action) => {
    switch (action.type) {
        // Colors
        case 'FETCH_COLORS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_COLORS_SUCCESS':
            return {
                ...state,
                loading: false,
                colors: action.payload,
                error: '',
            };
        case 'FETCH_COLORS_FAILURE':
            return {
                ...state,
                loading: false,
                colors: [],
                error: action.payload,
            };
        case 'CURRENT_COLOR':
            return {
                ...state,
                color: action.payload,
                name: action.payload
            };
        default:
            return state;
    }
};

/*
! Card Details
*/

const detailState = {
    loading: false,
    details: [],
    error: '',
};


const detailReducer = (state = detailState, action) => {
    switch (action.type) {
        case 'FETCT_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCT_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                details: action.payload,
                error: '',
            };
        case 'FETCT_DETAILS_FAILURE':
            return {
                ...state,
                loading: false,
                details: [],
                error: action.payload,
            };
        default:
            return state;
    }
};


/*
! Modals
*/

const ModalState = {
    modals: {},
};


const modalReducer = (state = ModalState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [action.payload]: true
                }
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [action.payload]: false
                }
            };
        default:
            return state;
    }
};

/*
! Card Data
*/

const cardDataState = {
    cardData: {},
};

const cardDataReducer = (state = cardDataState, action) => {
    switch (action.type) {
        case 'UPDATE_CARD_DATA':
            return {
                ...state,
                cardData: {
                    ...state.cardData,
                    [action.payload.modal]: {
                        ...state.cardData[action.payload.modal],
                        [action.payload.field]: action.payload.value,
                    }
                },
            };
        default:
            return state;
    }
};



export { colorReducer, detailReducer, modalReducer, cardDataReducer };
