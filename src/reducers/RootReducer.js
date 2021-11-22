import { combineReducers } from 'redux'
import CashReducer from './Cashreducer';
import CustomerReducer from './Customersreducer';

export const rootReducer = combineReducers({
    CashReducer,
    CustomerReducer
})