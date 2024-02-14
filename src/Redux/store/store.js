/*
!Colors
*/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import {colorReducer, detailReducer, dataReducer} from '../reducer/reducer';

const rootReducer = combineReducers({
    colors: colorReducer,
    details: detailReducer,
    data: dataReducer,
    // cardData: cardDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
