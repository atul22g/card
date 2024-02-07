/*
!Colors
*/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import dataReducer from '../reducer/reduces';

const rootReducer = combineReducers({
    data: dataReducer,
    // Add other reducers here if you have
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
