/*
!Colors
*/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import {colorReducer, detailReducer, modalReducer} from '../reducer/reducer';

const rootReducer = combineReducers({
    colors: colorReducer,
    details: detailReducer,
    modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
