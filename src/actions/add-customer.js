import { ADD_CUSTOMER } from '../tools/constants';

export const AddCustomer = (customer) =>{
    return{
        type: ADD_CUSTOMER,
        id: Date.now(),
        customer
    }
}

// export default AddCustomer;