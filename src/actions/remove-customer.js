import { REMOVE_CUSTOMER } from '../tools/constants';

export const RemoveCustomer = (customer) =>{
    return{
        type: REMOVE_CUSTOMER,
        customer
    }
}

// export default RemoveCustomer;