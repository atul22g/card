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

const dataState = {
    savecardData: {},
    cardData: {},
    modals: {},
    isOpen: null
};


const dataReducer = (state = dataState, action) => {
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
        case 'OPEN_MODAL':
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [action.payload]: true
                },
                isOpen: [action.payload][0]
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                cardData: {
                    ...state.cardData,
                    [action.payload]: {
                        ...state.savecardData[action.payload],
                    }
                },
                modals: {
                    ...state.modals,
                    [action.payload]: false,
                },
                isOpen: null
            };
        case 'SAVE_DATA':
            return {
                ...state,
                savecardData: {
                    ...state.cardData,
                },
                modals: {
                    ...state.modals,
                    [action.payload]: false,
                },
                isOpen: null
            };
        default:
            return state;
    }
};

export { colorReducer, detailReducer, dataReducer };
