/*
!Colors
*/
import { FETCH_COLORS_REQUEST, FETCH_COLORS_SUCCESS, FETCH_COLORS_FAILURE, CURRENT_COLOR } from '../actions/action';

const initialState = {
    loading: false,
    color: '244, 90, 87',
    colors: [],
    error: '',
};

const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLORS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COLORS_SUCCESS:
            return {
                ...state,
                loading: false,
                colors: action.payload,
                error: '',
            };
        case FETCH_COLORS_FAILURE:
            return {
                ...state,
                loading: false,
                colors: [],
                error: action.payload,
            };
        case CURRENT_COLOR:
            return {
                ...state,
                color: action.payload,
                name: action.payload
            };
        default:
            return state;
    }
};

export default colorsReducer;
