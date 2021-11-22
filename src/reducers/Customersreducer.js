import {  ADD_CUSTOMER, REMOVE_CUSTOMER } from "../tools/constants";

const initialState = {
    customers: []
}

 const CustomerReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CUSTOMER: return{...state, customers: [...state.customers, action.customers]}
        case REMOVE_CUSTOMER: return{...state, customers: state.customers.filter(customer => {
            return customer.id !== action.customers;
        })}
        default: return state
    }
}

export default CustomerReducer;