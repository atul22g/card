/*
!Colors
*/
import { FETCH_COLORS_REQUEST, FETCH_COLORS_SUCCESS, FETCH_COLORS_FAILURE } from '../actions/action';

const initialState = {
    loading: false,
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
        default:
            return state;
    }
};

export default colorsReducer;
