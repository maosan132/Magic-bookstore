import { combineReducers } from 'redux';
import bookStoreReducer from './books';

const rootReducer = combineReducers({ bookStoreReducer });
export default rootReducer;
