import { combineReducers } from 'redux';
import bookStoreReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({ bookStoreReducer, filterReducer });
export default rootReducer;
